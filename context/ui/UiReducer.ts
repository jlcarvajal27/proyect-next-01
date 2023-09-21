import { UiState } from "./UiProvider";

type UiActionType = 
| {type: 'Ui - Open Sidebar'}
| {type: 'Ui - Close Sidebar'}
| {type: 'Ui - set isAddingEntry', payload: boolean}
| {type: 'Ui - start Dragging'}
| {type: 'Ui - end Dragging'}


export  const UiReducer = (state: UiState, action: UiActionType ): UiState => {

switch (action.type) {
    case 'Ui - Open Sidebar':
        return {
            ...state,
            sideMenuOpen: true,
        }

        case 'Ui - Close Sidebar':
        return {
            ...state,
            sideMenuOpen: false,
        }

        case 'Ui - set isAddingEntry':
        return {
          ...state,
        isAddingEntry: action.payload
        }

        case 'Ui - start Dragging':
            return{
                ...state,
                isDragging: true
            }

            case 'Ui - end Dragging':
                return{
                    ...state,
                    isDragging: false
                }
        
        default:
        return state;
}
}