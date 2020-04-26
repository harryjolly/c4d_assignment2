
//boring maths stuff




function dataart(){

  var confirmed = covid.TotalConfirmed;
  var deaths = covid.TotalDeaths;
  var recovered = covid.TotalRecovered;
  var totalCases = confirmed+deaths+recovered; //add all the data to gain total cases
  console.log("the total cases are "+totalCases);

//turn amount of deaths into a percentage of total
  var deathsPec = ((deaths / totalCases) * 100);
  deathsPec = deathsPec.toFixed(2);
  document.getElementById("tdeaths").innerHTML = deathsPec+"%";
  console.log(deathsPec);

  var confiremedPec = ((confirmed / totalCases) * 100);
  confiremedPec = confiremedPec.toFixed(2);
  document.getElementById("tconf").innerHTML = confiremedPec+"%";

  var recoveredPec = ((recovered / totalCases) * 100);
  recoveredPec = recoveredPec.toFixed(2);
  document.getElementById("trec").innerHTML = recoveredPec+"%";



//console.log("the total cases are "+totalCases);
var n, particles;
var circleFill = "#ff0000"; //deaths
var circRadius = 5;
var mouseRadius = 5;

var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );
  init();
}, 100 );

var Particle = function (sx, sy) {
  this.sx = sx;
  this.sy = sy;
  this.vx = 0.0;
  this.vy = 0.0;

  this.vx = Math.random() * 2 - 1;
  this.vy = Math.random() * 2 - 1;
};

function init()
{
/* Resize Canvas */
canvas = document.getElementById("myCanvas");
context = canvas.getContext('2d');

// Create particles
particles = [];
n = Math.floor(deathsPec); //floor number into whole number
for(var i = 0; i < n; i++)
{
  var sx = Math.random() * canvas.width;
  var sy = Math.random() * canvas.height;
  particles[i] = new Particle(sx, sy);
}

// Render Update
canvas.addEventListener("mousemove", mouseMove);
update();
}

function update()
{

drawParticle();
window.requestAnimationFrame(update);

}

function drawParticle()
{
context.clearRect(0, 0, canvas.width, canvas.height);
for(var i = 0; i < n; i++)
{
  var circ = particles[i];
  circ.sx += circ.vx;
  circ.sy += circ.vy;

  drawCircle(circ.sx, circ.sy, circRadius);

  // Bounce
  if(circ.sx < 0) circ.vx = -circ.vx;
  if(circ.sy < 0) circ.vy = -circ.vy;
  if(circ.sx > canvas.width) circ.vx = -circ.vx;
  if(circ.sy > canvas.height) circ.vy = -circ.vy;

  // Mouse Push
}
}

function drawCircle(x, y, r) {
  context.fillStyle = circleFill;
  context.beginPath();
  context.arc(x, y, r, 0.0, Math.PI * 2.0);
  context.closePath();
  context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#000';
  context.stroke();
}

var mouseMove = function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
};
} //Closes function


//-------------------------------------------------------------------------------------

function dataart2(){
var n, particles;
var circleFill = "#48a832"; // Recovered
var circRadius = 20;
var mouseRadius = 5;



var confirmed = covid.TotalConfirmed;
var deaths = covid.TotalDeaths;
var recovered = covid.TotalRecovered;
var totalCases = confirmed+deaths+recovered; //add all the data to gain total cases


//turn amount of deaths into a percentage of total
var deathsPec = ((deaths / totalCases) * 100);

var confiremedPec = ((confirmed / totalCases) * 100);

var recoveredPec = ((recovered / totalCases) * 100);




var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );
  init();
}, 100 );

var Particle = function (sx, sy) {
  this.sx = sx;
  this.sy = sy;
  this.vx = 0.0;
  this.vy = 0.0;

  this.vx = Math.random() * 2 - 1;
  this.vy = Math.random() * 2 - 1;
};

