import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { getConversations } from './getConversations';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage) =>{
            setMessages([...messages,newMessage]);
        })

        return () => socket?.off("newMessage")
    },[socket,messages,setMessages ])
}

export default useListenMessages