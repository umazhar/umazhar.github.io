class Wave {
  constructor(config) {
    this.unit = config.unit || 100;
    this.info = config.info || {};
    this.info.seconds = config.infoSeconds || 0;
    this.info.time = config.infoTime || 0;
    this.animationFrame = config.animationFrame || 0.014;
    this.canvas = config.el || document.createElement("canvas");
    this.colorList = config.colorList || [
      "#0ff",
      "#ff0",
      "#f00",
      "#00f",
      "#f0f",
    ];
    this.opacity = config.opacity || [0.8, 0.5, 0.3, 0.2, 0.8];
    this.zoom = config.zoom || [3, 4, 1.6, 3, 2];
    this.startPosition = config.startPosition || [0, 0, 0, 100, 0];
    this.lineWidth = config.lineWidth || 1;
    this.xAxis = config.xAxis || Math.floor(this.canvas.height / 2);
    this.yAxis = config.yAxis || -1;
    this.stroke = config.stroke !== undefined ? config.stroke : true;
    this.fill = config.fill !== undefined ? config.fill : false;

    this.canvas.width =
      config.canvasWidth || document.documentElement.clientWidth;
    this.canvas.height = config.canvasHeight || 200;
    this.canvas.contextCache = this.canvas.getContext("2d");

    this.animationId = null;
    this.update();
  }

  update() {
    this.draw(this.canvas, this.colorList);

    this.info.seconds = this.info.seconds + this.animationFrame;
    this.info.time = this.info.seconds * Math.PI;

    this.animationId = requestAnimationFrame(this.update.bind(this));
  }

  updateNoiseLevel(level) {
    this.waveLength = level; 
  }

  draw(canvas, color) {
    var context = canvas.contextCache;
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < this.colorList.length; i++) {
      this.drawWave(
        canvas,
        color[i],
        this.opacity[i],
        this.zoom[i],
        this.startPosition[i]
      );
    }
  }

  drawWave(canvas, color, alpha, zoom, delay) {
    var context = canvas.contextCache;
    context.globalAlpha = alpha;
    context.beginPath();

    // Adjusted to draw a multi-harmonic wave
    this.drawSine(canvas, this.info.time, zoom, delay, color);

    if (this.stroke) {
      context.strokeStyle = color;
      context.lineWidth = this.lineWidth;
      context.stroke();
    }

    if (this.fill) {
      context.lineTo(canvas.width + 10, canvas.height);
      context.lineTo(0, canvas.height);
      context.closePath();
      context.fillStyle = color;
      context.fill();
    }
  }
  drawSine(canvas, t, zoom, delay, color) {
    var context = canvas.contextCache;
    var length = canvas.width;
    var harmonics = 10; // Adjusted number of harmonics for balance
    var amplitudeNoiseFactor = 0.05; // Controlled randomness in amplitude
    var wavelengthNoiseFactor = 0.02; // Controlled randomness in wavelength

    for (let x = 0; x <= length; x += 1) {
      let y = 0;

      for (let n = 1; n <= harmonics; n++) {
        let randomFactor = 1 + Math.random() * wavelengthNoiseFactor;
        let waveLength = (length / (n * 1.5)) * randomFactor;
        y +=
          (1 / n) *
          Math.sin(2 * Math.PI * n * (x / waveLength + t / zoom - delay));
      }

      let amplitudeRandomness = 1 + Math.random() * amplitudeNoiseFactor;
      y *= amplitudeRandomness;
      let yPos = this.unit * y + this.xAxis;
      if (x === 0) {
        context.moveTo(x, yPos);
      } else {
        context.lineTo(x, yPos);
      }
    }
  }


}

export default Wave;
