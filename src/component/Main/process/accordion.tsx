// import dependency
import { useState, type JSX } from "react";

// import component
import AccordionItem from "./accordionItem";

export default function Accordion(): JSX.Element {
  const [idOpen, setIdOpen] = useState<number | null>(0);
  return (
    <div className="mt-16 flex flex-col gap-5">
      <AccordionItem
        id={1}
        idOpen={idOpen}
        setIdOpen={setIdOpen}
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <AccordionItem
        id={2}
        idOpen={idOpen}
        setIdOpen={setIdOpen}
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <AccordionItem
        id={3}
        idOpen={idOpen}
        setIdOpen={setIdOpen}
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <AccordionItem
        id={4}
        idOpen={idOpen}
        setIdOpen={setIdOpen}
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <AccordionItem
        id={5}
        idOpen={idOpen}
        setIdOpen={setIdOpen}
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
      <AccordionItem
        id={6}
        idOpen={idOpen}
        setIdOpen={setIdOpen}
        title="Consultation"
        description="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
      />
    </div>
  );
}
