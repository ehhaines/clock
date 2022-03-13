const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
ctx.lineWidth = 5;

let now = new Date();

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  buildCircle(time, units) {
    ctx.beginPath();
    let arc_length = (time === 0) ? 3.5  * Math.PI : (1.5 * Math.PI) + (2 * Math.PI / units) * time;
    ctx.arc(0.5 * width, 0.5 * height, this.radius, 1.5 * Math.PI, arc_length, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

let usable_rad = width > height ? height / 2 : width / 2;

let seconds = new Circle(usable_rad - 120, '#ff0000');
//seconds.buildCircle(now.getSeconds(), 60);

let minutes = new Circle(usable_rad - 70, '#32a8a6');
//minutes.buildCircle(now.getMinutes(), 60);

let hours = new Circle(usable_rad - 20, '#98a832');
//hours.buildCircle(now.getHours(), 24);


setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  ctx.fillRect(0, 0, width, height);
  now = new Date();
  seconds.buildCircle(now.getSeconds(), 60);
  minutes.buildCircle(now.getMinutes(), 60);
  hours.buildCircle(now.getHours(), 24);
  console.log(now.getSeconds());
  console.log(now.getMinutes());
  console.log(now.getHours());
}, 200);

