import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
// import cors from "cors";
// import {app, server} from "../../socket/socket.tsx"
import {app, server} from "./socket/socket.js"
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 5000;

// const app = express()




app.use(cookieParser());
app.use(express.json());
 
// app.use(cors({
//     origin: "http://localhost:5000",  // Tvoj frontend URL
//     credentials: true, // Omogućava slanje cookies
// }));

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT )
})