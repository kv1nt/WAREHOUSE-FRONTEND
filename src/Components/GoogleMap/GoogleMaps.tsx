/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './googleMap.css'
import { getLocationsByUserId } from '../../store/location/actions';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { LocationsState, LocationModel } from '../../store/location/types';
import { LeftMenu } from '../Menu/LeftMenu';
import { LoginForm } from '../../store/userLogin/types';

interface GoogleMapsProps{
  getLocationsByUserId: typeof getLocationsByUserId
  locations: LocationsState
  login: LoginForm
}
interface GoogleMapsState{
  country: string
  city: string
  buildigNumber: string,
  street: string
}

class GoogleMaps extends React.Component<GoogleMapsProps, GoogleMapsState> {
  constructor(props:GoogleMapsProps){
    super(props)
    this.state ={
      country: '',
      city: '',
      buildigNumber: '',
      street: ''
    }
  }

  async componentDidMount(){
    const { login } = this.props;
    getLocationsByUserId(login.id)
  }

  getCurrLocation(location: LocationModel){
    this.setState({
      country: location.country,
      city: location.city,
      street: location.street,
      buildigNumber: location.buildingNumber.toString()
    })
  }


  
  render() {
    const {locations} = this.props;
    let BASE_PATH = "https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;&q=";
    let URL_COFIG = "&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;&output=embed";
    const URL = `${BASE_PATH}${this.state.city}%20${this.state.street}%20${this.state.buildigNumber}${URL_COFIG}`.replace('$','').toString();
    return (
        <>
        <LeftMenu/>
        <div className="google-map-container">
          <iframe width="100%" height="500"src={URL}>
            <a href="https://www.maps.ie/coordinates.html">latitude longitude finder</a></iframe>
        </div>
        <div className="exists-locations-list-google">
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
  locations : state.locations,
  login: state.login.logInForm
});

export default connect(
  mapStateToProps,
  {
    getLocationsByUserId
  }
)(GoogleMaps as any);


   