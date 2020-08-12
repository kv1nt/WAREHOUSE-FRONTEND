import React from 'react';
import '../Banner/mainBanner.css';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import ProductTMBreadcrumb from '../Breadcrumbs/ProductTMBreadcrumb/ProductTMBreadcrumb';

interface IMainMannerProps
{

}

export class MainBanner extends React.Component<IMainMannerProps, any> {
constructor(props: IMainMannerProps)
{
    super(props)
    this.state = {}
}

 componentDidMount(){

 }
    render(){
        return(
            <div className="main-banner-container">
                <ProductTMBreadcrumb/>
                <ProductTMBreadcrumb/>
                <ProductTMBreadcrumb/>
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
  )(MainBanner as any);
