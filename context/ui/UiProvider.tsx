import { FC, useReducer } from "react";
import { UiContext } from "./UiContext";
import { UiReducer } from "./UiReducer";

export interface UiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    }

interface Props{
  children: any
}

const UI_INITIAL_STATE: UiState={
sideMenuOpen: false,
isAddingEntry: false,
isDragging: false
}

export const UiProvider:FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer( UiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
      dispatch({type: 'Ui - Open Sidebar'})
    }

    const closeSideMenu = () => {
      dispatch({type: 'Ui - Close Sidebar'})
    }

    const setIsAddingEntry = (isAdding: boolean) =>{
      dispatch({type: 'Ui - set isAddingEntry', payload: isAdding})
    }

    const startDragging = () => {
      dispatch({type:'Ui - start Dragging'})
    }

    const endDragging = () => {
      dispatch({type:'Ui - end Dragging'})
    }

  return (
    <UiContext.Provider value={{
      ...state,
// methods
      openSideMenu,
      closeSideMenu,

      setIsAddingEntry,

      startDragging,
      endDragging,
      }}>
    { children }
    </UiContext.Provider>
  )
};

