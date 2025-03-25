import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getMessages, getUsersForSidebar, sendMessage } from '../controllers/messageController.js';

const router = express.Router();


//Ne moze svako da salje poruke samo ulogovani korisnici pa imamo protectRoute
router.get("/conversations", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);



export default router