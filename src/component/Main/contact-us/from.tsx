// import dependency
import { type JSX } from "react";

export default function From(): JSX.Element {
  return (
    <form className="w-full max-w-[500px] mx-auto md:max-w-[350px] md:ml-0 lg:max-w-[430px]">
      <div className="flex gap-5">
        <span className="flex gap-1">
          <input type="radio" className="w-5 h-5" />
          Say Hi
        </span>
        <span className="flex gap-1">
          <input type="radio" className="w-5 h-5" />
          Get a Quote
        </span>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            className="border-2 border-secondary outline-none w-full py-1 rounded-md px-2"
          />
        </div>
        <div>
          <label htmlFor="">Email*:</label>
          <input
            type="text"
            className="border-2 border-secondary outline-none w-full py-1 rounded-md px-2"
          />
        </div>
        <div>
          <label htmlFor="">Message*:</label>
          <textarea
            rows={7}
            name=""
            id=""
            className="border-2 border-secondary outline-none w-full py-1 rounded-md px-2 resize-none"
          ></textarea>
        </div>
        <button className="button-primary ">Send Message</button>
      </div>
    </form>
  );
}
