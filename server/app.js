import express from 'express'
const app=express()
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
  origin: [
      "https://podcaster-04.vercel.app",
    ],
  credentials: true
}));
app.use("/uploads",express.static("uploads"))


//all routes
app.use("/api/v1/user",userApi)
app.use("/api/v1/category",categoryApi)
app.use("/api/v1/podcast",podcastApi)


app.get("/",(req,res)=>{
    res.send("hii from backend")
})


export default app
