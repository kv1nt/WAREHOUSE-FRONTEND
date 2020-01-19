import { 
    Warehouse,
    GET_WAREHOUSES,
    CREATE_WAREHOUSE,
    REMOVE_WAREHOUSE

 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function getWarehouseFromStore(warehouses : Warehouse[]){
    return{
        type: GET_WAREHOUSES,
        payload: warehouses
    }
}

export function createWarehouseInStore(warehouse : Warehouse){
    return{
        type: CREATE_WAREHOUSE,
        payload: warehouse
    }
}

export function deleteWarehouseStore(id : string){
    return{
        type: REMOVE_WAREHOUSE,
        payload: id
    }
}
//----------------------------------------------------

//--------------------API-----------------------------

export function getWarehousesByUserId(userId: any) {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/warehouse/${userId}`)
        .then(res =>{
            dispatch(getWarehouseFromStore(res.data));
            return res.data;
        })
   }
}

export function createWarehouse(newWarehouse : Warehouse) {
    return (dispatch : any, getState : any) =>{
        return axios.post(`/api/warehouse`, newWarehouse)
        .then(res => {
            dispatch(createWarehouseInStore(res.data));
            return res;
        });
    }
}

export function deleteWarehouse(id : any) {
    return (dispatch : any, getState : any) =>{
        return axios.delete(`/api/warehouse/${id}`)
          .then(res =>{
              dispatch(deleteWarehouseStore(id));
              return res;
          })
    }
}

//----------------------------------------------------