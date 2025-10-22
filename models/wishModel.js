import mongoose from "mongoose";

const WishSchema = new mongoose.Schema(
    {
        wish : {
            type: String,
            trim: true,
            required:true
        }
    },
    {
        timestamps : true
    }
)

const wishModel = new mongoose.model("wishes", WishSchema)
export default wishModel