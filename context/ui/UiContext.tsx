import { createContext } from "react";

interface ContextProps{
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;


    openSideMenu : () => void;
    closeSideMenu : () => void;
    setIsAddingEntry: (isAdding: boolean) => void;

    endDragging: () => void;
    startDragging: () => void;
    
}

export const UiContext = createContext({} as ContextProps);

