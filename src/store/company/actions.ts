import { 
    Company,
    GET_COMPANIES,
    SET_COMPANY
 } from "./types";

import axios from 'axios';

export function setCompanies(Companies : Company[]){
    return{
        type: GET_COMPANIES,
        value: Companies
    }
}

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

