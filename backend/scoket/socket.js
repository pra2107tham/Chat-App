import {Server} from 'socket.io';
import http from 'http';
import express from 'express';
import cors from "cors"

const app = express();

const server= http.createServer(app) 
const io = new Server(server,{
    cors:{
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"]
    }
});
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}
const userSocketMap = {}; //{userid: socketId}

io.on('connection', (socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("A user connected : ", socket.id)

    if(userId!="undefined") userSocketMap[userId] = socket.id

    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on('disconnect',() =>{
        console.log("A user got disconnected : ", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export {app, io ,server}