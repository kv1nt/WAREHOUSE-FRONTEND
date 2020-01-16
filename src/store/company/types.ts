export interface Company {
    id: any,
    userId: any,
    name: string,
    description: string
}

export interface CompaniesState {
    companies: Company []
} 

export const GET_COMPANIES = "GET_COMPANIES";
export const SET_COMPANY = "SET_COMPANY";
export const DELETE_COMPANY = "DELETE_COMPANY";
export const UPADATE_COMPANY = "UPADATE_COMPANY";

interface GetCompanies {
    type: typeof GET_COMPANIES;
    payload: Company[]
}

interface SetCompany {
    type: typeof SET_COMPANY;
    payload: Company
}

interface DeleteCompany {
    type: typeof DELETE_COMPANY;
    payload: Company
}

interface UpdateCompany {
    type: typeof UPADATE_COMPANY;
    payload: CompaniesState
}


export type CompanyAcionTypes = GetCompanies & SetCompany & DeleteCompany & UpdateCompany;