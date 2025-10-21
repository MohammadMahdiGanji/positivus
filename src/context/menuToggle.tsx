// import dependency
import React, { createContext, useState } from "react";

// type
interface contextToggleType {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const ContextMenuToggle = createContext<contextToggleType>(
  {} as contextToggleType
);

export const MenuToggleProvider = ({
  children,
}: React.PropsWithChildren): React.ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = ():void => {
    setIsOpen((pre) => !pre);
  };
  return (
    <ContextMenuToggle.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </ContextMenuToggle.Provider>
  );
};
