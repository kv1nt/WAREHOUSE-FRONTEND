import React from 'react'
import '../WarehouseBreadcrumb/warehouseList.css'

interface IWarehouseBreadcrumbState{}


interface IWarehouseBreadcrumbProps
{
    square: number
    description: string
}


export class WarehouseBreadcrumb extends React.Component<IWarehouseBreadcrumbProps, IWarehouseBreadcrumbState> {
    render(){
        return(
            <div className="warehouse-breadcrumb">
                <div className="square">Warehouse</div>
                <div className="descripton">Location: Ukraine Vinnitsya</div>
                <div className="descripton">Square: {this.props.square} m²</div>
                <div className="descripton">Description: {this.props.description}</div>
            </div>
        )
    }
}