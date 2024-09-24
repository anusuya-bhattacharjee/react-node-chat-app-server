import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const databseURl = process.env.DATABASE_URL;

app.use(
    cors({
        origin: [process.env.ORIGIN],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
});

mongoose.connect(databseURl).then(()=> {
    console.log("Database Connected!!")
}).catch(err=> {
    console.log(err.message);
})