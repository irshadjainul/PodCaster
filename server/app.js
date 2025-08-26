import express from 'express'
export const app=express()
import dotenv from 'dotenv'
import connectDb from './db/db.js'
import cookieParser from 'cookie-parser'
import userApi from './routes/user.js'
import categoryApi from './routes/categories.js'
import podcastApi from './routes/podacast.js'
import cors from 'cors'

dotenv.config()
connectDb()

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use("/uploads",express.static("uploads"))


//all routes
app.use("/api/v1",userApi)
app.use("/api/v1",categoryApi)
app.use("/api/v1",podcastApi)


app.get("/",(req,res)=>{
    res.send("hii from backend")
})