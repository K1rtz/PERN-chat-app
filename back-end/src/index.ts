import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import {app, server} from "./socket/socket.js"
import dotenv from "dotenv";
import path from "path"

dotenv.config();


const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
// const app = express()

app.use(cookieParser());
app.use(express.json());

//moved up
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)




if(process.env.NODE_ENV !== "development"){
    app.use(express.static(path.join(__dirname, "/front-end/dist")));
    app.get("*",(req, res)=>{
        res.sendFile(path.join(__dirname, "front-end", "dist", "index.html"));
    })    
}    

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT )
})