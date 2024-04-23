import express from 'express';
import { Jobs } from '../models/jobs.js';
import { Profiles } from '../models/profiles.js';

const router = express.Router();

router.get('/jobs/:userid', async (req, res) => {
    try {
        const { userid } = req.params;

        const userProfile = await Profiles.findOne({ "userid": userid });

        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        const totalWorkExperience = userProfile.workExperienceYears1 + userProfile.workExperienceYears2;

        const filteredJobs = await Jobs.find({ "workExperience": { $lte: totalWorkExperience } })
                                       .sort({ "salary": -1 })
                                       .limit(5); 

        return res.status(200).json({
            totalJobs: filteredJobs.length,
            data: filteredJobs
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

router.get('/users/:jobid', async (req, res) => {
    try {
        const { jobid } = req.params;

        const job = await Jobs.findById(jobid);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        const filteredProfiles = await Profiles.aggregate([
            {
                $addFields: {
                    totalWorkExperience: { $add: ["$workExperienceYears1", "$workExperienceYears2"] }
                }
            },
            {
                $match: {
                    $or: [
                        { "totalWorkExperience": { $gte: job.workExperience } }
                    ]
                }
            },
            {
                $sort: {
                    totalWorkExperience: -1,
                    collegeCGPA: -1,
                    _12thPercentage: -1
                }
            },
            {
                $limit: 5
            }
        ]);

        return res.status(200).json({
            totalProfiles: filteredProfiles.length,
            data: filteredProfiles
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});


export default router;
