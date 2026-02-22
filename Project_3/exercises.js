//Part 1: Variables and Strings

//1.1
const name = "Alex";
const age = 19;
const major = "Chemistry";
console.log(`Hello, I'm ${name}! I'm ${age} years old and studying ${major}`);

//1.2
const fname = "Alex Peng";
console.log(fname.length);
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());

//1.3
function celsiusToFahrenheit (temp) {
    let fahren = (temp * 9/5) + 32;
    console.log(fahren);
}
console.log("Celsius: 4");
celsiusToFahrenheit(4);

//1.4
function greet (name, time) {
    console.log(`Good ${time}, ${name}!`);
}
greet("Alex", "morning");

//1.5
function isEven (number){
    if (number%2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(3));
console.log(isEven(8));

//Part 2: Arrays

//2.1
const foods = ["小笼包", "Pomelo", "Coffee Ice Cream", "芋頭包", "Tiramisu"];
console.log(foods);
console.log(foods[0]);
console.log(foods[4]);
console.log(foods.length);

//2.2
let array = [];
console.log(array);
array.push("1");
console.log(array);
array.push("2");
console.log(array);
array.push("3");
console.log(array);
array.pop();
console.log(array);

//2.3
let array2 = [1, 2, 3, 4, 5];
console.log(array2);
let double = array2.map((num) => num*2);
console.log(double);

//2.4
let array3 = [12, 18, 25, 8, 30, 16, 21];
let array4 = array3.filter(num => num >= 18);
console.log(array4);

//2.5
const array5 = [10, 20, 30, 40]
let sum = 0;
for (let i = 0; i < array5.length; i++){
    sum = sum + array5[i];
}
console.log(sum);

//Part 3: Objects

//3.1
const self = {
    name: "Alex",
    age: 19,
    major: "Chemistry",
    hobbies: ["Badminton","Exploring Nature"],
    isStudent: true
};
console.log(self);

//3.2
console.log(self.name);
console.log(self.age);
self.age = 20;
self.university = "Cornell";
console.log(`New Age: ${self.age}, University: ${self.university}`);

//3.3
let self_name = self.name;
let self_major = self.major;
console.log(`Name: ${self_name}, Major: ${self_major}`);

//3.4
let objarray = [{name: "Anthony", role: "Team Lead", year: "1999"}, {name: "Eujin", role: "Rejected", year: "1972"}, {name: "George", role: "Spectator", year: "2005"}]

//3.5
newArray = objarray.map(object => object.name);
roleArray = objarray.filter(object => object.role === "Rejected");
console.log(newArray);
console.log(roleArray);

//Part 4: Functions & Logic

//4.1 
function gcalc (grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80 && grade < 90) {
        return "B";
    } else if (grade >= 70 && grade < 80) {
        return "C";
    } else if (grade >= 60 && grade < 70) {
        return "D";
    }
}
console.log(gcalc(79));

//4.2
function findLongest (array) {
    var length = 0;
    var longest;
    for (i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            var length = array[i].length;
            var longest = array[i];
        }
    }
    return longest;
}
let stringArray = ["cat", "elephant", "dog"];
console.log(findLongest(stringArray));


//4.3
function count (string, letter) {
    let char = letter;
    let count = 0;
    for (j = 0; j < string.length; j++) {
        if (char === string.charAt(j)) {
            count++;
        }
    }
    return count;
}
console.log(count("hello", "l"));
console.log(count("banana", "a"));  

//4.4 
function reverseArray (array, newArray) {
    let count = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        newArray[count] = array[i];
        count++;
    }
}
let secondArray = [];
reverseArray([1, 2, 3], secondArray);
console.log(secondArray);

//4.5
function fizzBuzz (number) {
    let output = "";
    for (i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            output += "Fizz ";
        } else if (i % 5 === 0) {
            output += "Buzz ";
        } else if (i % 3 === 0 && i % 5 === 0) {
            output += "FizzBuzz";
        } else {
            output += i + " ";
        }
    }
    console.log(output.trim());
}
fizzBuzz(19);

//Part 5: Putting it together

//5.1

const team = [
  { name: "Anthony", role: "Lead", yearsExp: 2 },
  { name: "Alex", role: "Developer", yearsExp: 2 },
  { name: "Audrey", role: "Designer", yearsExp: 2 },
  { name: "Eujin", role: "Advisor", yearsExp: 3 },
  { name: "Max", role: "Developer", yearsExp: 1 },
  { name: "Nicole", role: "Designer", yearsExp: 2 },
  { name: "Wendy", role: "Designer", yearsExp: 1 },
  { name: "Winnie", role: "Developer", yearsExp: 2 }
];

function nameArray (array) {
    newArray = array.map(object => object.name);
    console.log(newArray);
}

function roleSearch (array) {
    newArray = array.filter(object => object.role === "Developer");
    console.log(newArray);
}

function avgXp (array) {
    newArray = array.map(object => object.yearsExp);
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += newArray[i];
    }
    let avg = sum/array.length;
    console.log(avg);
}

function Xp (array) {
    let a = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i].yearsExp > a.yearsExp) {
            a = array[i];
        }
    }
    console.log(a);
}

isExperienced = team.map(object => {
    return {
        ...object,
        isExperienced: object.yearsExp >= 4
    };
});

nameArray(team);
roleSearch(team);
avgXp(team);
Xp(team);
console.log(isExperienced);

//5.2
const cart = [
  { item: "Laptop", price: 999, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Keyboard", price: 75, quantity: 1 },
  { item: "Monitor", price: 300, quantity: 2 }
];

function getTotal (array) {
    sum = array.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);
    console.log(sum);
}

function getItemNames (array) {
    newArray = array.map(object => object.item);
    console.log(newArray);
}

function findExpensive (array, lb) {
    newArray = array.filter(item => item.price > lb);
    console.log(newArray);
}

function addCart (array, newItem) {
    return [...cart, newItem];
}
getTotal(cart);
getItemNames(cart);
findExpensive(cart, 100);
console.log(addCart(cart, {item: "Stand", price: 40, quantity: 1}));
