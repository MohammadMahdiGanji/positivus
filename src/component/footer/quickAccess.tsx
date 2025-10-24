// import dependency
import { type JSX } from "react";

// import headeless
import { Menu, MenuButton } from "@headlessui/react";

export default function QuickAccess(): JSX.Element {
  return (
    <Menu>
      <div className="flex flex-col gap-2 mt-7 items-center sm:flex-row sm:mt-0 sm:gap-4">
        <MenuButton>
          <a href="#" className="text-white text-xs md:text-base">
            About us
          </a>
        </MenuButton>
        <MenuButton>
          <a href="#" className="text-white text-xs md:text-base">
            Services
          </a>
        </MenuButton>
        <MenuButton>
          <a href="#" className="text-white text-xs md:text-base">
            Use Cases
          </a>
        </MenuButton>
        <MenuButton>
          <a href="#" className="text-white text-xs md:text-base">
            Pricing
          </a>
        </MenuButton>
        <MenuButton>
          <a href="#" className="text-white text-xs md:text-base">
            Blog
          </a>
        </MenuButton>
      </div>
    </Menu>
  );
}
