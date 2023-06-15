import React, { useEffect, useRef, useState } from 'react';
import './Map.css';
import { Map as olMap, View } from "ol";
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from "ol/source/OSM";

function Map() {

  const mapRef = useRef(null);

  const view = new View({
    center: fromLonLat([47.3, 47.15]),
    zoom: 7
  });

  const osmLayer = new TileLayer({
    source: new OSM(),
    zIndex: 0,
  });

  const [map, setMap] = useState(new olMap({
    controls: [],
    view: view,
    layers: [osmLayer]
  }));

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, [map]);

  return (
    <div className="map" id="map" ref={mapRef}>
    </div>
  );
}

export default Map;
