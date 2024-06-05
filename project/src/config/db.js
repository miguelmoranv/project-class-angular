import mongoose from "mongoose";

const MONGO_URL = 'mongodb+srv://xXMORANXx:loquillo824617395@cluster0.lusljyd.mongodb.net/project';

export const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URL);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("connect mongoDB");
    }catch (err){
        console.log(err);
    }
};
