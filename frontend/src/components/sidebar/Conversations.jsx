import React from "react";

import useGetConversation from "../../hooks/useGetConversation";

import Conversation from "./Conversation";

function Conversations() {
  const { loading, conversations } = useGetConversation();
  console.log("Conversations", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
}

export default Conversations;
