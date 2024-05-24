import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.css";

const App = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2FyZWVtMjAwMnNoaW1lcyIsImEiOiJjbHIyNXRqdGgxMDd5MnB0M3NhcGU0dW00In0.AzOg6_5maKfFjnxNwExWhg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [6.222414, 30.2733],
      zoom: 3,
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();
      console.log("Longitude:", lng, "Latitude:", lat);
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default App;
