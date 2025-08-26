import mongoose from "mongoose";

const podcastsSchema = new mongoose.Schema({
    frontImage:{
        type:String,
        unique:true,
        required:true
    },
    audioFile:{
        type:String,
        unique:true,
        required:true
    },
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        unique:true,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
}, { timestamps: true });

const podCastModel=mongoose.model("podcasts",podcastsSchema)
export default podCastModel