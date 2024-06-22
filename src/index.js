import { configDotenv } from "dotenv";
configDotenv();

import connectDB from "./db/index.js";
connectDB();



/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("error : ", error);
            throw error;
        })
        app.listen(`${process.env.PORT}`, () => {
            console.log("App Is Listening to Port ", process.env.PORT);
            console.log("Successfully Connected to DB");
        })

    } catch (error) {
        console.error("Error : ", error);
        throw error
    }
})()

*/