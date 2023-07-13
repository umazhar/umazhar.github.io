
  class Wave {
    constructor(config) {
      this.unit = config.unit || 100;
      this.info = config.info || {};
      this.info.seconds = config.infoSeconds || 0;
      this.info.time = config.infoTime || 0;
      this.animationFrame = config.animationFrame || .014;
      this.canvas = config.el || document.createElement('canvas');
      this.colorList = config.colorList || ['#0ff', '#ff0', '#f00', '#00f', '#f0f'];
      this.opacity = config.opacity || [0.8, 0.5, 0.3, 0.2, 0.8];
      this.zoom = config.zoom || [3, 4, 1.6, 3, 2];
      this.startPosition = config.startPosition || [0, 0, 0, 100, 0];
      this.lineWidth = config.lineWidth || 1;
      this.xAxis = config.xAxis || Math.floor(this.canvas.height / 2);
      this.yAxis = config.yAxis || -1;
      this.stroke = config.stroke !== undefined ? config.stroke : true;
      this.fill = config.fill !== undefined ? config.fill : false;
  
      this.canvas.width = config.canvasWidth || document.documentElement.clientWidth;
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
    
    draw(canvas, color) {
      // 対象 this.canvasのコンテキストを取得
      var context = canvas.contextCache;
      // キャンバスの描画をクリア
      context.clearRect(0, 0, canvas.width, canvas.height);
      //波を描画 drawWave this.canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
      for (let i = 0; i < this.colorList.length; i++){
        this.drawWave (canvas, color[i], this.opacity[i], this.zoom[i], this.startPosition[i]);
      }
    }

    drawWave (canvas, color, alpha, zoom, delay) {
      var context = canvas.contextCache;
      context.globalAlpha = alpha;
      context.beginPath(); //パスの開始
      this.drawSine (canvas, this.info.time / 0.5, zoom, delay);
      
      if(this.stroke){
        context.strokeStyle = color; //線の色
        context.lineWidth = this.lineWidth; //線の幅
        context.stroke(); //線
      }
      if(this.fill){
        context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
        context.lineTo(0, canvas.height); //パスをCanvasの左下へ
        context.closePath() //パスを閉じる
        context.fillStyle = color;//塗りの色
        context.fill(); //塗りつぶす
      }
    }

    drawSine (canvas, t, zoom, delay) {
      var xAxis = this.xAxis;
      var yAxis = this.yAxis;
      var context = canvas.contextCache;
      // Set the initial x and y, starting at 0,0 and translating to the origin on
      // the canvas.
      var x = t; //時間を横の位置とする
      var y = Math.sin(x) / zoom;
      context.moveTo(yAxis, this.unit * y + xAxis); //スタート位置にパスを置く
  
      // Loop to draw segments (横幅の分、波を描画)
      for (let i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / this.unit / zoom;
        y = Math.sin(x - delay) / 2;
        context.lineTo(i, this.unit * y + xAxis);
      }
    }
  }

  export default Wave;