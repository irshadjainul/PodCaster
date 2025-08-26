import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const authMiddleware= async(req,res,next)=>{
    const token =req.cookies.podcasterUserToken
    try {
        if(token){
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            const user=await userModel.findById(decode.id)
            if(!user){
                return res.status(404).json({message:"user not found"})
            }
            req.user=user
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Invalid Token"})
    }
}

export default authMiddleware