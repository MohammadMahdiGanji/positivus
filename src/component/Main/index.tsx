// import dependency
import { type JSX } from "react";

// import component
import Company from "./compnay/company";
import Services from "./services";
import Studies from "./studies";
import Process from "./process";
import Team from "./team";
import TestiMonials from "./testimonials";
import Contact from "./contact-us";

export default function Main(): JSX.Element {
  return (
    <main>
      <div className="@container">
        <div className="px-3 @xl:px-7 @2xl:px-9 @7xl:px-0 @7xl:max-w-[1224px] mx-auto">
          <Company />
          <Services />
          <Studies />
          <Process />
          <Team />
          <TestiMonials />
          <Contact />
        </div>
      </div>
    </main>
  );
}
