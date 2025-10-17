import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";
import { compare } from "../utils/hashUtil.js";

export const register = async (req, res) => {
    try{
        const registerData = req.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username:registerData.username,
            email: registerData.email,
            password: hashPassword
        })
        
        res.status(201).json({
            message: "Berhasil register, silahkan login",
            data: null
        })
        
    } catch (e){
        res.status(500).json({
            message: e.message,
            data: null
        })
    }
}

export const login = async (req, res) => {
    try {
        const loginData = req.body

        const user = await UserModel.findOne({
            email: loginData.email
        })

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
                data: null
            })
        }
        if (compare(loginData.password, user.password)) {
            res.status(200).json({
                message: "Login Berhasil",
                data: {
                    username: user.username,
                    email: user.email,
                    token: "TOKEN"
                }
            })
            return res.status(401).json({
                message: "Login Tidak Berhasil",
                data: null
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null
        })
    }

}