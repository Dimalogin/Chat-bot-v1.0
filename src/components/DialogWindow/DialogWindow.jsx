import React from "react";
import BotImages from "../BotImages/BotImages.jsx";
import "./DialogWindow.css";

function DialogWindow(props) {
  const { isOpen, messages } = props;

  if (!isOpen) {
    return null;
  }

  return messages.map((object, index) => {
    if (object.who === "bot") {
      if (object.isEmpty) {
        return (
          <div key={index} className="message message-bot">
            <div className="message-body body-bot">
              <h3 className="bot-title">{object.data.nickname}</h3>
              <div className="bot-text">{object.data.message}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className="message message-bot">
            <div className="message-body body-bot">
              <h3 className="bot-title">{object.data.nickname}</h3>
              <div className="bot-text">
                {object.data.message.map((image, index) => {
                  return <BotImages key={index} image={image} />;
                })}
              </div>
            </div>
          </div>
        );
      }
    }
    if (object.who === "user") {
      return (
        <div key={index} className="message message-user">
          <div className="message-body body-user">
            <h3 className="user-title">{object.data.nickname}</h3>
            <div className="user-text">{object.data.message}</div>
          </div>
        </div>
      );
    }
  });
}

export default DialogWindow;
