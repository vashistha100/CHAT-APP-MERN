import Conversation from "../models/conversation.model.js";

import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;

    const senderId = req.user._id;  // this req.user is from protectRoute middleware where it identified the user and attached it to req.user..so no need to worry

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId], 
      });
    }

    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

// await conversation.save();
// await newMessage.save();

    await Promise.all([conversation.save(), newMessage.save()]); //both process will work in parallel hence saving time

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in message controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
