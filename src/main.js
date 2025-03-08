let arr = ["was", "ali", "desamos", "zz", "rty"];
arr.reverse();
const length = arr.length - 1;
const randomIndex = length < 0 ? 0 : Math.floor(Math.random() * length);

console.log(randomIndex);

let element = arr.splice(randomIndex, 1)[0];

console.log(arr);
console.log(element);
arr.push(element);
arr.reverse();
element = arr.splice(randomIndex, 1)[0];
console.log(arr);
console.log(element);
arr.push(element);
console.log(arr);