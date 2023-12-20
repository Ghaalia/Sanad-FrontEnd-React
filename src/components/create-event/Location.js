//// THE BEST WAY SO FAR :::
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback, useState } from "react";
import { instance } from "../../api";

const containerStyle = {
  width: "700px",
  height: "500px",
};

const center = {
  lat: 29.3581453,
  lng: 47.9044274,
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCwZtkvVKSzedzs4SKvEamWEVG6q-Zdh8o",
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  });

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(center);

  const onMapClick = (e) => {
    const clickedLatLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    console.log(clickedLatLng);
    setMarkerPosition(clickedLatLng);
  };

  // const onSaveLocation = async () => {
  //   try {
  //     // Make an HTTP POST request to your backend endpoint
  //     const response = await instance.post("/api/org/create-event", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(markerPosition),
  //     });

  //     // Check if the request was successful
  //     if (response.ok) {
  //       console.log("Location saved successfully");
  //     } else {
  //       console.error("Failed to save location");
  //     }
  //   } catch (error) {
  //     console.error("Error saving location:", error);
  //   }
  // };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={onMapClick}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      ) : (
        <></>
      )}
      {/* <button onClick={onSaveLocation}>Save Location</button> */}
    </div>
  );
};

export default Location;

////// THIS WAY IS BY PASTING A LINK ::::::::::::::::::::::::::::
// import React, { useState } from "react";
// const Location = () => {
//   const [location, setLocation] = useState("");
// //   const eventLocation =
// //     "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28304.503343290875!2d47.92766716797531!3d29.347324544061138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf8537ae9080d9%3A0x9bf0cb949d1006de!2z2K_ZitmI2KfZhiDYp9mE2K7Yr9mF2Kkg2KfZhNmF2K_ZhtmK2KkgLSDYr9mI2YTYqSDYp9mE2YPZiNmK2Ko!5e0!3m2!1sen!2skw!4v1702894606910!5m2!1sen!2skw";

//   const handleLoactionChange = (e) => {
//     // console.log("New Title:", title);
//     setLocation(e.target.value);
//   };
//   return (
//     <div style={{ margin: 100 }}>
//       <input
//         placeholder="paste your location here"
//         type="text"
//         value={location}
//         onChange={handleLoactionChange}
//         className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
//       />
//       <iframe
//         src={location}
//         width="600"
//         height="450"
//         style={{ border: 0, margin: 100 }}
//         allowfullscreen=""
//         loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </div>
//   );
// };

// export default Location;

//// ANOTHER WAY ::::::::::::::::::
// import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import React from "react";

// const containerStyle = {
//   width: "1280px",
//   height: "720px",
// };
// const center = {
//   lat: 29.3117,
//   lng: 47.4818,
// };

// const Location = () => {
//   const { isloaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyCwZtkvVKSzedzs4SKvEamWEVG6q-Zdh8o",
//   });
//   const [map, setMap] = React.useState(null);

//   const onload = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   });

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);
//   return (
//     <div>
//       <div
//         style={{
//           position: "absolute",
//           top: 10,
//           left: 10,
//           backgroundColor: "orange",
//         }}
//       >
//         <h1> hello </h1>
//       </div>
//       isloaded ?
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={7}
//         onUnmount={onUnmount}
//       ></GoogleMap>
//       : <></>
//     </div>
//   );
// };

// export default Location;

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
