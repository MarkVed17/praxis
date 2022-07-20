const numList = [1, 3, 55, 22, 44];

function oddAndEvenSumReducer(accumulator, value) {
  if (value % 2 !== 0) {
    return { ...accumulator, oddSum: accumulator.oddSum + value };
  } else {
    return { ...accumulator, evenSum: accumulator.evenSum + value };
  }
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
  oddSum: 0,
  evenSum: 0
});

console.log(oddAndEvenSum);
