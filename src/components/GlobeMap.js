import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import Globe from 'react-globe.gl';
import '../styles/GlobeMap.css';

const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

const N = 30;
const gData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  size: 7 + Math.random() * 30,
  color: ['red', 'white', 'purple', 'green'][Math.round(Math.random() * 3)]
}));

function World() {
  const [landPolygons, setLandPolygons] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    // load data
    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <div id="globeViz">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        htmlElementsData={gData}
        htmlElement={d => {
          const el = document.createElement('div');
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style['pointer-events'] = 'auto';
          el.style.cursor = 'pointer';
          el.onclick = () => handleMarkerClick(d);
          return el;
        }}
      />
      {selectedMarker && (
        <div className="popup">
          <h3>Selected Marker:</h3>
          <p>Latitude: {selectedMarker.lat}</p>
          <p>Longitude: {selectedMarker.lng}</p>
          <p>Size: {selectedMarker.size}</p>
          <p>Color: {selectedMarker.color}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return <div id="globeViz"><World /></div>;
}

export default App;
