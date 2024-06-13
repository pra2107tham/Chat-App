import React from "react";

const Message = () => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://avatar.iran.liara.run/public"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hii, whatssup</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:20
      </div>
    </div>
  );
};

export default Message;
