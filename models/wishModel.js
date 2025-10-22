import mongoose from "mongoose";

const WishSchema = new mongoose.Schema(
    {
        itemName : {
            type: String,
            trim: true,
            required:true
        },
        price : {
            type : Number,
            trim : true,
            required : true
        },
        link : {
            type : String,
            trim : true,
            required :true
        }

    },
    {
        timestamps : true
    }
)

const wishModel = new mongoose.model("wishes", WishSchema)
export default wishModel