// import dependency
import { type JSX } from "react";

// import component
import HeaderSection from "../headerSection";
import Comment from "./comment";
import Pagination from "./pagination";

export default function TestiMonials(): JSX.Element {
  return (
    <div className="py-16">
      <HeaderSection
        title="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className="bg-secondary mt-16 py-16  rounded-3xl">
        <div className="@3xl:overflow-hidden flex justify-center">
          <div className="flex gap-10 flex-col @3xl:w-[1800px] @3xl:flex-row justify-center px-2">
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
