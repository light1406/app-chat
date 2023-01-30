import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        }
    }
);

const RoomModel = mongoose.model('room', RoomSchema);
export default RoomModel;