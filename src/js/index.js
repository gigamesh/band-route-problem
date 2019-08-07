import { chunk } from "lodash";
import { points40 as coordinates } from "./coordinates";

function getSortedCities() {
  let xIndex = 0;
  let yIndex = 0;
  const citiesCache = {};
  const citiesArray = [...coordinates].map((city, i) => {
    // save city to cache with flag to check if it has been sorted yet
    city.sorted = false;
    citiesCache[i] = city;
    city.id = i;
    return city;
  });

  const sortedByX = [...citiesArray].sort((cityA, cityB) => cityA.x - cityB.x);
  const sortedByY = [...citiesArray].sort((cityA, cityB) => cityA.y - cityB.y);

  // start from city with the lowest X value and mark it as sorted in the citiesCache
  const finalSort = [sortedByX[xIndex++]];
  citiesCache[sortedByX[xIndex].id].sorted = true;

  console.log(sortedByX, sortedByY);

  while (finalSort.length !== citiesArray.length) {
    const nextXDistance = sortedByX[xIndex]
      ? sortedByX[xIndex].x - sortedByX[xIndex - 1].x
      : Number.POSITIVE_INFINITY;
    const nextYDistance = sortedByY[yIndex + 1]
      ? sortedByY[yIndex + 1].y - sortedByY[yIndex].y
      : Number.POSITIVE_INFINITY;

    console.log(nextXDistance, nextYDistance);

    if (nextXDistance <= nextYDistance) {
      if (!citiesCache[sortedByX[xIndex].id].sorted) {
        finalSort.push(sortedByX[xIndex]);
        citiesCache[sortedByX[xIndex].id].sorted = true;
      }
      xIndex++;
    } else {
      if (!citiesCache[sortedByY[yIndex].id].sorted) {
        finalSort.push(sortedByY[yIndex]);
        citiesCache[sortedByY[yIndex].id].sorted = true;
      }
      yIndex++;
    }
  }

  console.log(citiesCache);

  return finalSort;
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

  cities = getSortedCities();
  setCanvasDimensions();

  cities = cities.map((city, i) => {
    const circle = new Circle(city.x, city.y);
    const next = cities[i + 1] ? cities[i + 1] : cities[0];

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
