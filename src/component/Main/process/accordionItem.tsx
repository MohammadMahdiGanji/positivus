// import dependency
import { type JSX, useEffect, useRef, useState } from "react";

// import icons
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface AccordionItemType {
  id: number;
  title: string;
  description: string;
  idOpen: number | null;
  setIdOpen: (open: number | null) => void;
}

export default function AccordionItem({
  id,
  title,
  description,
  idOpen,
  setIdOpen,
}: AccordionItemType): JSX.Element {
  const panelBox = useRef<HTMLDivElement>(null);
  const [scrollHeightPanel, setScrollHeightPanel] = useState<
    number | undefined
  >(0);

  const isActive = id === idOpen;

  useEffect(() => {
    setScrollHeightPanel(panelBox.current?.scrollHeight);
    console.log(scrollHeightPanel);
  }, [isActive]);

  return (
    <div
      className={`w-full border-2 border-b-8 border-secondary rounded-4xl px-4 
    transition-all duration-200 ${
      isActive ? "bg-primary" : "bg-gray"
    } @sm:px-6 @3xl:px-8`}
    >
      <button
        className="w-full flex justify-between py-4 items-center
         font-medium @sm:py-6 @3xl:py-8 cursor-pointer"
        onClick={() => setIdOpen(isActive ? null : id)}
      >
        <div className="flex items-center gap-2 text-xs @sm:text-base @3xl:text-xl">
          <span>{id > 10 ? id : "0" + id}</span>
          <span>{title}</span>
        </div>
        <span className="p-1 border-2 rounded-full @2xl:p-2">
          {isActive ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      <div
        className={`h-0 overflow-hidden transition-all duration-200`}
        style={{
          height: isActive ? scrollHeightPanel : 0,
        }}
        ref={panelBox}
      >
        <div className="py-4 @sm:py-6 @3xl:py-8 border-t-2">
          <p className="text-xs @2xl:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
