//import dependency
import { type JSX } from "react";

// import component
import HeaderSection from "../headerSection";
import StudiesItem from "./studiesItem";

export default function Studies(): JSX.Element {
  return (
    <section className="py-20">
      <HeaderSection
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div
        className="mt-16 flex justify-baseline bg-secondary p-8 rounded-2xl 
       max-w-[400px] mx-auto @lg:max-w-full @lg:divide-x-2 @lg:divide-primary @3xl:max-w-full  @5xl:p-12
       @7xl:p-16"
      >
        <StudiesItem description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales." />
        <StudiesItem description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
        <StudiesItem description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
      </div>
    </section>
  );
}
