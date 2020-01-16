import React from 'react';

import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getWarehouses, getWarehousesByUserId } from '../../../store/warehouse/actions';
import { WarehouseState, Warehouse } from '../../../store/warehouse/types';
import { WarehouseBreadcrumb } from './WarehouseBreadcumb';
import { LoginForm } from '../../../store/userLogin/types';


interface IWarehouseBreadcrumbListProps
{
    getWarehouses: typeof getWarehouses 
    getWarehousesByUserId: typeof getWarehousesByUserId
    warehouses?: WarehouseState 
    login:  LoginForm
}

interface IWarehouseBreadcrumbListState
{

}


class WarehouseBreadcrumbList extends React.Component<IWarehouseBreadcrumbListProps, IWarehouseBreadcrumbListState> {
    constructor(props: IWarehouseBreadcrumbListProps)
    {
        super(props)
        this.state = {
           
        }
    }

    async componentDidMount(){
        const { login } = this.props;
       await this.props.getWarehousesByUserId(login.id)
    }

    render(){
        return(
            <div className="warehouse-list-container">
                <div className="list-title">Warehouses</div>
                {this.props.warehouses?.warehouses.map((warehouse: Warehouse, index: number) =>
                    <WarehouseBreadcrumb {...warehouse} key={index}/>
                )}            
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    warehouses : state.warehouses,
    login: state.login.logInForm
  });
  
  export default connect(
    mapStateToProps, { getWarehouses , getWarehousesByUserId}
  )(WarehouseBreadcrumbList as any);

