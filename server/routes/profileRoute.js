import express from 'express';
import {Profiles} from '../models/profiles.js';


const router = express.Router();


router.post ('/', async (req, res) => {
    try {
        const newProfile = {username: req.body.profile.username,
                            userid: req.body.profile.userid,
                            phoneNumber: req.body.profile.phoneNumber,
                            city: req.body.profile.city,
                            field: req.body.profile.field,
                            education: req.body.profile.education,
                            collegeCGPA: req.body.profile.collegeCGPA,
                            _12thPercentage: req.body.profile._12thPercentage,
                            workExperience1: req.body.profile.workExperience1,
                            workExperienceYears1: req.body.profile.workExperienceYears1,
                            workExperience2: req.body.profile.workExperience2,
                            workExperienceYears2: req.body.profile.workExperienceYears2,
                            projects: req.body.profile.projects,
                            skills: req.body.profile.skills,
                            portfolioLink: req.body.profile.portfolioLink,
                            accomplishments: req.body.profile.accomplishments};
        const Profile = await Profiles.create(newProfile);

        return res.status(201).send(Profile);
    } catch (error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

router.delete ('/:userid', async (req, res) => {
    try {
        const { userid } = req.params;

        const profiles = await Profiles.deleteOne({"userid" : userid});

        if (!profiles){
            return res.status(404).json({message : 'Profile not found'});
        }

        return res.status(200).send({message : 'Profile deleted successfully'});

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});

router.get('/:userid',async (req, res) => {
    try {

        const { userid } = req.params;

        const profiles = await Profiles.find({"userid" : userid }).sort({ "index": 1 });

        return res.status(200).json({
            length : profiles.length,
            data: profiles
        });
    }catch {
        console.log(error.message);
        return res.status(500).send({message : error.message});
    }
});

router.put('/:userid', async (req, res) => {
    try {
        const { userid } = req.params;
        const updatedFields = req.body; 
        
        const result = await Profiles.updateOne({ "userid": userid }, { $set: updatedFields });

        if (!result) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        return res.status(200).send({ message: 'Profile updated successfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;