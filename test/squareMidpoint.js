const expect = require('chai').expect;

const calculateMidpointAverage = require('../src/square').calculateMidpointAverage;
const calculateMidpointX = require('../src/square').calculateMidpointX;
const calculateMidpointY = require('../src/square').calculateMidpointY;
const updateMidpoint = require('../src/square').updateMidpoint;
const validPosition = require('../src/square').validPosition;

const square_3x3 = {
  square: [
    [1, null, 2],
    [null, null, null],
    [2, null, 3]
  ],
  startX: 0,
  startY: 0,
  edgeLength: 2,
  midpointAverage: 2,
  midpointX: 1,
  midpointY: 1
};

const square_5x5 = {
  square: [
    [1, null, null, null, 5],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [3, null, null, null, 7]
  ],
  startX: 0,
  startY: 0,
  edgeLength: 4,
  midpointAverage: 4,
  midpointX: 2,
  midpointY: 2
};

const squareOffset_5x5 = {
  square: [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, 4, null, 6],
    [null, null, null, null, null],
    [null, null, 3, null, 7]
  ],
  startX: 2,
  startY: 2,
  edgeLength: 2,
  midpointAverage: 5,
  midpointX: 3,
  midpointY: 3
};

const describeSquare = (squareData) => {
  const { square, startX, startY, edgeLength, midpointAverage, midpointX, midpointY } = squareData;
  const rowLength = square[0].length;
  const colLength = square.length;

  describe(`Square ${rowLength}x${colLength} Start: (${startX}, ${startY})`, () => {
    describe('Constraints', () => {
      it(`should validate position (${startX}, ${startY})`, () => {
        expect(validPosition(square, startX, startY)).to.equal(true);
      });

      it(`should invalidate position (${rowLength}, ${startY})`, () => {
        expect(validPosition(square, rowLength, startY)).to.equal(false);
      });

      it(`should invalidate position (${startX}, ${colLength})`, () => {
        expect(validPosition(square, startX, colLength)).to.equal(false);
      });
    });

    describe('Midpoint', () => {
      describe('Average', () => {
        it(`should return ${midpointAverage}`, () => {
          expect(calculateMidpointAverage(square, startX, startY, edgeLength)).to.equal(midpointAverage);
        });
      });

      describe('Position', () => {
        it(`should be (${midpointX}, ${midpointY})`, () => {
          expect(calculateMidpointX(startX, edgeLength)).to.equal(midpointX);
          expect(calculateMidpointY(startY, edgeLength)).to.equal(midpointY);
        });
      });

      describe('Update', () => {
        it(`should update midpoint to ${midpointAverage}`, () => {
          updateMidpoint(square, startX, startY, edgeLength);
          expect(square[calculateMidpointY(startY, edgeLength)][calculateMidpointX(startX, edgeLength)]).to.equal(midpointAverage);
        });
      });
    });
  });
};

describeSquare(square_3x3);
describeSquare(square_5x5);
describeSquare(squareOffset_5x5);
