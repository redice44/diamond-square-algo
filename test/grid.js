const expect = require('chai').expect;

const createGrid = require('../src/grid').createGrid;
const getSize = require('../src/grid').getSize;
const indexToPos = require('../src/grid').indexToPos;
const posToIndex = require('../src/grid').posToIndex;

describe('Grid Utilities', () => {
  it('should return (2^n)+1', () => {
    expect(getSize(2)).to.equal(5);
    expect(getSize(3)).to.equal(10);
    expect(getSize(4)).to.equal(17);
  });

  it('should return an array of proper size with undefined values', () => {
    let grid = createGrid(5);
    expect(grid.length).to.equal(5);
    expect(grid[0]).to.equal(undefined);
    expect(grid[4]).to.equal(undefined);
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
