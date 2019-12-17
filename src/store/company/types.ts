export interface Company {
    id: string,
    name: string,
    description: string
}

export interface CompaniesState {
    companies: Company []
} 

export const GET_COMPANIES = "GET_COMPANIES";
export const SET_COMPANY = "SET_COMPANY";

interface GetCompanies{
    type: typeof GET_COMPANIES;
    payload: Company[]
}

interface SetCompany{
    type: typeof SET_COMPANY;
    payload: Company
}

export type CompanyAcionTypes = GetCompanies & SetCompany;