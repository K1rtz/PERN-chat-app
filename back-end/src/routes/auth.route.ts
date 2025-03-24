import express from 'express';
import { login, logout, signup, getMe } from '../controllers/authController.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();
//<url>/api/auth/[login/logout/signup]
//http://localhost:5000

router.get("/me", protectRoute, getMe)//prvo ce se pozvati middleware pa tek onda getMe ako prodje mid
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)



export default router;