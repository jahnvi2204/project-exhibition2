import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
    {
        username : {
            type: String,
            required : [true, "Please provide unique Username"],
            unique: [true, "Username Exist"]
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            unique : false,
        },
    },
    {
        timestamps : true,
    }
);

export const employees = mongoose.model('employees', employeeSchema);