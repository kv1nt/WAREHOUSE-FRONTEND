import * as React from "react";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import '../../Forms/WarehouseForms/addWarehouseForm.css';
import { createWarehouse, getWarehousesByUserId } from "../../../store/warehouse/actions";
import { Warehouse } from "../../../store/warehouse/types";
import { getLocationsByUserId } from "../../../store/location/actions";
import { LocationsState, LocationModel } from "../../../store/location/types";
import AddLocationForm from "../LocationForms/AddLocationForm";
import { LoginForm } from "../../../store/userLogin/types";

interface FormWarehouseProps{
    createWarehouse: typeof createWarehouse
    getWarehousesByUserId: typeof getWarehousesByUserId
    getLocationsByUserId: typeof getLocationsByUserId
    locations: LocationsState
    login:  LoginForm
}

interface AddWarehouseState {
    square: number
    description: string
    errorInput: string
    isError: boolean
    locationId: string
    isLocationFormShow: boolean
}

export  class AddWarehouseForm extends React.Component<any,AddWarehouseState >{
    constructor(props:FormWarehouseProps){
        super(props)

        this.state = {
           square: 0,
           description: "",
           errorInput: "",
           isError: false,
           locationId: "",
           isLocationFormShow: false
        }

        this.getLocationId = this.getLocationId.bind(this);
    }

    async componentDidMount(){
        const {login} = this.props
        this.props.getWarehousesByUserId(login.id)
        await  getLocationsByUserId(login.id)
    }

    onChangeSquare = (e: React.FormEvent<HTMLInputElement>) =>{
        if(e.currentTarget.value.match(/^[0-9]+$/)){
            this.setState({square: parseFloat(e.currentTarget.value)})
            this.setState({errorInput: "", isError: false})
        }else{
            this.setState({errorInput: "Digits only...", isError: true})
        } 
    }

    onChangeDescription = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({description: e.currentTarget.value})
    }

    saveWarehouse = async () =>{
        const {login} = this.props;
        const {square, description} = this.state;
        if(square.toString().match(/\d+/g)){
            this.setState({errorInput: "", isError: false})
            const warehouse : Warehouse = {
                id: null, 
                userId: login.id,
                companyId: null,
                locationId: this.state.locationId,
                square : square, 
                description: description
                };
            await this.props.createWarehouse(warehouse)
            this.props.getWarehousesByUserId(login.id)
            this.setState({isLocationFormShow: false})
        }else{
            this.setState({errorInput: "Digits only!", isError: true})
        }      
    }


    getLocationId(e: any){       
        let locId : string = e.target.value.toString();
         this.setState({locationId: locId})
    }

    showCreateLocationForm(){
        this.setState({isLocationFormShow: true})
    }


    render(){
        const {locations} =  this.props;
        return(
            <>
            <div className="add-warehouse-form">
                <div className="input-block">
                <span>Square (m²): </span><input type="text" onChange={e => this.onChangeSquare(e)}/>
                {this.state.isError ? <div className="input-error">{this.state.errorInput}</div> : "" }
            </div> 
            <div className="input-block">
                <span>Description: </span><input type="text" onChange={e => this.onChangeDescription(e)} />
            </div>
            <div className="input-block">
                <span>Locations: </span>
                    <select onChange={this.getLocationId} className="select-css">
                        { locations.locations.map((location: LocationModel, index : number) => {
                            return (
                                <option value={location.id} key={index+1}>
                                    {location.country}, {location.city}, {location.street},{location.buildingNumber} 
                                </option>
                            )
                          })
                        }                   
                    </select>
            </div>
                <button className="add-warehouse-btn" onClick={this.saveWarehouse}>Save</button>
                <button className="add-warehouse-btn" onClick={() => this.showCreateLocationForm()}>Create Location</button>
            </div>
                {this.state.isLocationFormShow ? <AddLocationForm {...this.props}/>: ""}
            </>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    warehouses : state.warehouses,
    locations: state.locations,
    login: state.login.logInForm
  });

  export default  connect(
    mapStateToProps,
    { getLocationsByUserId, createWarehouse,
      getWarehousesByUserId
    }
  )(AddWarehouseForm as any);
