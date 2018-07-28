const x = 0;
const y = 1;

const getSize = (n) => Math.pow( n , 2 ) + 1;
const createGrid = (size) => Array.apply(null, { length: size } );

const indexToPos = (index, size) => [ index % size, Math.floor( index / size ) ];
const posToIndex = (pos, size) => pos[y] * size + pos[x];

module.exports.createGrid = createGrid;
module.exports.getSize = getSize;
module.exports.indexToPos = indexToPos;
module.exports.posToIndex = posToIndex;
