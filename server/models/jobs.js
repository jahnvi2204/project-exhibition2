import mongoose from "mongoose";

const jobsSchema = mongoose.Schema(
    {
        jobPosition: {
            type: String,
            required : true,
        },
        employerUsername: {
            type: String,
            required : true,
        },
        companyName: {
            type : String,
            required : true,
        },
        city: {
            type : String,
            required : true,
        },
        companyName: {
            type : String,
            required : true,
        },
        salary: {
            type : Number,
            required : true,
        },
        workExperience: {
            type : Number,
            required : true,
        },
        startDate: {
            type : Date,
            required : true,
        },
        applyTill: {
            type : Date,
            required : true,
        },
        additionalInfoFromEmployer: {
            type : String,
            required : true,
        },
        skills: {
            type : String,
            required : true,
        },
    },
    {
        timestamps : true,
    }
);

export const Jobs = mongoose.model('Jobs', jobsSchema);