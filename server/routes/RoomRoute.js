import express from 'express';
import { createRoom, findRoom, getUserRoom } from '../controllers/RoomController.js';

const router = express.Router();

router.post('/create-room', createRoom);
router.get('/get-user-room', getUserRoom);
router.get('/find-room', findRoom);

export default router;