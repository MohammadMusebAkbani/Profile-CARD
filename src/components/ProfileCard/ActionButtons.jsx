import React from "react";

// Action Buttons (Subscribe, Message)
const ActionButtons = ({ onSubscribe, onMessage }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onSubscribe}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Subscribe
      </button>
      <button
        onClick={onMessage}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Message
      </button>
    </div>
  );
};

export default ActionButtons;
