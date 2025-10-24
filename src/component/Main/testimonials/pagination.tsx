// import dependency
import { type JSX } from "react";

// import icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Pagination(): JSX.Element {
  return (
    <div className="flex gap-10 sm:gap-20 lg:gap-32 mt-20 justify-center">
      <span className="text-gray text-2xl cursor-pointer">
        <FaArrowLeft />
      </span>
      <div className="flex items-center gap-3">
        <img
          src="/images/star-green.png"
          className="cursor-pointer"
          alt="star graan"
        />
        <img
          src="/images/star-white.png"
          className="cursor-pointer"
          alt="star graan"
        />
        <img
          src="/images/star-white.png"
          className="cursor-pointer"
          alt="star graan"
        />
        <img
          src="/images/star-white.png"
          className="cursor-pointer"
          alt="star graan"
        />
        <img
          src="/images/star-white.png"
          className="cursor-pointer"
          alt="star graan"
        />
      </div>

      <span className="text-gray text-2xl cursor-pointer">
        <FaArrowRight />
      </span>
    </div>
  );
}
