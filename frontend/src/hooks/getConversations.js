
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'


const getConversations = () => {
    const [loading,setLoading] = useState(false)
    const [conversations,setConversations] = useState([])

    useEffect(() =>{
        const getConversations = async() => {
            setLoading(true)
            try{
                const res = await axios.get('/api/users')
                setConversations(res.data.filteredUsers)
                toast.success(res.data.message)
            }catch(err){
                console.log(err)
                setLoading(false)
            }finally{
                setLoading(false)
            }
        }

        getConversations()
    },[])

    return {loading,conversations}
}

export { getConversations}