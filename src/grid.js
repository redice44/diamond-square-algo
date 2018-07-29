const getSize = (n) => Math.pow( 2, n ) + 1;
const createGrid = (size) => Array.apply(null, { length: size * size } );
const indexToPos = (index, size) => [ index % size, Math.floor( index / size ) ];
const posToIndex = (pos, size) => pos[1] * size + pos[0];

const getAllSquares = (n) => {
  const results = [];

  for ( let i = 0; i < n; i++ ) {
    results.push(...getSquares(n, i));
  }

  return results;
};

const getSquares = (n, step) => {
  const size = Math.pow( 2, n ) + 1;
  const jumpBase = Math.pow( 2, n - step );
  const offsetBase = Math.pow( 2, n - 1 - step );
  const offset = offsetBase * size + offsetBase;
  const loop = Math.pow( 2, step );
  const results = [];

  for (let row = 0; row < loop; row++) {
    for (let col = 0; col < loop; col++) {
      results.push( offset + row * size * jumpBase + col * jumpBase );
    }
  }

  return results;
};

module.exports.createGrid = createGrid;
module.exports.getSize = getSize;
module.exports.indexToPos = indexToPos;
module.exports.posToIndex = posToIndex;

module.exports.getAllSquares = getAllSquares;
module.exports.getSquares = getSquares;
