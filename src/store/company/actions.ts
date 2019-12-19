import { 
    Company,
    GET_COMPANIES,
    SET_COMPANY
 } from "./types";

import axios from 'axios';
import { string } from "prop-types";

export function setCompanies(Companies : Company[]){
    return{
        type: GET_COMPANIES,
        value: Companies
    }
}

// export function setCompany(Company : Company){
//     return{
//         type: SET_COMPANY,
//         value: Company
//     }
// }

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
        newCompany.id = null;
        return axios.post(`/api/company`, newCompany)
        .then(res => {
            dispatch(setCompanies(res.data));
            return res;
            //Mops
        });
    }
}

// export function removeCompany(id : number) {
//     return (dispatch : any, getState : any) =>{
//         return axios.delete(`/api/company`, id)
//           .then(res =>{
//               dispatch(setCompanies(res.data));
//               return res.data;
//           })
//      }
//   }

