import userModel from '../models/userModel.js'
const  userDetailsController = async (req, res) => {
    try {
        console.log("User Id: ", req.userId)
        const user = await userModel.findById(req.userId)
        
        res.status(200).json({
            data: user, 
            error: false, 
            success: true, 
            message: "User Details"
        })
        console.log("User", user);
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
    })
    }
}

export default userDetailsController