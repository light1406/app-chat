import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        name: String,
        age: Number,
    }
);

const UserModel = mongoose.model('user', UserSchema);
export default UserModel;