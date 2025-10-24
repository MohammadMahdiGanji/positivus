// import dependency
import { type JSX } from "react";

export default function Comment(): JSX.Element {
  return (
    <div>
      <div className="p-12 border-2 border-primary max-w-[600px] @3xl:max-w-full @3xl:w-[600px] rounded-3xl relative z-0">
        <p className="text-gray text-xs @3xl:text-base">
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </p>
        <span
          className="absolute block w-8 border-t-6
       border-t-secondary -bottom-1  z-10"
        ></span>
        <span
          className="absolute block w-[24px] border-t-2 rounded-tl-md
       border-t-primary -bottom-[10px]  z-10 rotate-45 left-[44px]"
        ></span>
        <span
          className="absolute block w-[24px] border-t-2 rounded-t-lg
       border-t-primary -bottom-[10px]  z-10 -rotate-45 left-[60px]"
        ></span>
      </div>
      <div className="flex flex-col ml-14 mt-10 text-xs @3xl:text-base">
        <span className="text-primary">John Smith</span>
        <span className="text-gray">Marketing Director at XYZ Corp</span>
      </div>
    </div>
  );
}
