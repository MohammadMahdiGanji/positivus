// import dependency
import { type JSX } from "react";

// import icons
import { MdArrowOutward } from "react-icons/md";

interface StudiesItemType {
  description: string;
}

export default function StudiesItem({
  description,
}: StudiesItemType): JSX.Element {
  return <div className="hidden first:block @lg:px-8  @lg:first:pl-0  @lg:last:pr-0  @lg:last:block  @3xl:block">
    <p className="text-gray text-xs @xs:text-sm @lg:text-sm @5xl:text-base">{description}</p>
    <a href="#" className="text-primary flex items-center gap-3 mt-5 cursor-pointer">
      <span>Learn more</span>
      <span className="text-2xl">
        <MdArrowOutward />
      </span>
    </a>
  </div>;
}
