import { 
    LocationModel,
    GET_LOCATIONS,
    CREATE_LOCATION
 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function getLocationsFromStore(locations : LocationModel[]){
    return{
        type: GET_LOCATIONS,
        payload: locations
    }
}

export function createLocationInStore(location: LocationModel){
    return{
        type: CREATE_LOCATION,
        payload: location
    }
}

//----------------------------------------------------


//--------------------API-----------------------------

export function getLocationsByUserId(userId : any) {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/location/${userId}`)
        .then(res =>{
            dispatch(getLocationsFromStore(res.data));
            return res.data;
        })
   }
}

export function createLocation(newLocation : LocationModel) {
    return (dispatch : any, getState : any) =>{
        return axios.post(`/api/location`, newLocation)
        .then(res => {
            dispatch(createLocationInStore(res.data));
            return res;
        });
    }
}

//----------------------------------------------------