import "./BotImages.css";
import Image from "../../components/Image/Image.jsx";

function BotImages(props) {
  const { message } = props;

  // const [openModal, setOpenModal] = React.useState(false);

  return message.map((image, index) => {
    return <Image key={index} image={image} />;
  });
}

export default BotImages;
