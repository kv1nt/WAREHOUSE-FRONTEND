import {
    LocationAcionTypes, GET_LOCATIONS, LocationsState, CREATE_LOCATION
} from './types';

const initialState : LocationsState = {
    locations : []
}

export function locationReducer(state = initialState, action: LocationAcionTypes) : LocationsState {
    switch(action.type){
        case GET_LOCATIONS :
            return {
                locations: [...action.payload]
            }
            case CREATE_LOCATION :
            return {
                locations: [...state.locations, action.payload]
            }
            default:
                return state;
    }
}