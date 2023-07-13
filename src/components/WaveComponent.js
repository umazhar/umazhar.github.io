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
        infoTime: 0,
      },
      animationFrame: .001,
      timeoutSecond: 35,
      el: canvas,
      colorList: ['#0ff', '#40A8B5', '#128A88'],
      opacity: [0.8, 0.6, 0.4],
      zoom: [3, 4, 1.6, 3, 2],
      startPosition: [0, 0, 0],
      lineWidth: 2,
      xAxis: Math.floor(canvas.height / 2),
      stroke: true,
      fill: false,
      canvasWidth: document.documentElement.clientWidth,
      canvasHeight: 220,
    });
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WaveComponent;
