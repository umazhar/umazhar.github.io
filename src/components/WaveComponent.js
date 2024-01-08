import React, { useEffect, useRef } from 'react';
import Wave from '../assets/waving.js';

const WaveComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    new Wave({
      unit: 100,
      info: {
        infoSeconds: 0,
        infoTime: 1,
      },
      animationFrame: .001,
      timeoutSecond: 35,
      el: canvas,
      colorList: ['#128A88', '#c842f5', '#18d3d6'],
      opacity: [0.3, 0.6, 0.4],
      zoom: [3, 4, 1.6, 3, 2],
      startPosition: [0, 0.23, 0.1],
      lineWidth: 0.4,
      xAxis: Math.floor(canvas.height / 2),
      stroke: true,
      fill: false,
      canvasWidth: document.documentElement.clientWidth,
      canvasHeight: document.documentElement.clientHeight,
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WaveComponent;
