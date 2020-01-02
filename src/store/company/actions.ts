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
export function getCompaniesFromStore(companies : Company[]){
    return{
        type: GET_COMPANIES,
        payload: companies
    }
}

export function createCompanyInStore(company: Company){
    return{
        type: SET_COMPANY,
        payload: company
    }
}


export function deleteCompanyStore(id : string){
    return{
        type: DELETE_COMPANY,
        payload: id
    }
}

export function updateCompaniesStore(company : Company){
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
            dispatch(getCompaniesFromStore(res.data));
            return res.data;
        })
   }
}

export function createCompany(newCompany : Company) {
    return (dispatch : any, getState : any) =>{
        return axios.post(`/api/company`, newCompany)
        .then(res => {
            console.log(res.data)
            dispatch(createCompanyInStore(res.data));
            return res;
        });
    }
}

export function deleteCompany(id : any) {
    return (dispatch : any, getState : any) =>{
        return axios.delete(`/api/company/${id}`)
          .then(res =>{
              dispatch(deleteCompanyStore(id));
              return res;
          })
    }
}

  export function updateCompany(comapny : Company) {
    return (dispatch : any, getState : any) =>{
        return axios.put(`/api/company/${comapny.id}`, comapny)
          .then(res =>{
              dispatch(updateCompaniesStore(comapny));
              return res;
        })
    }
}

