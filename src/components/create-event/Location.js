import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "1280px",
  height: "720px",
};
const center = {
  lat: 29.3117,
  lng: 47.4818,
};

const Location = () => {
  const { isloaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCwZtkvVKSzedzs4SKvEamWEVG6q-Zdh8o",
  });
  const [map, setMap] = React.useState(null);

  const onload = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          backgroundColor: "orange",
        }}
      >
        <h1> hello </h1>
      </div>
      isloaded ?
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onUnmount={onUnmount}
      ></GoogleMap>
      : <></>
    </div>
  );
};

export default Location;

// //// ANOTHER WAY ::

// // import React, { Component } from "react";
// // import { Map, GoogleApiWrapper } from "google-maps-react";
// // const Location = () => {
// //   return <div></div>;
// // };

// // export default Location;

// // class MapContainer extends Component {
// //   render() {
// //     return (
// //       <Map
// //         google={this.props.google}
// //         style={{ width: "50%", height: "50%" }}
// //         zoom={10}
// //         initialCenter={{
// //           lat: 29.3117,
// //           lng: 47.4818,
// //         }}
// //       />
// //     );
// //   }
// // }

// // export default GoogleApiWrapper({
// //   apiKey: "AIzaSyCwZtkvVKSzedzs4SKvEamWEVG6q-Zdh8o",
// // })(MapContainer);
