import express from 'express';
import jwt from 'jsonwebtoken';
import {applications} from '../models/applications.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newapplicationProfile = req.body;

        const applicationProfile = await applications.create(newapplicationProfile);

        return res.status(201).send(applicationProfile);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

export default router;