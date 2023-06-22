import "./WelcomeWindowBot.css";

function WelcomeWindowBot(props) {
  const { isOpen, userName } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="message-welcome">
      <h3 className="welcome__title">
        Приветствую вас: <span> {userName}</span>
      </h3>
      <h3 className="welcome__subtitle">Что умеет этот Bot?</h3>
      <p className="welcome-text text-p-1">
        Bot ищет фотографии на любую тему по вашему запросу и отправляет их вам.
        В колличестве 5 фотографий.
      </p>
      <p className="welcome-text text-p-2">
        Запрос должен быть на английском языке, например — <b>Nature</b>,{" "}
        <b>Tigers</b>, <b>People</b>— или более конкретным, например,{" "}
        <b>People group at work</b>.
      </p>
    </div>
  );
}

export default WelcomeWindowBot;
