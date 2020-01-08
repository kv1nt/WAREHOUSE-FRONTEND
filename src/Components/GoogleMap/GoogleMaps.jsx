import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      // <div style={{ height: '1000px', width: '100%' }}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: '' }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //     <AnyReactComponent
      //       lat={59.955413}
      //       lng={30.337844}
      //       text="My Marker"
      //     />
      //   </GoogleMapReact>
      // </div>
      <iframe width="1000" height="1300" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    );
  }
}

export default GoogleMaps;

   