// import dependency
import { type JSX } from "react";

// import component
import HeaderSection from "../headerSection";
import Service from "./service";
import Happen from "./happen";

export default function Services(): JSX.Element {
  return (
    <section className="py-20">
      <HeaderSection
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="grid grid-cols-12 gap-y-10 mt-20 @4xl:gap-5">
        <Service
          title1="Search engine"
          title2="optimization"
          img="/images/services1.png"
          variant="third"
        />
        <Service
          title1="Search engine"
          title2="optimization"
          img="/images/services2.png"
          variant="primary"
        />
        <Service
          title1="Social Media"
          title2="Marketing"
          img="/images/services3.png"
          variant="secondary"
        />
        <Service
          title1="Email"
          title2="Marketing"
          img="/images/services4.png"
          variant="third"
        />
        <Service
          title1="Content"
          title2="Creation"
          img="/images/services5.png"
          variant="primary"
        />
        <Service
          title1="Analytics and"
          title2="Traking"
          img="/images/services6.png"
          variant="secondary"
        />
      </div>

      <Happen />
    </section>
  );
}
