import Logo from "./Logo";
import Navigation from "./Navigation";
import LoginButton from "./LoginButton";

const Button = ({ text, style }: { text: string; style: string }) => (
  <button
    className={`${style} mt-5 py-2 px-4 rounded hover:bg-blue-200 focus:outline-none focus:shadow-outline	 text-lg	px-5`}
  >
    {text}
  </button>
);

export default Button;
