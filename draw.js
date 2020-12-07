var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/*
var controler = setInterval(draw, 100);
function draw() {
  var rad = Math.floor(Math.random() * 50);
  var maxX = 400 - (rad * 2);
  var maxY = 200 - (rad * 2);
  var xVal = Math.floor(Math.random() * maxX) * rad;
  var yVal = Math.floor(Math.random() * maxY) * rad;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(xVal, yVal, rad, 0, 2 * Math.PI);
  ctx.stroke();
}
*/

function drawO() {
  var rad = Math.floor(Math.random() * 50) + 1;
  var xPos = Math.floor(Math.random() * (canvas.width - (rad * 2))) + rad;
  var yPos = Math.floor(Math.random() * (canvas.height - (rad * 2))) + rad;
  //var xPos = (Math.floor(Math.random() * 400 - (rad * 2))) + rad;
  //var yPos = (Math.floor(Math.random() * 400 - (rad * 2))) + rad;
  ctx.beginPath();
  ctx.arc(xPos, yPos, rad , 0, 2 * Math.PI);
  ctx.stroke();
}

function drawX() {
  var side = Math.floor(Math.random() * 50) + 1;
  var xCorn = Math.floor(Math.random() * (canvas.width - side));
  var yCorn = Math.floor(Math.random() * (canvas.height - side));
  ctx.beginPath();
  ctx.strokeRect(xCorn, yCorn, side, side);
  ctx.stroke();
}

/* Instructions for ball bouncing project
Make a ball at (0, 0), it's center should be one radius from each side
It should then move down and right
When it hits a wall, it's movment should then reverse
(x +, y+), (x+, y-), (x-, y-), (x-, y+), (x+, y+)
Make sure to test each direction each time
inside "loop" , need to check circles location
check circles direction and location
direction (add 1 for +, subtract 1 for -, )
Eg: if(circle + rad + 1 > width)
flip xVal
 */
function ballBounce() {
  var int = setInterval();
  //need to track location, direction, radius
}

//fancy loop getaround for animation
function circles() {
  // the if for bouncing balls will deal with position
  var int = setInterval(step, 100);
  var counter = 0;
  function step() {
    if ((counter %20) == 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log("----------------------------------RESET----------------------------------");
    }
    if ((counter % 2) == 0) {
      drawO();
      console.log("circle");
    } else {
      drawX();
      console.log("square");
    }
    counter ++;
  }
}

circles();
