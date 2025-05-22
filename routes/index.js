import express from 'express';
const router = express.Router();
import userSignUpController from '../controller/userSignUp.js'
import userSignInController from '../controller/userSignIn.js';
import userDetailsController from '../controller/userDetails.js';
import userLogout from '../controller/userLogout.js';
import authToken from '../middleware/authToken.js';
import allUsers from '../controller/allUsers.js';
import updateUser from '../controller/updateUser.js';

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get('/userLogout', userLogout)


// Admin Panel
router.get("/all-users", authToken, allUsers)
router.post("/update-user", authToken, updateUser)


export default router;