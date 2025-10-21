// import dependency
import { type JSX, useContext } from "react";

// import headless
import { Menu, MenuButton } from "@headlessui/react";

// import context
import { ContextMenuToggle } from "../../context/menuToggle";

export default function MenuMobile(): JSX.Element {
  const { isOpen } = useContext(ContextMenuToggle);

  return (
    <div
      className={`fixed top-0 bottom-0 w-[230px] bg-gray p-3 md:hidden
      ${isOpen ? "left-0" : "left-[-230px]"} transition-all duration-300`}
    >
      <img className="w-32 mt-5 mb-4" src="/images/svg/logo.svg" alt="logo" />
      <div className="flex flex-col items-start gap-4">
        <Menu>
          <MenuButton>
            <a href="#">About us</a>
          </MenuButton>
          <MenuButton>
            <a href="#">Services</a>
          </MenuButton>
          <MenuButton>
            <a href="#">Use Cases</a>
          </MenuButton>
          <MenuButton>
            <a href="#">Pricing</a>
          </MenuButton>
          <MenuButton>
            <a href="#">Blog</a>
          </MenuButton>
        </Menu>
      </div>
    </div>
  );
}
