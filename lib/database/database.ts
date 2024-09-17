import mongoose from "mongoose";

export const connectToDB = async () => {
    let isConnected = false;
    mongoose.set('strictQuery', true);
    if(isConnected) {
        console.log('MongoDB is already running');
        return;
    }

    try {
        await mongoose.connect(process.env?.MONGO_DB_URI || "jknmslkmjnskks", {dbName: "bettips"});
        isConnected = true;
        console.log(`MongoDB is connected`);
    } catch (error) {
        console.log(error)
    }
}