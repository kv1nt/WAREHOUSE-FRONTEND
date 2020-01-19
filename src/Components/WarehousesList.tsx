import * as React from "react";
import { connect } from "react-redux";
import { AppState } from '../store';
import './styles/WarehousesList.css';
import { createWarehouse, deleteWarehouse, getWarehousesByUserId } from "../store/warehouse/actions";
import { WarehouseState, Warehouse } from "../store/warehouse/types";
import { AddWarehouseForm } from "./Forms/WarehouseForms/AddWarehouseForm";
import { LocationsState } from "../store/location/types";
import { LeftMenu } from "./Menu/LeftMenu";
import { LoginForm } from "../store/userLogin/types";
import { getLocationsByUserId } from "../store/location/actions";


interface AppOwnProps{
    createWarehouse: typeof createWarehouse
    getWarehousesByUserId: typeof getWarehousesByUserId
    deleteWarehouse: typeof deleteWarehouse
    getLocationsByUserId: typeof getLocationsByUserId
    login:  LoginForm
    onClick: (e: React.MouseEvent) => void
    warehouses: WarehouseState;
    locations: LocationsState
    warehouse: Warehouse 
    description: string;
    square: string;
    id:any;
    path?: string;
  }


  class WarehousesList extends React.Component<AppOwnProps, any> {
    state = {
      warehouses: [], 
      description:'', 
      square:0,
      id: '',
    };

    async componentDidMount(){
       const { login } = this.props;
       await this.props.getWarehousesByUserId(login.id)
    }

    async removeWarehouse(id: string) {
        const { login } = this.props;
        await this.props.deleteWarehouse(id)
        await this.props.getWarehousesByUserId(login.id)
    }

     getCurrentWarehouse (warehouse: Warehouse) {
       this.setState({
         id: warehouse.id,
         square: warehouse.square,
         description: warehouse.description
        })
    }


    render() {
        const {warehouses} = this.props;
      return (
        <>
        <LeftMenu/>
          <div className="comapnies-list-container">
            <div className="title-block">Warehouses:</div>
            {
              warehouses.warehouses.map((warehouse: Warehouse, i: number) =>{
                return(
                    <ul key={i}>
                        <li>
                          <div className="CompanyItem">
                            <div className="DeleteCompany" onClick={()=> this.removeWarehouse(warehouse.id)}>
                              <button className="delete-company-btn">Delete</button>
                            </div>
                            <div className="company-title">{warehouse.square}</div>
                            <div className="company-description">{warehouse.description}</div>
                            </div>
                        </li>
                    </ul> 
                )
            })}
            <br/>
            <div className="title-block">Add New Warehouse:</div>
            <AddWarehouseForm {...this.props} />
        </div>   
        </>     
      );
    }
  }
  
  const mapStateToProps = (state: AppState) => ({
    warehouses : state.warehouses,
    locations: state.locations,
    login: state.login.logInForm
  });
  
  export default connect(
    mapStateToProps,
    { 
      createWarehouse, deleteWarehouse,
      getLocationsByUserId, getWarehousesByUserId
    }
  )(WarehousesList as any);