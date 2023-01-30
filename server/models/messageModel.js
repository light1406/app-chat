import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        chatId: String,
        senderId: String,
        message: String,
        status: String,
    }
);

const MessageModel = mongoose.model("message", MessageSchema)
export default MessageModel;