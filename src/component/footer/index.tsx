// import dependency
import { type JSX } from "react";

// import component
import QuickAccess from "./quickAccess";
import Social from "./social";
import Contact from "./contact";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="@container">
        <div className="px-3 @xl:px-7 @2xl:px-9 @7xl:px-0 @7xl:max-w-[1224px] mx-auto bg-secondary rounded-tl-3xl  rounded-tr-3xl">
          <div className="p-5">
            <div className="sm:flex items-center justify-between">
              <img
                src="/images/svg/logo-white.svg"
                alt="logo footer"
                className="w-28 mx-auto sm:mx-0"
              />
              <QuickAccess />
              <Social />
            </div>
            <Contact />
            <div>
              <p className="text-white text-xs mt-10 pt-7  border-t-2 border-white sm:text-base">
                © 2025 Mohammad Mahdi Ganji .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
