/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import './googleMap.css'
import { getLocations } from '../../store/location/actions';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { LocationsState, LocationModel } from '../../store/location/types';

interface GoogleMapsProps{
  getLocations: typeof getLocations
  locations: LocationsState
}
interface GoogleMapsState{
  country: string
  city: string
  buildigNumber: string
}

class GoogleMaps extends React.Component<GoogleMapsProps, GoogleMapsState> {
  constructor(props:GoogleMapsProps){
    super(props)
    this.state ={
      country: '',
      city: '',
      buildigNumber: ''
    }
  }

  componentDidMount(){
    this.props.getLocations()
  }

  getCurrLocation(location: LocationModel){
    this.setState({
      country: location.country,
      city: location.city,
      buildigNumber: location.buildingNumber.toString()
    })
  }

  render() {
    const {locations} = this.props;
    console.log(locations)
    return (
        <>
        <div className="google-map-container">
          <iframe width="100%" height="500"
          src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;q=Soborna%201%20Vinnitsya+(My%20Company)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ><a href="https://www.maps.ie/coordinates.html">latitude longitude finder</a></iframe>
        </div>
        <div className="exists-locations-list">
            {locations.locations.map((location: LocationModel, index: number)=>
             (<div className="location-breadcrumb" key={index+1} onClick={()=> this.getCurrLocation(location)}>
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
)(GoogleMaps as any);


   