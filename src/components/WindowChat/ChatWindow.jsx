import React from "react";
import "./ChatWindow.css";
import StartBotBtn from "../StartBotBtn/StartBotBtn.jsx";
import WelcomeWindowBot from "../WelcomeWindow/WelcomeWindowBot.jsx";
import FormSend from "../FormSend/FormSend.jsx";
import DialogWindow from "../DialogWindow/DialogWindow.jsx";
import arrayMessages from "../../utils/arrayMessages";

function ChatWindow(props) {
  const { isOpen, userName } = props;

  const [showStartBotBtn, setShowStartBotBtn] = React.useState(true);
  const [showWelcomeWindowBot, setShowWelcomeWindowBot] = React.useState(true);

  const [showDialogWindow, setShowDialogWindow] = React.useState(false);
  const [showFormSend, setShowFormSend] = React.useState(false);

  let [messages, setMessages] = React.useState(arrayMessages);

  const messageRef = React.useRef(null);

  const startBot = () => {
    setShowStartBotBtn(false);
    setShowWelcomeWindowBot(false);
    setShowFormSend(true);
    setShowDialogWindow(true);
  };

  function updateUserMessage(object) {
    messages = [...messages, object];
    setMessages(messages);
  }

  function updateBotMessage(object) {
    messages = [...messages, object];
    setMessages(messages);
  }

  React.useEffect(() => {
    setTimeout(() => {
      messageRef.current?.scroll({
        top: messageRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 400);
  }, [messages]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="window-chat">
      <div className="chat__body">
        <div className="chat-header">
          <div className="header-title">FreePhotos</div>
          <div className="header-bot__title">Bot v1.0</div>
        </div>
        <div className="chat-main">
          <div className="main-user">
            <h3 className="user">User:</h3>
            <div className="user-nickname">{userName}</div>
          </div>
          <div className="main-messages">
            <div ref={messageRef} className="messages-message">
              <WelcomeWindowBot
                isOpen={showWelcomeWindowBot}
                userName={userName}
              />
              <div className="messages">
                <DialogWindow isOpen={showDialogWindow} messages={messages} />
              </div>
            </div>
            <form className="messages__form">
              <StartBotBtn isOpen={showStartBotBtn} startBot={startBot} />
              <FormSend
                isOpen={showFormSend}
                updateUserMessage={updateUserMessage}
                updateBotMessage={updateBotMessage}
                userName={userName}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
