import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const register =  async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const newUser = new UserModel(req.body);
        const { username } = req.body;
        const oldUser = await UserModel.findOne({ username });
        if (oldUser) {
            res.status(400).json('Tên tài khoản đã tồn tại');
            return;
        }
        const result = await newUser.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await UserModel.findOne({ username });

        if (user){
            const validity = await bcrypt.compare(password, user.password);

            if (validity){
                res.status(200).json(user);
            }else{
                res.status(400).json('Mật khẩu không đúng');
            }
        }else{
            res.status(400).json('Không tìm thấy tài khoản');
        }    
    } catch (error) {
        res.status(500).json(error);
    }
}