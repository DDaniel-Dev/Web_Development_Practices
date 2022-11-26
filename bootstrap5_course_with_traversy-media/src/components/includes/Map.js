import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./util.css"

mapboxgl.accessToken = 
  'pk.eyJ1IjoiZGRhbmllbDIyIiwiYSI6ImNsYXhlMXhlOTA4czEzcG05bnFiaGh5Y20ifQ.D18FdcGQFGcn8t5KEqaM8w';

export default function Map() {
  const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-97.7460);
    const [lat, setLat] = useState(30.2680);
    const [zoom, setZoom] = useState(12.1);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });
  
  return(
    <div className="col-md">
      <div ref={mapContainer} className="map-container img-flex"/>
    </div>
  );
};