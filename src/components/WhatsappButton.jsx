import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "2349064612051"; 
  const message = encodeURIComponent("Hello, I need these products.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="lg:w-10 lg:h-10 w-8 h-8" />
    </a>
  );
};

export default WhatsappButton;
