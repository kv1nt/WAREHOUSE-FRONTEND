export interface LocationModel {
    id: any
    companyId: any,
    warehouseId: any,
    city: string,
    country: string,
    street: string,
    buildingNumber: number,
    zip: number,
    latitude: number,
    longtitude: number
}

export interface LocationsState {
    locations: LocationModel []
} 

export const GET_LOCATIONS = "GET_LOCATIONS";
export const CREATE_LOCATION = "CREATE_LOCATION";


interface GetLocations {
    type: typeof GET_LOCATIONS;
    payload: LocationModel[]
}

interface CreateLocation {
    type: typeof CREATE_LOCATION;
    payload: LocationModel
}



export type LocationAcionTypes = GetLocations | CreateLocation;