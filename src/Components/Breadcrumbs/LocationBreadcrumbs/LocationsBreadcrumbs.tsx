import React from 'react';
import { connect } from 'react-redux';
import { getLocations } from '../../../store/location/actions';
import { LocationsState, LocationModel } from '../../../store/location/types';
import { AppState } from '../../../store';
import './locationBreadcrumbs.css';


interface LocationsProps{
  getLocations: typeof getLocations
  locations: LocationsState
}
interface LocatiuonsState{
  country: string
  city: string
  buildigNumber: string,
  street: string
}

class LocationBreadcrumbs extends React.Component<LocationsProps, LocatiuonsState> {
  constructor(props:LocationsProps){
    super(props)
    this.state ={
      country: '',
      city: '',
      buildigNumber: '',
      street: ''
    }
  }

  componentDidMount(){
    this.props.getLocations()
  }
  
  render() {
    const {locations} = this.props;
    return (
        <>
        <div className="exists-locations-list">
            {locations.locations.map((location: LocationModel, index: number)=>
             (<div className="location-breadcrumb" key={index+1}>
                <div className="title">Location</div>
                <div className="item-param">Country: {location.country}</div>
                <div className="item-param">City: {location.city}</div>
                <div className="item-param">Address: {location.street}, {location.buildingNumber}</div>
                <div className="item-param">ZIP: {location.zip}</div>
            </div>)
             )}
        </div>
        </>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  locations : state.locations
});

export default connect(
  mapStateToProps,
  {
    getLocations
  }
)(LocationBreadcrumbs as any);


   