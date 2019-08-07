import { points500 as coordinates } from "./coordinates";

// points500.sort((cityA, cityB) => {
//   const cityACombined = cityA.x + cityA.y;
//   const cityBCombined = cityB.x + cityB.y;
//   return cityACombined - cityBCombined;
// });

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const MAX_WIDTH = 800;

let maxCoordWidth, maxCoordHeight, xScale, yScale, cities;

window.addEventListener("resize", () => {
  setTimeout(() => {
    setCanvasDimensions();
    cities.forEach(city => city.draw());
  }, 0);
});

function initializeMap() {
  setCanvasDimensions();

  [maxCoordWidth, maxCoordHeight] = coordinates.reduce(
    (maxVals, city) => {
      if (city.x > maxVals[0]) {
        maxVals[0] = city.x;
      }
      if (city.y > maxVals[1]) {
        maxVals[1] = city.y;
      }
      return maxVals;
    },
    [0, 0]
  );

  xScale = canvas.width / maxCoordWidth;
  yScale = canvas.height / maxCoordHeight;

  cities = coordinates.map(city => {
    const circle = new Circle(city.x, city.y);
    circle.draw();
    return circle;
  });
}

function setCanvasDimensions() {
  canvas.width = window.innerWidth;
  canvas.height = canvas.width * 0.6;
}

function Circle(x, y) {
  this.radius = 3;
  this.x = x;
  this.y = y;
  this.color = "#0000ff";

  this.draw = function() {
    c.beginPath();
    c.arc(this.x * xScale, this.y * yScale, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 1;
  };
}

initializeMap();
