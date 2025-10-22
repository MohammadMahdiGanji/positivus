// import dependency
import { type JSX } from "react";

interface PropTypeHeaderSection {
  title: string;
  description: string;
}

export default function HeaderSection({
  title,
  description,
}: PropTypeHeaderSection): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <h3 className="font-bold text-2xl bg-primary px-3 py-1 rounded-md lg:text-4xl">{title}</h3>
      <p className="text-center text-sm max-w-[450px] md:text-left lg:text-base md:max-w-[520px]">{description}</p>
    </div>
  );
}
