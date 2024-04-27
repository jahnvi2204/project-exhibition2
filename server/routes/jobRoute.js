import express from 'express';
import { Jobs } from '../models/jobs.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newJobProfile = req.body;

        const jobProfile = await Jobs.create(newJobProfile);

        return res.status(201).send(jobProfile);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProfile = await Jobs.findByIdAndDelete(id);

        if (!deletedProfile) {
            return res.status(404).json({ message: 'Job profile not found' });
        }

        return res.status(200).send({ message: 'Job profile deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

router.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;

        const jobProfile = await Jobs.findOne({"employerUsername":username});

        if (!jobProfile) {
            return res.status(404).json({ message: 'Job profile not found' });
        }

        return res.status(200).json(jobProfile);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

router.put('/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const updatedFields = req.body;
        const updatedProfile = await Jobs.updateOne({ "employerUsername": username }, { $set: updatedFields });

        if (!updatedProfile) {
            return res.status(404).json({ message: 'Job profile not found' });
        }

        return res.status(200).send({ message: 'Job profile updated successfully', updatedProfile });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

export default router;
