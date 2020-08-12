import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import '../ProductTMBreadcrumb/productTMBreadcrumb.css'
import DarkSide from '../../../images/dark-side.jpg'

interface IProductTMBreadcrumbProps
{

}

export class ProductTMBreadcrumb extends React.Component<IProductTMBreadcrumbProps, any> {
constructor(props: IProductTMBreadcrumbProps)
{
    super(props)
    this.state = {}
}

 componentDidMount(){

 }
    render(){
        return(
            <div className="product-breadcrumb">
                <img src={DarkSide} alt="img"/>
            </div>
            
        )
    }
}

const mapStateToProps = (state: AppState) => ({

  });
  
  export default connect(
    mapStateToProps,
    {
   
    }
  )(ProductTMBreadcrumb as any);
