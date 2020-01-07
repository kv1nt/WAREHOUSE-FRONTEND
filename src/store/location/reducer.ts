import {
    LocationAcionTypes, GET_LOCATIONS, LocationsState
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
            default:
                return state;
    }
}