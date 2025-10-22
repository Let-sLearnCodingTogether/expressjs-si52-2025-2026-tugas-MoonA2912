import express from "express" 
import * as authController from "../controller/authController.js"
import { verifyToken } from '../utils/verifyToken.js';

const api= express.Router()

api.post("/register", authController.register )
api.post ('/login', authController.login)
api.get('/profile/:id', authController.showProfile)

api.get('/profile', verifyToken, authController.showProfile);

export default api