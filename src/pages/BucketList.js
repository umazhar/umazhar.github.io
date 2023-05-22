import React from 'react';
import "../styles/BucketList.css";
import "../components/GlobeMap";
import GlobeMap from '../components/GlobeMap';


function BucketList() {
  return (
    <div className = "globe">
        <h1 className='BucketListTitle'>My Bucket List</h1>
        <GlobeMap />

    </div>
  );
};

export default BucketList;
