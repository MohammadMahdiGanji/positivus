import { type JSX } from "react";

interface PropTypeCompany {
  img: string;
  alt: string;
}

export default function CompanyItem({
  img,
  alt,
}: PropTypeCompany): JSX.Element {
  return <img src={img} alt={alt} />;
}
