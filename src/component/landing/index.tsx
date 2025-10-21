// import dependency
import { type JSX } from "react";

// import component

// import headless
import { Button } from "@headlessui/react";

export default function Landing(): JSX.Element {
  return (
    <div className="@container mt-10">
      <div className="px-3 @xl:px-7 @2xl:px-9 @7xl:px-0 @7xl:max-w-[1224px] mx-auto">
        <div className="md:flex md:gap-5 md:items-start lg:gap-24">
          <div className="basis-[50%]">
            <h1 className="text-center font-bold text-xl @md:text-3xl md:text-left  @3xl:text-4xl @4xl:text-5xl @6xl:text-6xl">
              Navigating the digital landscape for success
            </h1>
            <p className="text-xs text-center mt-3 @md:text-sm md:text-left md:mt-5 lg:mt-10 @3xl:text-base @5xl:text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button className="button-primary block mt-5 mx-auto text-sm @md:text-base md:ml-0 md:mt-7 lg:mt-10">
              Book a consultation
            </Button>
          </div>
          <div className="basis-[50%]">
            <img
              src="/images/landing.png"
              className="mt-10 w-full max-w-[380px] mx-auto md:max-w-full md:mt-0"
              alt="landing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
