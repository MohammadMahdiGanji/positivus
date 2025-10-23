// import dependency
import { type JSX } from "react";

// import conmponent
import HeaderSection from "../headerSection";
import CartTeam from "./cartTeam";

export default function Team(): JSX.Element {
  return (
    <section className="py-20">
      <HeaderSection
        title="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="mt-16 grid grid-cols-12 gap-y-5 @xl:gap-5 @5xl:gap-10">
        <CartTeam
          name="John Smith"
          type="CEO and Founder"
          description="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          img="/images/svg/team1.svg"
        />
        <CartTeam
          name="Jane Doe"
          type="Director of Operations"
          description="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          img="/images/svg/team2.svg"
        />
        <CartTeam
          name="Michael Brown"
          type="Senior SEO Specialist"
          description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          img="/images/svg/team3.svg"
        />
        <CartTeam
          name="Michael Brown"
          type="Senior SEO Specialist"
          description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          img="/images/svg/team4.svg"
        />
        <CartTeam
          name="Michael Brown"
          type="Senior SEO Specialist"
          description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          img="/images/svg/team5.svg"
        />
        <CartTeam
          name="Michael Brown"
          type="Senior SEO Specialist"
          description="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          img="/images/svg/team6.svg"
        />
      </div>
    </section>
  );
}
