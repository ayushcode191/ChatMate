import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const {MONGO_URL} = process.env;
        if(!MONGO_URL) throw new Error("MONGO_URL is not set");
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGODB CONNECTED:", conn.connection.host);
    }
    catch (error) {
        console.log("Error connection to MONGODB:"+ error);
        process.exit(1); // 1 status code means fails, 0 means success
    }
};