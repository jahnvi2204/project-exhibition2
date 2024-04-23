import mongoose from "mongoose";

const userSchema = mongoose.Schema(
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
        email: {
            type: String,
            required : [true, "Please provide a unique email"],
            unique: [true, "Email already in use"],
        },
    },
    {
        timestamps : true,
    }
);

export const users = mongoose.model('users', userSchema);