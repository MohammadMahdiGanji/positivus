// import dependency
import { type JSX } from "react";

// import headless
import { Menu, MenuButton } from "@headlessui/react";

export default function MenuDesktop(): JSX.Element {
  return (
    <Menu>
      <MenuButton className="relative">
        <a href="#" className="menu-item-desktop">
          About us
        </a>
      </MenuButton>
      <MenuButton className="relative">
        <a href="#" className="menu-item-desktop">
          Services
        </a>
      </MenuButton>
      <MenuButton className="relative">
        <a href="#" className="menu-item-desktop ">
          Use Cases
        </a>
      </MenuButton>
      <MenuButton className="relative">
        <a href="#" className="menu-item-desktop ">
          Pricing
        </a>
      </MenuButton>
      <MenuButton className="relative">
        <a href="#" className="menu-item-desktop">
          Blog
        </a>
      </MenuButton>
    </Menu>
  );
}
