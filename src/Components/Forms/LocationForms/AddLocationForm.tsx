import * as React from "react";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import {  History } from 'history';
import '../../Forms/LocationForms/addLocationForm.css';
import { LocationModel } from "../../../store/location/types";
import { createLocation, getLocationsByUserId } from "../../../store/location/actions";
import { LoginForm } from "../../../store/userLogin/types";

interface FormownProps{
    createLocation: typeof createLocation
    getLocationsByUserId: typeof getLocationsByUserId
    login: LoginForm
    history: History
}

interface AddLocationState {
    city: string,
    country: string,
    street: string,
    buildingNumber: number,
    zip: number
}

export  class AddLocationFrom extends React.Component<any,AddLocationState >{
    constructor(props:FormownProps){
        super(props)

        this.state = {
            city: "",
            country: "",
            street: "",
            buildingNumber: 0,
            zip: 0
        }
    }

    onChangeCity = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({city: e.currentTarget.value})
    }

    onChangeCountry= (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({country: e.currentTarget.value})
    }

    onChangeStreet = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({street: e.currentTarget.value})
    }

    onChangeBuildingNumber = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({buildingNumber: parseInt(e.currentTarget.value)})
    }

    onChangeZip = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({zip: parseInt(e.currentTarget.value)})
    }

    saveLocation = async () =>{
        const { city, country, street, buildingNumber, zip} = this.state;
        const { login } = this.props;
        const location : LocationModel = {
                        id: null, companyId:null, warehouseId:null, city:city, zip:zip,
                        country: country, street: street, buildingNumber: buildingNumber, 
                        latitude:0,longtitude:0, userId: login.id
                     };
         this.props.createLocation(location);
         this.props.history.push('/locations');
         await this.props.getLocationsByUserId(login.id)
    }


    render(){
        return(
            <div className="add-location-form">
                <div className="input-block">
                <span>Country: </span><input type="text" onChange={e => this.onChangeCountry(e)} />
            </div> 
            <div className="input-block">
                <span>City: </span><input type="text" onChange={e => this.onChangeCity(e)} />
            </div>
            <div className="input-block">
                <span>Street: </span><input type="text" onChange={e => this.onChangeStreet(e)} />
            </div>
            <div className="input-block">
                <span>Building Number: </span><input type="text" onChange={e => this.onChangeBuildingNumber(e)} />
            </div>
            <div className="input-block">
                <span>Zip: </span><input type="text" onChange={e => this.onChangeZip(e)} />
            </div>
                <button className="add-location-btn" onClick={this.saveLocation}>Save</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    login: state.login.logInForm
});

  export default  connect(
    mapStateToProps,
    { createLocation, getLocationsByUserId }
  )(AddLocationFrom as any);
