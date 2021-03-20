const sum = (arr) => {
  let total = 0;
  arr.forEach((num) => {
    if (typeof num === "number") {
      total += num;
    }
  });

  return total;
};

const returnSum = (...num) => {
  const arr = [...num];

  return sum(arr);
};

console.log(returnSum(3, "21", 5, 1, "auto", 9, true, 10));
