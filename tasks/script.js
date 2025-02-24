// 1st task
let name = "saqib";
let age = 19;

console.log(name);
console.log(age);

// 2nd task
let a = 10;
let b = 20;

// addition
console.log(a + b);
// subtraction
console.log(a - b);
// multiplication
console.log(a * b);
// divison
console.log(a / b);

// 3rd task
let number = prompt("Enter you Number");
if (number % 2 === 0) {
  console.log("its even number");
} else {
  console.log("its odd number");
}

if (number < 0) {
  console.log("Negative Number");
} else if (number > 0) {
  console.log("Positive Number");
} else if (number === "0") {
  console.log("Zero Number");
}

// 4th task
for (let i = 0; i < 11; i++) {
  console.log(i);
}

let n = 1;

while (n <= 20) {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
}

// 5th task

addition = (e, f) => {
  return e + f;
};

let result = addition(10, 100);
console.log(result);

let strFn = (str) => {
  return str.length;
};
console.log(strFn("Saqib"));

// 6th task

let fruits = ["apple", "banana", "peach", "pear"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
let updatedFruits = fruits.push("mango");
console.log(fruits);

// 7th task
