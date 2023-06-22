import React from "react";
import "./StartBotBtn.css";

function StartBotBtn(props) {
  const { isOpen, startBot } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <button className="message-btn__start" onClick={startBot}>
      START
    </button>
  );
}

export default StartBotBtn;
