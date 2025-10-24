// import dependency
import { type JSX } from "react";

// import component
import HeaderSection from "../headerSection";
import From from "./from";

export default function Contact(): JSX.Element {
  return (
    <section className="py-16">
      <HeaderSection
        title="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
      <div className="mt-16 bg-gray rounded-3xl p-8 md:flex relative lg:p-12">
        <From />

        <img
          src="/images/form-shap.png"
          className="absolute right-0 w-[300px] hidden md:block"
          alt="form shape"
        />
      </div>
    </section>
  );
}
