import {
    WarehouseState,
    WarehouseAcionTypes,
    GET_WAREHOUSES,
    CREATE_WAREHOUSE,
    REMOVE_WAREHOUSE
} from './types';

const initialState : WarehouseState = {
    warehouses : []
}

export function warehouseReducer(state = initialState, action: WarehouseAcionTypes) : WarehouseState {
    switch(action.type){
        case GET_WAREHOUSES :
            return {
                warehouses: [...action.payload]
            }
            case CREATE_WAREHOUSE :
                return {
                    warehouses: [...state.warehouses, action.payload]
                }
            case REMOVE_WAREHOUSE:
                return {
                    warehouses: state.warehouses
                        .filter(x => x.id !== action.id)
                }        
            default:
                return state;
    }
}