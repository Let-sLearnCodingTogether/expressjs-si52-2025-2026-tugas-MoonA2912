import UserModel from "../models/userModel.js";

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

