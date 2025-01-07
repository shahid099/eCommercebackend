import mongoose from "mongoose";

const connectDB = async ()=> {
    try {
       await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;