// import dependency
import { type JSX } from "react";

export default function Social(): JSX.Element {
  return (
    <div className="flex gap-3 justify-center mt-5 sm:mt-0">
      <img src="/images/svg/social1.svg" className="w-5" alt="social" />
      <img src="/images/svg/social2.svg" className="w-5" alt="social" />
      <img src="/images/svg/social3.svg" className="w-5" alt="social" />
    </div>
  );
}