function init()
{
/* Resize Canvas */
canvas = document.getElementById("myCanvas2");
context2 = canvas.getContext('2d');

// Create particles
particles = [];
n = Math.floor(recoveredPec); //floor number into whole number
for(var i = 0; i < n; i++)
{
  var sx = Math.random() * canvas.width;
  var sy = Math.random() * canvas.height;
  particles[i] = new Particle(sx, sy);
}

// Render Update
canvas.addEventListener("mousemove", mouseMove);
update();
}

function update()
{
drawParticle();
window.requestAnimationFrame(update);
}

function drawParticle()
{
context2.clearRect(0, 0, canvas.width, canvas.height);
for(var i = 0; i < n; i++)
{
  var circ = particles[i];
  circ.sx += circ.vx;
  circ.sy += circ.vy;

  drawCircle(circ.sx, circ.sy, circRadius);

  // Bounce
  if(circ.sx < 0) circ.vx = -circ.vx;
  if(circ.sy < 0) circ.vy = -circ.vy;
  if(circ.sx > canvas.width) circ.vx = -circ.vx;
  if(circ.sy > canvas.height) circ.vy = -circ.vy;

  // Mouse Push
}
}

function drawCircle(x, y, r) {
  context.fillStyle = circleFill;
  context.beginPath();
  context.arc(x, y, r, 0.0, Math.PI * 2.0);
  context.closePath();
  context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#000';
  context.stroke();
}

var mouseMove = function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
};
} //Closes function

//---------------------------------------------------------------------------


function dataart3(){
var n, particles;
var circleFill = "#ffd000"; //Infected
var circRadius = 10;
var mouseRadius = 5;


var confirmed = covid.TotalConfirmed;
var deaths = covid.TotalDeaths;
var recovered = covid.TotalRecovered;
var totalCases = confirmed+deaths+recovered; //add all the data to gain total cases


//turn amount of deaths into a percentage of total
var deathsPec = ((deaths / totalCases) * 100);

var confiremedPec = ((confirmed / totalCases) * 100);

var recoveredPec = ((recovered / totalCases) * 100);

var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );
  init();
}, 100 );

var Particle = function (sx, sy) {
  this.sx = sx;
  this.sy = sy;
  this.vx = 0.0;
  this.vy = 0.0;

  this.vx = Math.random() * 2 - 1;
  this.vy = Math.random() * 2 - 1;
};

function init()
{
/* Resize Canvas */
canvas = document.getElementById("myCanvas3");
context3 = canvas.getContext('2d');

// Create particles
particles = [];
n = Math.floor(confiremedPec); //floor number into whole number
for(var i = 0; i < n; i++)
{
  var sx = Math.random() * canvas.width;
  var sy = Math.random() * canvas.height;
  particles[i] = new Particle(sx, sy);
}

// Render Update
canvas.addEventListener("mousemove", mouseMove);
update();
}

function update()
{
drawParticle();
window.requestAnimationFrame(update);
}

function drawParticle()
{
context3.clearRect(0, 0, canvas.width, canvas.height);
for(var i = 0; i < n; i++)
{
  var circ = particles[i];
  circ.sx += circ.vx;
  circ.sy += circ.vy;

  drawCircle(circ.sx, circ.sy, circRadius);

  // Bounce
  if(circ.sx < 0) circ.vx = -circ.vx;
  if(circ.sy < 0) circ.vy = -circ.vy;
  if(circ.sx > canvas.width) circ.vx = -circ.vx;
  if(circ.sy > canvas.height) circ.vy = -circ.vy;

  // Mouse Push
}
}

function drawCircle(x, y, r) {
  context.fillStyle = circleFill;
  context.beginPath();
  context.arc(x, y, r, 0.0, Math.PI * 2.0);
  context.closePath();
  context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#000';
  context.stroke();
}

var mouseMove = function (e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
};
} //Closes function


function loadart(){
setTimeout(function() {

	dataart();
	dataart2();
	dataart3();

}, 7000); //Charts wait 4 seconds while the API does a full loop to fill variables
}
