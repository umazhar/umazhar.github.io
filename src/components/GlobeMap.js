import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import Globe from 'react-globe.gl';
import '../styles/GlobeMap.css';

function World() {
  const [landPolygons, setLandPolygons] = useState([]);

  useEffect(() => {
    // load data
    fetch('//unpkg.com/world-atlas/land-110m.json')
      .then((res) => res.json())
      .then((landTopo) => {
        setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
      });
  }, []);

  return (
    <Globe
      backgroundColor="rgba(0,0,0,0)"
      showGlobe={false}
      showAtmosphere={false}
      polygonsData={landPolygons}
      polygonCapMaterial={new THREE.MeshLambertMaterial({ color: '#169ac6', side: THREE.DoubleSide })}
      polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
    />
  );
}

function App() {
  return <div id="globeViz"><World /></div>;
}

export default App;
