// import dependency
import { type JSX } from "react";

// import component
import MenuDesktop from "./menuDesktop";
import MenuBar from "./menuBar";
import MenuMobile from "./menuMobile";

// import headeless
import { Button } from "@headlessui/react";

// import context
import { MenuToggleProvider } from "../../context/menuToggle";

export default function Header(): JSX.Element {
  return (
    <header className="pt-8">
      <div className="@container">
        <div className="px-3 @xl:px-7 @2xl:px-9  @7xl:px-0 @7xl:max-w-[1224px] mx-auto ">
          <nav className="flex items-center justify-between ">
            <img
              src="/images/svg/logo.svg"
              className="w-32 lg:w-44 xl:w-48"
              alt="logo"
            />
            <MenuToggleProvider>
              <div className="hidden md:flex gap-5 lg:gap-8 xl:gap-12">
                <MenuDesktop />
                <Button className="button-secondary">Request a quote</Button>
              </div>
              <MenuBar />
              <MenuMobile />
            </MenuToggleProvider>
          </nav>
        </div>
      </div>
    </header>
  );
}
