import express from 'express';
const router = express.Router();
import userSignUpController from '../controller/userSignUp.js'
import userSignInController from '../controller/userSignIn.js';
import userDetailsController from '../controller/userDetails.js';
import userLogout from '../controller/userLogout.js';
import authToken from '../middleware/authToken.js';

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get('/userLogout', userLogout)
export default router;