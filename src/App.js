import "./App.css";
import ModalWindow from "./components/ModalWindow/ModalWindow.jsx";
import ChatWindow from "./components/WindowChat/ChatWindow.jsx";
import checkValidity from "./utils/checkValidity";

function App() {
  const [showModalWindow, setShowModalWindow] = React.useState(true);
  const [showChatWindow, setShowChatWindow] = React.useState(false);
  const [userName, setUserName] = React.useState(null);

  const sendForm = () => {
    return (inputValue) => {
      if (checkValidity(inputValue)) {
        setUserName(inputValue);
        setShowModalWindow(false);
        setShowChatWindow(true);
      }
    };
  };

  return (
    <div className="wrapper">
      <ModalWindow isOpen={showModalWindow} sendForm={sendForm} />
      <ChatWindow isOpen={showChatWindow} userName={userName} />
    </div>
  );
}

export default App;
