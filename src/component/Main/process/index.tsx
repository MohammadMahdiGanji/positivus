// import dependency
import { type JSX } from "react";

// import component
import HeaderSection from "../headerSection";
import Accordion from "./accordion";

export default function Process(): JSX.Element {
  return (
    <section className="py-20">
      <HeaderSection
        title="Our Working Process "
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <Accordion />
    </section>
  );
}
