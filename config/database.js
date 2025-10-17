import mongoose from "mongoose";

const database = async() => {
    try {
        console.log("Melakukan koneksi ke mongodb");

        const response = await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")

        console.log(`Koneksi ke mongodb berhasil host : ${response.host}`);
    }catch (error){
        console.error("Gagal terkoneksi ke mongodb");
        process.exit(1)
    }
}

export default database