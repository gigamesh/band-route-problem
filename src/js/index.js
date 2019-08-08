import { chunk } from "lodash";
import calcWaypoints from "./calcWaypoints";
import { points500 as coordinates } from "./coordinates";

let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let tick = 1;
let maxCoordWidth, maxCoordHeight, xScale, yScale, cities, timeout, radius;

function initializeMap() {
  tick = 1;
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

  setCanvasDimensions();

  cities = getSortedCities().map((city, i, array) => {
    const circle = new Circle(city.x, city.y);
    const next = array[i + 1] ? array[i + 1] : array[0];

    circle.draw(next);

    return circle;
  });

  // calculate incremental points along the path
  const points = calcWaypoints([...cities, cities[0]], xScale, yScale);
  animate();

  // incrementally draw additional line segments along the path
  function animate() {
    if (tick < points.length - 1) {
      requestAnimationFrame(animate);
    }
    c.beginPath();
    c.moveTo(points[tick - 1].x * xScale, points[tick - 1].y * yScale);
    c.lineTo(points[tick].x * xScale, points[tick].y * yScale);
    c.stroke();

    tick++;
  }
}

function getSortedCities() {
  const chunkSize = coordinates.length / 10;
  const sortedByY = [...coordinates].sort((cityA, cityB) => cityA.y - cityB.y);
  const chunkedArray = chunk(sortedByY, chunkSize).map((chunk, i) => {
    chunk.sort((cityA, cityB) => {
      if (i % 2 !== 0) {
        return cityA.x - cityB.x;
      }
      return cityB.x - cityA.x;
    });
    return chunk;
  });

  return chunkedArray.flat();
}

function setCanvasDimensions() {
  canvas.width = c.canvas.clientWidth;
  canvas.height = canvas.width * 0.6;

  xScale = canvas.width / maxCoordWidth;
  yScale = canvas.height / maxCoordHeight;

  radius = canvas.width * 0.003;
}

function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.color = "#0000ff";

  this.draw = function(next) {
    const currentX = this.x * xScale;
    const currentY = this.y * yScale;

    // current city
    c.beginPath();
    c.arc(currentX, currentY, radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 1;
  };
}

window.addEventListener("resize", () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    initializeMap();
  }, 100);
});

window.addEventListener("load", function() {
  initializeMap();
});
