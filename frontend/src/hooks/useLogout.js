import React from 'react'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import axios from "axios"
import toast from 'react-hot-toast'

const useLogout = () => {
  const [loading , setLoading] = useState(false)
  const {setAuthUser} = useAuthContext();

    const logout = async() => {
        setLoading(true)
        try {
            const res = await axios.post("/api/auth/logout")
            console.log(res.message)
            localStorage.clear("authUser")
            setAuthUser(null)
            toast.success("Logged out successfully") 
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, logout}
}

export  {useLogout}