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
let objarray = [{name: "Anthony", role: "Player", year: "1999"}, ]
