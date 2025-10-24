// import dependency
import { type JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <div className="mt-10 flex flex-col items-center justify-between sm:flex-row">
      <div className="text-white ">
        <span
          className="bg-primary  rounded-md
         text-center text-secondary p-1  block mb-4 mx-auto md:text-base  sm:text-left sm:inline-block"
        >
          Contact us:
        </span>
        <br />
        <p className="text-xs mb-2 md:text-sm text-center sm:text-left lg:mb-0 lg:leading-1">
          Email: info@positivus.com
        </p>
        <br />

        <p className="text-xs mb-2 md:text-sm text-center sm:text-left lg:mb-0 lg:leading-1">
          Phone: 555-567-8901
        </p>
        <br />
        <div>
          <p className="text-xs  mb-1 md:text-sm text-center sm:text-left lg:mb-0 lg:leading-1">
            Address: 1234 Main St
          </p>
          <br />
          <p className="text-xs  mb-1 md:text-sm text-center sm:text-left lg:mb-0 lg:leading-1">
            Moonstone City, Stardust State 12345
          </p>
        </div>
      </div>
      <form
        action=""
        className="mt-5 flex flex-col gap-5 bg-[#292A32] p-2 rounded-md
         sm:p-6 sm:rounded-xl lg:w-full lg:flex-row lg:max-w-[600px] lg:p-12"
      >
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-white w-full rounded-lg py-1 text-white px-2 sm:py-2 
           lg:w-[400px] lg:py-3 lg:px-3"
        />
        <button className="button-primary bg-primary text-secondary w-full lg:w-[300px]">
          Subscribe to news
        </button>
      </form>
    </div>
  );
}
