const expect = require('chai').expect;

const createGrid = require('../src/grid').createGrid;
const getSize = require('../src/grid').getSize;
const indexToPos = require('../src/grid').indexToPos;
const posToIndex = require('../src/grid').posToIndex;

const getSquares = require('../src/grid').getSquares;

describe('Grid Utilities', () => {
  it('should return (2^n)+1', () => {
    expect(getSize(2)).to.equal(5);
    expect(getSize(3)).to.equal(9);
    expect(getSize(4)).to.equal(17);
    expect(getSize(5)).to.equal(33);
  });

  it('should return an array of proper size with undefined values', () => {
    let grid = createGrid(5);
    expect(grid.length).to.equal(25);
    expect(grid[0]).to.equal(undefined);
    expect(grid[13]).to.equal(undefined);
    expect(grid[24]).to.equal(undefined);
  });

  it('should convert index to position', () => {
    expect(indexToPos(0, 3)).to.deep.equal([0, 0]);
    expect(indexToPos(2, 3)).to.deep.equal([2, 0]);
    expect(indexToPos(3, 3)).to.deep.equal([0, 1]);
    expect(indexToPos(5, 3)).to.deep.equal([2, 1]);
    expect(indexToPos(8, 3)).to.deep.equal([2, 2]);
  });

  it('should convert position to index', () => {
    expect(posToIndex([0, 0], 3)).to.equal(0);
    expect(posToIndex([2, 0], 3)).to.equal(2);
    expect(posToIndex([0, 1], 3)).to.equal(3);
    expect(posToIndex([2, 1], 3)).to.equal(5);
    expect(posToIndex([2, 2], 3)).to.equal(8);
  });
});

describe('Square Midpoint Index Generation', () => {
  it('n=1 grid should generate midpoints correctly', () => {
    expect(getSquares(1, 0)).to.deep.equal([
      4
    ]);
  });
  it('n=2 grid should generate midpoints correctly', () => {
    expect(getSquares(2, 0)).to.deep.equal([
      12
    ]);
    expect(getSquares(2, 1)).to.deep.equal([
      6,  8,
      16, 18
    ]);
  });
  it('n=3 grid should generate midpoints correctly', () => {
    expect(getSquares(3, 0)).to.deep.equal([
      40
    ]);
    expect(getSquares(3, 1)).to.deep.equal([
      20, 24,
      56, 60
    ]);
    expect(getSquares(3, 2)).to.deep.equal([
      10, 12, 14, 16,
      28, 30, 32, 34,
      46, 48, 50, 52,
      64, 66, 68, 70
    ]);
  });
  it('n=4 grid should generate midpoints correctly', () => {
    expect(getSquares(4, 0)).to.deep.equal([
      144
    ]);
    expect(getSquares(4, 1)).to.deep.equal([
      72,  80,
      208, 216
    ]);
    expect(getSquares(4, 2)).to.deep.equal([
      36,  40,  44,  48,
      104, 108, 112, 116,
      172, 176, 180, 184,
      240, 244, 248, 252
    ]);
    expect(getSquares(4, 3)).to.deep.equal([
      18,  20,  22,  24,  26,  28,  30,  32,
      52,  54,  56,  58,  60,  62,  64,  66,
      86,  88,  90,  92,  94,  96,  98,  100,
      120, 122, 124, 126, 128, 130, 132, 134,
      154, 156, 158, 160, 162, 164, 166, 168,
      188, 190, 192, 194, 196, 198, 200, 202,
      222, 224, 226, 228, 230, 232, 234, 236,
      256, 258, 260, 262, 264, 266, 268, 270
    ]);
  });
});
