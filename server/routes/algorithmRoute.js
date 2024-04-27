import express from 'express';
import { Jobs } from '../models/jobs.js';
import { Profiles } from '../models/profiles.js';
import {applications} from '../models/applications.js';

const router = express.Router();

router.get('/jobs/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const userProfiles = await Profiles.find({ "username": username }).sort({ "createdAt": -1 });
        const userProfile = userProfiles[0];
        console.log(userProfile);
        if (!userProfile) {
            return res.status(404).json({ message: 'User profile not found' });
        }

        const totalWorkExperience = userProfile.workExperienceYears1 + userProfile.workExperienceYears2;

        const filteredJobs = await Jobs.find({ "workExperience": { $lte: totalWorkExperience }, "jobPosition": userProfile.field })
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

// router.get('/users/:jobid', async (req, res) => {
//     try {
//         const { jobid } = req.params;

//         const job = await Jobs.findById(jobid);

//         if (!job) {
//             return res.status(404).json({ message: 'Job not found' });
//         }

//         const filteredProfiles = await Profiles.aggregate([
//             {
//                 $addFields: {
//                     totalWorkExperience: { $add: ["$workExperienceYears1", "$workExperienceYears2"] }
//                 }
//             },
//             {
//                 $match: {
//                     $or: [
//                         { "totalWorkExperience": { $gte: job.workExperience } }
//                     ]
//                 }
//             },
//             {
//                 $sort: {
//                     totalWorkExperience: -1,
//                     collegeCGPA: -1,
//                     _12thPercentage: -1
//                 }
//             },
//             {
//                 $limit: 5
//             }
//         ]);

//         return res.status(200).json({
//             totalProfiles: filteredProfiles.length,
//             data: filteredProfiles
//         });
//     } catch (error) {
//         console.log(error.message);
//         return res.status(500).send({ message: error.message });
//     }
// });

router.get('/users/:jobid', async (req, res) => {
    try {
        const { jobid } = req.params;

        const job = await Jobs.findById(jobid);    

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Fetch applications for the specific job
        const Applications = await applications.find({ "job_id": jobid });

        // Extract usernames of employees who applied for the job
        const appliedUsernames = Applications.map(app => app.username);


        // Find profiles of employees who applied for the job
        const filteredProfiles = await Profiles.aggregate([
            {
                $match: {
                    username: { $in: appliedUsernames }
                }
            },
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

router.get('/applicants/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const job = await Jobs.findOne({"employerUsername": username});    

        const jobid = job.employerUsername;

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Fetch applications for the specific job
        const Applications = await applications.find({ "job_id": jobid });

        // Extract usernames of employees who applied for the job
        const appliedUsernames = Applications.map(app => app.username);


        // Find profiles of employees who applied for the job
        const filteredProfiles = await Profiles.aggregate([
            {
                $match: {
                    username: { $in: appliedUsernames }
                }
            },
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
