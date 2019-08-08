// I can't take credit for this function
// source: https://stackoverflow.com/questions/23939588/how-to-animate-drawing-lines-on-canvas

const INCREMENT = 2;

function calcWaypoints(vertices) {
  const waypoints = [];
  const lastPoint = vertices[vertices.length - 1];

  for (var i = 1; i < vertices.length; i++) {
    const pt0 = vertices[i - 1];
    const pt1 = vertices[i];
    const dx = pt1.x - pt0.x;
    const dy = pt1.y - pt0.y;
    for (let j = 0; j < INCREMENT; j++) {
      const x = pt0.x + (dx * j) / INCREMENT;
      const y = pt0.y + (dy * j) / INCREMENT;
      waypoints.push({
        x,
        y
      });
    }
  }
  waypoints.push(lastPoint);
  return waypoints;
}

export default calcWaypoints;
