import MessageModel from "../models/messageModel";

export const insertMessage = async (req, res) => {
    const { chatId, senderId, message } = req.body;
    try {
        const newMessage = new MessageModel(
            chatId,
            senderId,
            message,
            'Đã gửi'
        );
        const result = await newMessage.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateStatusMessage = async (req, res) => {
    const { id, status } = req.body;
    try {
        const message = await MessageModel.findByIdAndUpdate(id, status);

        res.status(200).json(message);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getMessages = async (req, res) => {
};