import {
    CompaniesState,
    CompanyAcionTypes,
    GET_COMPANIES
} from './types';

const initialState : CompaniesState = {
    companies : []
}

export function companyesReducer(state = initialState, action: CompanyAcionTypes) : CompaniesState {
    switch(action.type){
        case GET_COMPANIES :
            return {
                companies: [...state.companies]
            }
            default:
                return state;
    }
}