import dotenv from "dotenv"
import express from "express"
import api from "./routes/api.js"
import database from "./config/database.js"
import passport from "passport"
import "./config/passport.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use(passport.initialize())

app.use('/api', api)

app.listen (3000, ()=>{
    database();
    console.log(`Aplikasi berjalan di http://localhost:3000`)
})