import mongoose from "mongoose";

const applicationSchema = mongoose.Schema(
    {
        username : {
            type: String,
            required : [true, "Please provide Employee username"],
        },
        job_id: {
            type: String,
            required: [true, "Please provide job id"],
        },
    },
    {
        timestamps : true,
    }
);

export const applications = mongoose.model('applications', applicationSchema);