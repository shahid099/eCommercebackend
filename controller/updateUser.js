import userModel from '../models/userModel.js'
async function updateUser(req, res) {
    try {

        const sessionUser = req.userId

        const { userId, name, email, role } = req.body
        const payload = {
            ...(name && { name: name }), 
            ...(email && { email: email }),
            ...(role && { role: role }),
        }

        const user  = await userModel.findById(sessionUser)
        console.log("user.role ", user.role)

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            data: updateUser,
            message: "User Updated", 
            success: true, 
            error: false
        })
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
    })
    }
}

export default updateUser