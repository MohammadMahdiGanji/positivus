// import dependency
import { type JSX } from "react";

// import headless
import { Button } from "@headlessui/react";

export default function Happen(): JSX.Element {
  return (
    <div className="bg-gray mt-16 rounded-3xl p-5 @2xl:flex @2xl:justify-between
    @4xl:relative @4xl:max-h-[250px] @4xl:p-10">
      <div className="flex flex-col items-center max-w-[500px] mx-auto @2xl:items-start @2xl:mx-0">
        <h3 className="font-bold @md:text-2xl @5xl:text-4xl">Let’s make things happen</h3>
        <p className="text-xs mt-5 text-center @2xl:text-left @md:text-sm @5xl:text-base">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className="button-primary mt-6">Get your free proposal</Button>
      </div>
      <div className="@4xl:absolut my-auto @4xl:-mt-16 @4xl:mr-16">
        <img src="/images/happen.png" className="max-w-40 mt-10 mx-auto @2xl:mt-0 @3xl:max-w-72
        @4xl:absolut @4xl:my-auto" alt="happen shape" />
      </div>
    </div>
  );
}
