import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading,setLoading] = useState(false)

  const {setAuthUser} = useAuthContext()

  const signup = async ({fullName,username,password,confirmPassword,gender}) => {
    const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success){
        return
    }
    setLoading(true)
    try {
        const res = await axios.post("/api/auth/signup",
            {
                fullName,
                username,
                password,
                confirmPassword,
                gender
            }
        )
        const data = res.data
        console.log(data)
        toast.success(res.data.message) 

        //local storage
        localStorage.setItem('authUser',JSON.stringify(data))
        //context
        setAuthUser(data)
    } catch (error) {
        toast.error(error.response.data.message)
    }finally{
        setLoading(false)
    }
  }
  return {signup,loading}
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword}){
    if(!fullName || !username || !password || !confirmPassword){
        toast.error('Please fill all the fields')
        return false
    }
    if(password !== confirmPassword){
        toast.error('Passwords do not match')
        return false
    }
    if(password.length < 6){
        toast.error('Password must be atleast 6 characters long')
        return false
    }
    return true;
}