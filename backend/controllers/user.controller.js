import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try {

        const loggedInUser = req.user._id

        const filteredUsers = await User.find({_id:{$ne:loggedInUser}})
        
    } catch (error) {
        console.log("Error getting users : ", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}