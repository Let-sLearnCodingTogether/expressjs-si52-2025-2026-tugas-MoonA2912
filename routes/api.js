import express from "express" 
import * as authController from "../controller/authController.js"
import * as wishController from "../controller/wishController.js"
import { protect } from '../utils/verifyToken.js';

const api= express.Router()

api.post("/register", authController.register )
api.post ('/login', authController.login)
api.get('/profile', protect, authController.showProfile)

api.post('/buat_wish', protect, wishController.createWish)
api.get("/wish", protect, wishController.Wishlist)
api.put("/wish/:id",protect,wishController.updateWish)
api.delete("/wish/:id",protect,wishController.deleteWish)

export default api