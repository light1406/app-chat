import RoomModel from "../models/roomModel.js"

export const createRoom = async (req, res) => {
    try{
        const newRoom = new RoomModel({
            members: [req.body.senderId, req.body.revicerId]
        });
        const result = await newRoom.save();
        res.status(200).json(result);
    }catch(error){
        res.status(500).json(error);
    }
}

export const getUserRoom = async (req, res) => {

}

export const findRoom = async (req, res) => {

}