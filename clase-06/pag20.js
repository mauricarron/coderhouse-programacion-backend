const fs = require("fs");

function getFormatedDate() {
  const date = new Date();
  const formatedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  const formatedHour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const fullDate = `${formatedDate} - ${formatedHour}`;

  return fullDate;
}

try {
  const date = getFormatedDate();
  fs.writeFileSync("./fyh.txt", date, "utf-8");

  let data = fs.readFileSync("./fyh.txt");
  console.log(data);
} catch (error) {
  console.error(error);
}
