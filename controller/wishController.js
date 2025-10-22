import wishModel from "../models/wishModel.js"

export const createWish = async (req,res)=>{
    try {
        const request = req.body

        const response = await wishModel.create({
            wish : request.wish
        })

        res.status(201).json({
            message: "Wish berhasil di buat",
            data:response
        })
    } catch (error) {
        
    }
}

export const Wishlist = async (req,res)=>{
     try{
        const data = await wishModel.find({})

        res.status(200).json({
            message: "Wish List",
            data : data
        })
    }catch(error){
        res.status(500).json({
            message : error,
            data : null
        })
    }
}
export const updateWish = async(req,res)=>{
    try {
        const id = req.params?.id
        const request =req.body
        if(!id){
            return res.status(500).json({
                message: "Id wajib di isi",
                data:null
            })
        }
        const response = await wishModel.findByIdAndUpdate(id,{
            wish :request.wish
        })

        if (!response){
            return res.status(500).json({
                message : "Wish gagal di update",
                data:null
            })
        }
        return res.status(200).json({
            message : "Wish berhasil di update",
            data:null
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
            
}

export const deleteWish = async(req,res)=>{
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                message: "Id wajib di isi",
                data:null
            })
        }
        const response = await wishModel.findByIdAndDelete(id)

        if (response){
            return res.status(200).json({
                message : "Wish berhasil dihapus",
                data:null
            })
        }
        return res.status(404).json({
            message : "Wish tidak ditemukan",
            data:null
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}