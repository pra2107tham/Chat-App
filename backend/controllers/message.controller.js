import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import {getReceiverSocketId} from "../scoket/socket.js"
import {io} from "../scoket/socket.js"

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body
        const recieverId= req.params.id
        // console.log(recieverId)
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [
                    senderId,
                    recieverId
                ],
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId:recieverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await Promise.all[conversation.save(), newMessage.save()]
        
        //SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(recieverId)
        if(receiverSocketId){
            // io.to(<socket_id>).emit() used to send the newMessage to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }


        res
        .status(201)
        .json(newMessage)

    } catch (error) {
        console.log("Error sending message :", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export const getMessage = async(req,res) =>{
    try {
        const userToChatId = req.params.id
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants:{
                $all: [senderId, userToChatId]
            }
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(200).json(messages)
        
    } catch (error) {
        console.log("Error sending message :", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}