interface Point {
  x: number;
  y: number;
}

function logPoint(point: Point) {
  console.log(`x: ${point.x} and y: ${point.y}`);
}

const point1 = { x: 12, y: 22 };
const point2 = { x: 54, y: 43, z: 43 };
const point3 = { x: 54, z: 43 };
const rect = { x: 43, y: 55, width: 534, height: 5433 };
const color = { hex: '#5354f3' };
logPoint(point1);
logPoint(point2);
// logPoint(point3);
logPoint(rect);
// logPoint(color);
