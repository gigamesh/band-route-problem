import { chunk } from "lodash";
import { points200 as coordinates } from "./coordinates";

coordinates.sort((cityA, cityB) => {
  const cityACombined = cityA.x + cityA.y;
  const cityBCombined = cityB.x + cityB.y;
  return cityACombined - cityBCombined;
});

function getSortedCities() {
  const sortedByY = [...coordinates].sort((cityA, cityB) => cityA.y - cityB.y);
  const chunkedArray = chunk(sortedByY, 20).map((chunk, i) => {
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

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

let maxCoordWidth, maxCoordHeight, xScale, yScale, cities, timeout, radius;

function initializeMap() {
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

    requestAnimationFrame(() => {
      circle.draw(next);
    });

    return circle;
  });
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
    const nextX = next.x * xScale;
    const nextY = next.y * yScale;

    // current city
    c.beginPath();
    c.arc(currentX, currentY, radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.lineWidth = 1;

    // line to next city
    c.beginPath();
    c.moveTo(currentX, currentY);
    c.lineTo(nextX, nextY);
    c.stroke();
  };
}

window.addEventListener("resize", () => {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    setCanvasDimensions();

    cities.forEach((city, i) => {
      const next = cities[i + 1] ? cities[i + 1] : cities[0];
      city.draw(next);
    });
  }, 100);
});

window.addEventListener("load", function() {
  initializeMap();
});
