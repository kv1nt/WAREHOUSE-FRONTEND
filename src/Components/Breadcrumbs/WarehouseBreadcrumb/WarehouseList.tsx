import React from 'react';

import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getWarehouses } from '../../../store/warehouse/actions';
import { WarehouseState } from '../../../store/warehouse/types';
import { WarehouseBreadcrumb } from './WarehouseBreadcumb';


interface IWarehouseBreadcrumbListProps
{
    getWarehouses: typeof getWarehouses 
    warehouses?: WarehouseState 
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
        await this.props.getWarehouses()
    }

    render(){
        return(
            <div className="warehouse-list-container">
            <   div className="list-title">Warehouses</div>
                {this.props.warehouses?.warehouses.map((warehouse: any) =>
                    <WarehouseBreadcrumb {...warehouse} />
                )}            
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    warehouses : state.warehouses
  });
  
  export default connect(
    mapStateToProps, { getWarehouses }
  )(WarehouseBreadcrumbList as any);

