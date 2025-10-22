// import dependency
import { type JSX } from "react";

// import component
import Company from "./compnay/company";
import Services from "./services";
import Studies from "./studies";

export default function Main(): JSX.Element {
  return (
    <main>
      <div className="@container">
        <div className="px-3 @xl:px-7 @2xl:px-9 @7xl:px-0 @7xl:max-w-[1224px] mx-auto">
          <Company />
          <Services />
          <Studies />
        </div>
      </div>
    </main>
  );
}
