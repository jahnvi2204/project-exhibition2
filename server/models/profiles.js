import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required : true,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phoneNumber: {
            type : Number,
        },
        city: {
            type : String,
        },
        field: {
            type : String,
        },
        education: {
            type : String,
        },
        collegeCGPA: {
            type : Number,
        },
        _12thPercentage: {
            type : Number,
        },
        workExperience1: {
            type : String,
        },
        workExperienceYears1: {
            type : Number,
        },
        workExperience2: {
            type : String,
        },
        workExperienceYears2: {
            type : Number,
        },
        projects: {
            type : String,
        },
        skills: {
            type : String,
        },
        portfolioLink: {
            type : String,
        },
        accomplishments: {
            type : String,
        },
    },
    {
        timestamps : true,
    }
);

export const Profiles = mongoose.model('Profiles', profileSchema);