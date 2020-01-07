export interface Warehouse {
    id: any,
    companyId: any
    locationId: any
    square: number,
    description: string
}

export interface WarehouseState {
    warehouses : Warehouse []
} 

export const GET_WAREHOUSES = "GET_WAREHOUSES";
export const CREATE_WAREHOUSE = "CREATE_WAREHOUSE";
export const REMOVE_WAREHOUSE = "REMOVE_WAREHOUSE";

interface GetWarehouses {
    type: typeof GET_WAREHOUSES;
    payload: Warehouse []
}

interface CreateWarehouses {
    type: typeof CREATE_WAREHOUSE;
    payload: Warehouse
}


interface RemoveWarehouse {
    type: typeof REMOVE_WAREHOUSE;
    id: string
}


export type WarehouseAcionTypes = GetWarehouses | CreateWarehouses | RemoveWarehouse