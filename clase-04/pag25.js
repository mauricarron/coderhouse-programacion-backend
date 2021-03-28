function getFormatedDate() {
  const date = new Date();
  const formatedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  const formatedHour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const fullDate = `${formatedDate} - ${formatedHour}`;

  return fullDate;
}

function* getRandomNumber(min = 0, max = 100) {
  let counter = 0;
  while (true) {
    let date = getFormatedDate();
    let randomNumber = Math.round(Math.random() * (max - min) + min);

    yield {
      index: counter++,
      number: randomNumber,
      date: date,
    };
  }
}

const myRandomNumber = getRandomNumber();

console.log(myRandomNumber.next().value);
console.log(myRandomNumber.next().value);
console.log(myRandomNumber.next().value);
