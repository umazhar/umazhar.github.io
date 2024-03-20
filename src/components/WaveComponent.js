import React, { useEffect, useRef, useState } from 'react';
import Wave from '../assets/waving.js';

const WaveComponent = () => {
  const canvasRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    // Adjust wave properties based on screen width
    const isMobile = viewportWidth < 768; // Example breakpoint for mobile devices
    const zoom = isMobile ? [3, 4, 1] : [3, 4, 1.6];
    const unit = isMobile ? 50 : 100; // Smaller unit size for mobile
    const lineWidth = isMobile ? 0.6 : 0.7;

    const wave = new Wave({
      unit: unit,
      info: {
        infoSeconds: 0,
        infoTime: 1,
      },
      animationFrame: 0.001,
      el: canvas,
      colorList: ['#128A88', '#c842f5', '#18d3d6'],
      opacity: [0.3, 0.6, 0.4],
      zoom: zoom,
      startPosition: [0, 0.23, 0.1],
      lineWidth: lineWidth,
      xAxis: Math.floor(viewportHeight / 2),
      yAxis: -1,
      stroke: true,
      fill: false,
      canvasWidth: viewportWidth,
      canvasHeight: viewportHeight,
    });

    const handleMouseDown = () => {
      setIsMouseDown(true);
      wave.updateNoiseLevel(0);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      wave.updateNoiseLevel(1);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WaveComponent;
