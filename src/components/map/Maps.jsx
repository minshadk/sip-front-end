import { useState, useEffect } from "react";
// import Map from "react-map-gl";
import Map, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import axios from "axios";
// import { format } from "timeago.js";
// import "./app.css";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX;

function Maps() {
  // const currentUser = "test";
  // const [showPopup, setShowPopup] = useState(true);
  // const [pins, setPins] = useState([]);
  // const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [location, setNewPlace] = useState(null);


  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(
    myStorage.getItem("user")
  );

  const [viewport, setViewport] = useState({
    latitude: 70,
    longitude: 17.071727,
    zoom: 4,
  });

  useEffect(() => {
    // const getPins = async () => {
    //   try {
    //     const res = await axios.get("/pins");
    //     setPins(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getPins();
  }, []);

  // const handleMarkerClick = (id, lat, long) => {
  //   setCurrentPlaceId(id);
  //   setViewport({ ...viewport, latitude: lat, longitude: long });
  // };

  const handleAddClick = (e) => {
    console.log("handle add click is called")
    console.log(e.lngLat)
    // const [longitude, latitude] = e.lngLat;
    // const {longitude, latitude} = e.lngLat;
    let longitude = e.lngLat.lng;
    let latitude = e.lngLat.lat;
    console.log(`longitude = ${longitude}`)
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  console.log(location)
  const handleSubmit = async (e) => {

  };
  return (
    <Map
      initialViewState={{ ...viewport }}
      style={{
        // width: 600, height: 400
        width: "100vw",
        height: "100vh",
      }}
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={"pk.eyJ1IjoibWluc2hhZGsiLCJhIjoiY2t6OGxzeWNxMWx3aDJ2b2ZiZGNtZ2M1cSJ9.CPfPxCgQaVLHIPlyoBqLgg"}
      mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      onDblClick={handleAddClick}
      transitionDuration="200"
    >


      {location && (
        <>
          <Marker
            latitude={location.lat}
            longitude={location.long}
            offsetLeft={-3.5 * viewport.zoom}
            offsetTop={-7 * viewport.zoom}
          >
            <Room
              style={{
                fontSize: 7 * viewport.zoom,
                color: "blue",
                cursor: "pointer",
              }}
            />
          </Marker>
          <Popup
            latitude={location.lat}
            longitude={location.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
            anchor="left"
          > 
          set as my location
            <div>

                <button type="submit" className="submitButton" onClick={console.log("go the next page")}>
                  Set as my location
                </button>
            </div>
          </Popup>
        </>
      )}
    </Map>
  );
}

export default Maps;
