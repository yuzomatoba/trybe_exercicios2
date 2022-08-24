const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrays) {
  // const sum = (acc, curr) => acc + curr;
  // const result = arrays.reduce(sum);
  // return result;

   return arrays.reduce((acc, curr) => acc.concat(curr)
, [] );
}

console.log(flatten(arrays));

