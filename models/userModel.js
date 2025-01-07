import mongoose from "mongoose";

const userSchem = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    profilePic: String
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchem);
export default userModel;