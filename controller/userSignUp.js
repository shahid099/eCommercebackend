import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userSignUpController = async (req, res)=> {
    try {
        const { name, email, password } = req.body;

        const user =  await userModel.findOne({email})

        if(user) {
            throw new Error ("Alredy user exist.")
        }

        if(!name) {
            throw new Error("Please provide name")
        }
        if(!email) {
            throw new Error("Please provide email")
        }
        if(!password) {
            throw new Error("Please provide password")
        }

        const salt = bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(password, salt)

        if(!hashPassword) {
            throw new Error("Someting is wrong")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser, 
            success: true,
            error: false, 
            message: "User created successfully!"
        })

    } catch (err) {
        res.json({
            message: err.message || err, 
            error: true,
            success: false,
        })
    }
}


export default userSignUpController;