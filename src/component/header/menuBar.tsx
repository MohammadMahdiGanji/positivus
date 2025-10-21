// import dependency
import  { type JSX, useContext } from "react";

// import icons
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

// import context
import { ContextMenuToggle } from "../../context/menuToggle";

export default function MenuBar(): JSX.Element {
  const { isOpen, toggleMenu } = useContext(ContextMenuToggle);
  const hendleToggleMenu = () => {
    toggleMenu();
  };
  return (
    <span
      className="rotate-180 text-2xl cursor-pointer relative z-10 md:hidden"
      onClick={hendleToggleMenu}
    >
      {isOpen ? <IoClose /> : <AiOutlineBars />}
    </span>
  );
}
