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
        case SET_COMPANY :
            return {
                companies: [...state.companies, action.payload]
            }
        case GET_COMPANIES :
            return {
                companies: [...action.payload]
            }
        case DELETE_COMPANY:
            return {
                companies: state.companies
                    .filter(x => x.id !== action.payload)
            }
        case UPADATE_COMPANY:
                let company = state.companies.filter(x => x.id === action.payload.id)[0]
                company.id = action.payload.id
                company.description = action.payload.description
                company.name = action.payload.name
            return {
                companies: [...state.companies.filter(c =>c.id !== company.id), company]
            }
            default:
                return state;
    }
}