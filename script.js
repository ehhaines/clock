
const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, width, height);
ctx.lineWidth = 7;

let now = new Date();

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  buildCircle(time, units) {
    ctx.beginPath();
    ctx.arc(0.5 * width, 0.5 * height, this.radius, 1.5 * Math.PI, 3.5 * Math.PI, false);
    ctx.strokeStyle = '#808080';
    ctx.stroke();
    ctx.beginPath();
    let arc_length = (1.5 * Math.PI) + (2 * Math.PI / units) * time;
    ctx.arc(0.5 * width, 0.5 * height, this.radius, 1.5 * Math.PI, arc_length, false);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

class Time {
  constructor(width) {
    this.width = width;
  }

  displayTime(hours, min, sec) {
    ctx.font = "64px sans-serif";
    let text = hours.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) + ":" + min.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) + ":" + sec.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    let size = ctx.measureText(text);
    let start_x = (width / 2) - (size.width / 2);
    ctx.strokeStyle = '#ffffff';
    ctx.strokeText(text, start_x, height / 2, this.width);
  }
}

let usable_rad = width > height ? height / 2 : width / 2;

let seconds = new Circle(usable_rad - 120, '#ff0000');
let minutes = new Circle(usable_rad - 70, '#32a8a6');
let hours = new Circle(usable_rad - 20, '#98a832');
let time = new Time(500);

setInterval(() => {
  ctx.clearRect(0, 0, width, height);
  now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hou = now.getHours();
  if (hou >= 6 && hou <= 18) {
    ctx.fillStyle = 'rgb(237, 216, 28)';
  }
  else {
    ctx.fillStyle = 'rgb(2, 9, 46)';
  }
  ctx.fillRect(0, 0, width, height);

  if (usable_rad - 120 >= 150) {
    time.displayTime(hou, min, sec);
  }
  seconds.buildCircle(sec, 60);
  minutes.buildCircle(min, 60);
  hours.buildCircle(hou, 24);
}, 200);