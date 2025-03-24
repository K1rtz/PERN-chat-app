import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
// import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(cookieParser());
app.use(express.json());
 
// app.use(cors({
//     origin: "http://localhost:5000",  // Tvoj frontend URL
//     credentials: true, // Omogućava slanje cookies
// }));

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})