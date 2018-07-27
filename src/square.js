const calculateMidpointAverage = (square, x, y, edgeLength) =>
  ( square[y][x] +
    square[y][x + edgeLength] +
    square[y + edgeLength][x] +
    square[y + edgeLength][x + edgeLength]
  ) / 4;

const calculateMidpointX = (x, edgeLength) => x + edgeLength / 2;
const calculateMidpointY = (y, edgeLength) => y + edgeLength / 2;

const updateMidpoint = (square, x, y, edgeLength) => {
  const midY = calculateMidpointY(y, edgeLength);
  const midX = calculateMidpointX(x, edgeLength);
  square[midY][midX] = calculateMidpointAverage(square, x, y, edgeLength);
};

const validPosition = (square, x, y) => validXPosition(square[0], x) && validYPosition(square, y);
const validXPosition = (row, x) => x < row.length - 1;
const validYPosition = (column, y) => y < column.length - 1;

module.exports.calculateMidpointAverage = calculateMidpointAverage;
module.exports.calculateMidpointX = calculateMidpointX;
module.exports.calculateMidpointY = calculateMidpointY;
module.exports.updateMidpoint = updateMidpoint;
module.exports.validPosition = validPosition;
