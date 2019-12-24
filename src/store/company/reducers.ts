import {
    CompaniesState,
    CompanyAcionTypes,
    GET_COMPANIES,
    UPADATE_COMPANY,
    DELETE_COMPANY,
    SET_COMPANY
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
        case DELETE_COMPANY:
            return {
                companies: state.companies
                    .filter(x => x.id !== action.payload.id)
            }
        case UPADATE_COMPANY:
            return {
                ...state,
                ...action.payload
            }
            default:
                return state;
    }
}