import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast';
import axios from 'axios';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() =>{
    const getMessages = async() => {
        setLoading(true)
        try {
            const res = await axios.get(`/api/messages/${selectedConversation._id}`)
            if(res.data.error){
                throw new Error(res.data.error)
            }
            setMessages(res.data)
            toast.success("Messages fetched")
        } catch (error) {
            toast.error(error.mesage)
        }finally{
            setLoading(false)
        }
    }
    if(selectedConversation?._id) getMessages()
  },[selectedConversation._id, setMessages])
  return {loading, messages}
}

export default useGetMessages