const x = 0;
const y = 1;

const getSize = (n) => Math.pow( 2, n ) + 1;
const createGrid = (size) => Array.apply(null, { length: size * size } );

const indexToPos = (index, size) => [ index % size, Math.floor( index / size ) ];
const posToIndex = (pos, size) => pos[y] * size + pos[x];

const squareMidpoints = (size) => {
  const midpoint = ( size * size - 1 ) / 2;
  const step = Math.log2( size - 1 ) - 1;
  const results = [midpoint];

  if ( step > 0 ) {
    results.push(...nextSquareMidpoints(midpoint, size, step));
  }

  return results;
};

const nextSquareMidpoints = (index, size, step) => {
  const results = [];
  results.push(index - size * step - step);
  results.push(index - size * step + step);
  results.push(index + size * step - step);
  results.push(index + size * step + step);

  if ( step > 1 ) {
    const subResults = [];

    results.forEach((resultIndex) => {
      subResults.push(...nextSquareMidpoints(resultIndex, size, step - 1));
    });

    results.push(...subResults);
  }

  return results;
};

module.exports.createGrid = createGrid;
module.exports.getSize = getSize;
module.exports.indexToPos = indexToPos;
module.exports.posToIndex = posToIndex;
module.exports.squareMidpoints = squareMidpoints;
