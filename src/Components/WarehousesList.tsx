import * as React from "react";
import { connect } from "react-redux";
import { AppState } from '../store';
import './styles/WarehousesList.css';
import { getWarehouses, createWarehouse, deleteWarehouse } from "../store/warehouse/actions";
import { WarehouseState, Warehouse } from "../store/warehouse/types";
import { AddWarehouseForm } from "./Forms/WarehouseForms/AddWarehouseForm";
import { getLocations } from "../store/location/actions";
import { LocationsState } from "../store/location/types";


interface AppOwnProps{
    createWarehouse: typeof createWarehouse
    getWarehouses: typeof getWarehouses
    deleteWarehouse: typeof deleteWarehouse
    getLocations: typeof getLocations
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
       await this.props.getWarehouses()
    }

    async removeWarehouse(id: string) {
      await this.props.deleteWarehouse(id)
      await this.props.getWarehouses()
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
          <div className="comapnies-list-container">
            <div className="title-block">Warehouses:</div>
            {
              warehouses.warehouses.map((warehouse: Warehouse, i: number) =>{
                return(
                  <>
                    <ul>
                        <li key={i+1}>
                          <div className="CompanyItem">
                            <div className="DeleteCompany" onClick={()=> this.removeWarehouse(warehouse.id)}>
                              <button className="delete-company-btn">Delete</button>
                            </div>
                            <div className="company-title">{warehouse.square}</div>
                            <div className="company-description">{warehouse.description}</div>
                            </div>
                        </li>
                    </ul> 
                  </>
                )
            })}
            <br/>
            <div className="title-block">Add New Warehouse:</div>
            <AddWarehouseForm {...this.props} />
        </div>        
      );
    }
  }
  
  const mapStateToProps = (state: AppState) => ({
    warehouses : state.warehouses,
    locations: state.locations
  });
  
  export default connect(
    mapStateToProps,
    {
        getWarehouses, createWarehouse, deleteWarehouse, getLocations
    }
  )(WarehousesList as any);