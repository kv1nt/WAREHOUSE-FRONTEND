import { 
    Company,
    CompaniesState,
    GET_COMPANIES,
    SET_COMPANY,
    UPADATE_COMPANY,
    DELETE_COMPANY

 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------
export function setCompanies(companies : Company[]){
    return{
        type: GET_COMPANIES,
        value: companies
    }
}


export function deleteCompanyStore(id : number){
    return{
        type: DELETE_COMPANY,
        meta: {id}
    }
}

export function updateCompaniesStore(company : CompaniesState){
    return{
        type: UPADATE_COMPANY,
        payload: company
    }
}
//----------------------------------------------------


//--------------------API-----------------------------
export function getCompanies() {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/company`)
        .then(res =>{
            dispatch(setCompanies(res.data));
            return res.data;
        })
   }
}

export function createCompany(newCompany : Company) {
    return (dispatch : any, getState : any) =>{
        return axios.post(`/api/company`, newCompany)
        .then(res => {
            dispatch(setCompanies(res.data));
            return res;
        });
    }
}

export function deleteCompany(id : any) {
    return (dispatch : any, getState : any) =>{
        return axios.delete(`/api/company/${id}`)
          .then(res =>{
              dispatch(setCompanies(res.data));
              return res;
          })
    }
}

  export function updateCompany(id : any) {
    return (dispatch : any, getState : any) =>{
        return axios.put(`/api/company/${id}`)
          .then(res =>{
              dispatch(setCompanies(res.data));
              return res;
        })
    }
}

