const numbers = [];

for (let number of Array.from({length:100}, (_,index) => index + 1)) {
  numbers.push(number);
  console.log(number);
}


