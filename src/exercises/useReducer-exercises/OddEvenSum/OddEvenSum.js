const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 }
];

function oddAndEvenSumReducer(accumulator, value) {
  switch (value.type) {
    case "odd":
      return { ...accumulator, oddSum: accumulator.oddSum + value.payload };

    case "even":
      return { ...accumulator, evenSum: accumulator.evenSum + value.payload };

    default:
      return accumulator;
  }
}

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, {
  oddSum: 0,
  evenSum: 0
});

console.log(oddAndEvenSum);
