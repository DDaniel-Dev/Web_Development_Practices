import React from "react";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./util.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiZGRhbmllbDIyIiwiYSI6ImNsYXhlMXhlOTA4czEzcG05bnFiaGh5Y20ifQ.D18FdcGQFGcn8t5KEqaM8w';

export default function Map() {
  const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(30.2672);
    const [lat, setLat] = useState(97.7431);
    const [zoom, setZoom] = useState(18);

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
    <>
    <div 
      ref={mapContainer} 
      className="col-md map"
    />
    </>
  )
};