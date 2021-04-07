import React from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

const GoogleMaps  = props => {
    const apiKey = 'AIzaSyBVbXANegGz0_3o3GNKAdHQZytzExwNDiM';

    return (
      <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
              zoom={13}
              id={props.id}
              center={props.position}

          >
              <Marker
                  position={props.position}
                  title={props.title}
                  icon={props.icon}
              />
          </GoogleMap>
      </LoadScript>

    );
}

export default GoogleMaps;
