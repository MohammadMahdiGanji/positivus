// import dependency
import { type JSX } from "react";

// types CartTeam
interface CartTeamType {
  name: string;
  type: string;
  description: string;
  img: string;
}

export default function CartTeam({
  name,
  type,
  description,
  img,
}: CartTeamType): JSX.Element {
  return (
    <div className="border-2 border-secondary w-full max-w-[330px]
     mx-auto col-span-12 rounded-[30px] p-5 border-b-6 @xl:col-span-6
     @4xl:col-span-4 @4xl:max-w-full @4xl:p-8 @5xl:p-10">
      <div className="flex items-end gap-3">
        <img className="w-20 @xl:w-24" src={img} alt="team" />
        <div className="flex flex-col gap-1">
          <span className="font-semiBold text-xs @xl:text-base">{name}</span>
          <span className="text-xs @xl:text-base">{type}</span>
        </div>
      </div>
      <div className="mt-5 pt-5 border-t-2">
        <p className="text-xs @md:ms @2xl:text-base">{description}</p>
      </div>
    </div>
  );
}
