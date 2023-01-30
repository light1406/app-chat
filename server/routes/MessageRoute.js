import express from 'express';
import { getMessages, insertMessage, updateStatusMessage } from '../controllers/MessageController.js';

const router = express.Router();

router.post('/insert-message', insertMessage);
router.put('/update-message', updateStatusMessage);
router.get('/get-messages', getMessages);

export default router;