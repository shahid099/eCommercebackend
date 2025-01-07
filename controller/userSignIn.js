import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js"


const userSignInController = async (req, res)=> {
    try {
        const { email, password } = req.body
        if(!email) {
            throw new Error("Please Provide email")
        }
        if(!password) {
            throw new Error("Please Provide password")
        }

        const user = await userModel.findOne({email})
        if(!user) {
            throw new Error("User not Found.")
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        console.log("CheckPassword", checkPassword)

        if(checkPassword) {
            const tokenData = {
                _id: user.id, 
                email: user.email
            }

            const token = await jwt.sign( tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60*60*8*4 });

            const tokenOption = {
                httpOnly: true, 
                secure: true
            }

            res.cookie("token", token, tokenOption).json({
                message: "User login Successfully.",
                data: token,
                success: true,
                error: false,
            })
             
        } else {
            throw new Error("Please check Password")
        }
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

export default userSignInController;