const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
ctx.lineWidth = 5;

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  buildCircle() {
    ctx.beginPath();
    ctx.arc(0.5 * width, 0.5 * height, this.radius, 1.5 * Math.PI, 3.5 * Math.PI, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

let usable_rad = width > height ? height / 2 : width / 2;

let seconds = new Circle(usable_rad - 120, '#ff0000');
seconds.buildCircle();

let minutes = new Circle(usable_rad - 70, '#32a8a6');
minutes.buildCircle();

let hours = new Circle(usable_rad - 20, '#98a832');
hours.buildCircle();