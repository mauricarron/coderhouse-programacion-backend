const arrsOperations = ["6**2", "**", "3**3", "4**", "4**5", "8**2", "4**5"];

const calculateExp = (arr) => {
  if (arrsOperations.includes("**")) {
    const filteredArr = arrsOperations.filter((item) => {
      const splited = item.split("**");
      return (
        splited.length === 2 &&
        splited[0] &&
        splited[1] &&
        !isNaN(splited[0]) &&
        !isNaN(splited[1])
      );
    });

    return filteredArr.map((item) => {
      const splited = item.split("**");
      return splited[0] ** splited[1];
    });
  }
};

console.log(calculateExp(arrsOperations));
