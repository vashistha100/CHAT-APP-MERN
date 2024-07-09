import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const { loggedInUserId } = req.user._id; // from protectRoute middleware
    console.log(req.user)
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); // all users except logged in user
    
    res.status(201).json(allUsers);
  } catch (error) {
    console.error("Error in getUserForSidebar controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
