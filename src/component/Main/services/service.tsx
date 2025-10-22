// import dependency
import { type JSX } from "react";

// impport icons
import { FaArrowRight } from "react-icons/fa6";

interface PropTypeService {
  title1: string;
  title2: string;
  img: string;
  variant: "primary" | "secondary" | "third";
}

export default function Service({
  title1,
  title2,
  img,
  variant,
}: PropTypeService): JSX.Element {
  return (
    <div
      className={`col-span-12 p-5 flex justify-between rounded-4xl border-2 border-b-8 w-full 
        h-[200px] mxa-h-[300px] @lg:h-[250px] @lg:max-h-[250px] @lg:p-10 @2xl:h-[300px] 
        @2xl:max-h-[300px] @2xl:max-w-[500px] @2xl:mx-auto @3xl:max-w-[600px] @4xl:col-span-6 ${
        variant === "primary" && "bg-primary"
      }
     ${variant === "secondary" && "bg-secondary"}
     ${variant === "third" && "bg-gray"}`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h3
            className={`text-secondary inline px-1 py-1 font-bold rounded-lg text-sm 
              @sm:text-xl @lg:text-3xl ${
              variant === "third" ? "bg-primary" : "bg-white "
            }`}
          >
            {title1}
          </h3>
          <br />
          <h3
            className={`text-secondary inline px-1 py-1 font-bold rounded-lg text-sm
               @sm:text-xl @lg:text-3xl ${
              variant === "third" ? "bg-primary" : "bg-white "
            }`}
          >
            {title2}
          </h3>
        </div>
        <a href="#" className="flex items-center gap-3">
          <span className={`px-1 py-1 rounded-full -rotate-45 
            ${variant === "secondary"? "bg-white":"bg-secondary"} px-2 py-2`}>
            <FaArrowRight className={`text-xl ${variant === "secondary"? "text-secondary":"text-primary"}`}/>
          </span>
          <span className={`text-xs ${variant === "secondary"? "text-white":"text-secondary"} @lg:text-base`}>Learn more</span>
        </a>
      </div>
      <img src={img} className="w-24 h-24 my-auto @sm:w-32 @sm:h-32 @lg:w-40 @lg:h-40" alt="service " />
    </div>
  );
}
