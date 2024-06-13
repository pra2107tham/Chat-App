import React from "react";
import Conversation from "./Conversation";
import { getConversations } from "../../hooks/getConversations";

const Conversations = () => {
  const { loading, conversations } = getConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
