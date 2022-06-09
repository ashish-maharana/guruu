import React, { Component, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function CustomMap({ google, locations = [] }) {
  const [mapCenter, setMapCenter] = useState({
    lat: 20.5937, lng: 78.9629
  });
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        // update center state
        setMapCenter({  
          lat: latLng.lat,
          lng: latLng.lng,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const getCoordinates = (position) => {
    setMapCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    });
    reverseGeocodeCoordinates(position.coords.latitude,position.coords.longitude);
  };

  const reverseGeocodeCoordinates = (lat,lng) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=AIzaSyDNqi_44owOGjsZ8rPuE10GfcgF7wl592E`
    )
      .then((response) => response.json())
      .then((data) => setAddress(data.results[0].formatted_address))
      .catch((error) => alert(error));
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("You denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get your current location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An Unknown error occurred.");
    }
  };

  // const {address} = address;
  return (
    <div className="map-wrapper" id="googleMaps">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="map-search">
              <div className="search-map-location">
                <div className="location-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <input
                className=""
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className:
                    "location-search-input form-control form-control-user",
                })}
              />{" "}
                <span className="current-location" title="Find my location" onClick={getLocation} >
                  <img src='images/my-location.svg' /> 
                </span>
            </div>
            <div
              className="autocomplete-dropdown-container"
              style={{ marginTop: "15px" }}
            >
              {loading && <div className="loading-search"> Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#f5f5f5", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {address == "" ? (
        <Map
          google={google}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={false}
          zoom={4}
          initialCenter={{ lat: mapCenter.lat, lng: mapCenter.lng }}
          center={{ lat: mapCenter.lat, lng: mapCenter.lng }}
        ></Map>
      ) : (
        <Map
          google={google}
          zoom={15}
          initialCenter={{ lat: mapCenter.lat, lng: mapCenter.lng }}
          center={{ lat: mapCenter.lat, lng: mapCenter.lng }}
        >
          <Marker
            position={{ lat: mapCenter.lat, lng: mapCenter.lng }}
          />
        </Map>
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDNqi_44owOGjsZ8rPuE10GfcgF7wl592E",
})(CustomMap);
