import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required : true,
        },
        name: {
            type: String,
            required : true,
        },
        phoneNumber: {
            type : Number,
            required : true,
        },
        city: {
            type : String,
            required : true,
        },
        field: {
            type : String,
            required : true,
        },
        education: {
            type : String,
            required : true,
        },
        collegeCGPA: {
            type : Number,
            required : true,
        },
        _12thPercentage: {
            type : Number,
            required : true,
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
            required : true,
        },
        skills: {
            type : String,
            required : true,
        },
        portfolioLink: {
            type : String,
            required : true,
        },
        accomplishments: {
            type : String,
            required : true,
        },
    },
    {
        timestamps : true,
    }
);

export const Profiles = mongoose.model('Profiles', profileSchema);