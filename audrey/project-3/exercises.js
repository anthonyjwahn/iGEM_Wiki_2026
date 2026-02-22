//Exercise 1.1 - Personal Info
let name = "Audrey";
let age = "19";
let major = "Chemical Engineering";

function introduce(name, age, major){
    console.log(`Hi, I'm ${name}! I'm ${age} years old and studying ${major}`);
}

//Exercise 1.2 - String Manipulation
let fullname = "Audrey Fu";
function stringManipulate(fullname){
console.log(fullname.length);
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
}

//Exercise 1.3 - Temperature Converter
let temperatureC = 0;
function celsiusToFahrenheit(temperatureC){
    return temperatureC*(9/5) + 32;
}

//Exercise 1.4 - Greeting Function
let timeOfDay = "night";
function greet(name, timeOfDay){
        console.log(`Good ${timeOfDay}, ${name}!`);
    }

//Exercise 1.5 - Even or Odd
let number = 0;
function isEven(number){
    if (number%2 === 0){
        return true;
    }
    else {
        return false;
    }
}

//Exercise 2.1 - Array Basics
const favFoods = ["boba", "ninja chicken popcorn chicken", "beef tripe", "salmon sashimi", "green seedless grapes"]
function printFoods(favFoods){
console.log(favFoods);
console.log(favFoods[0]);
console.log(favFoods[4]);
console.log(favFoods.length);
}

//Exercise 2.2 - Array Manipulation
const array = [];
let itemOne = "a";
let itemTwo = "b";
let itemThree = "c";
function pushPop(array, itemOne, itemTwo, itemThree){
    array.push(itemOne);
    console.log(array);
    array.push(itemTwo);
    console.log(array);
    array.push(itemThree);
    console.log(array);
    array.pop();
    console.log(array);
}

//Exercise 2.3 - Double the Numbers
const arrayTwo = [1, 2, 3, 4, 5];
const doubled = arrayTwo.map((num => num * 2));
console.log(doubled);

//Exercise 2.4 - Filter Adults
const ages = [12, 18, 25, 8, 30, 16, 21];
const adult = ages.filter(num => num >= 18)
console.log(adult);

//Exercise 2.5 - Find Total
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((one, two) => one + two,0);
console.log(sum);

//Exercise 3.1 - Create a Person Object
const person = {
    name: "Audrey",
    age:  19,
    major: "Chemical Engineering",
    hobbies: ["napping", "baking", "drinking boba"],
    isStudent: false
}

//Exercise 3.2 - Access and Modify
console.log(person.name);
console.log(person.hobbies[0]);
person.age = 67;
console.log(person.age);
person.university = "Cornell University";
console.log(person);

//Exercise 3.3 - Object Destructuring
let nameD = person.name;
let collegeD = person.university;
console.log(nameD, collegeD);

//Exercise 3.4 - Array of Objects
const wiki = [
    {name: "Audrey", role: "Wiki Member", year: 2028},
    {name: "Nicole", role: "Wiki Member", year: 2028},
    {name: "Winnie", role: "Wiki Member", year: 2027}
];

//Exercise 3.5 - Transform Team Data
const names = wiki.map((member) => member.name);
const role = wiki.filter(member => member.role === "Wiki Member")
.map(member => member.name);
console.log(names);
console.log(role);

//Exercise 4.1 - Grade Calculator
let grade = 0;
let letterGrade = "A";
function getGrade(grade){
    if (grade < 0 || grade > 100){
        letterGrade = "Not a valid score";
    } else if (grade >= 90){
        letterGrade = "A";
    } else if (grade >= 80) {
        letterGrade = "B";
    } else if (grade >= 70) {
        letterGrade = "C";
    } else if (grade >= 60){
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }
    console.log(letterGrade);
}

//Exercsie 4.2 - Find Longest String
const stringArray = ["a", "b", "c"];
function findLongest(stringArray){
    let longest = "";
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i].length > longest.length){
            longest = stringArray[i];
        }
    }
    console.log(longest);
}

//Exercise 4.3 - Count Occurences
const string = "boop";
let letter = "a";
function countLetter(string, letter){
    let counter = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === letter){
            counter = counter + 1;
        }
    }
    console.log(counter);
}

//Exercise 4.4 - Reverse Array
const forwardArray = ["", "", ""];
function reverseArray(forwardArray){
     const backwardArray = [];
    for (let i = forwardArray.length - 1; i >= 0; i-- ){
      backwardArray.push(forwardArray[i]);
    }
    console.log(backwardArray);
  }

  reverseArray(forwardArray);
    
//Exercise 4.5 - FizzBuzz
let numero = 0;
function fizzBuzz(numero){
    for (let i = 1; i <= numero; i++ ){
        if (i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }
       else if (i%3 === 0){
            console.log("Fizz");
        } else if (i%5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//Exercise 5.1 - Team Statistics 
const team = [
    {name: "Anthony", role: "Lead", yearsExp: 2},
    {name: "Alex", role: "Developer", yearsExp: 2},
    {name: "Audrey", role: "Designer", yearsExp: 2},
    {name: "Eujin", role: "Advisor", yearsExp: 4},
    {name: "Max", role: "Developer", yearsExp: 1},
    {name: "Nicole", role: "Designer", yearsExp: 2},
    {name: "Wendy" ,role: "Designer", yearsExp: 1},
    {name: "Winnie", role: "Developer", yearsExp: 2}
];
//Get an array of all names
const wikiNames = team.map(member => member.name);
console.log(wikiNames);

//Get an array of only developers
const developers = team.filter(member => member.role === "Developer")
.map(member => member.name);
console.log(developers);

//Calculate average years of experience
const totalExp = team.reduce((total,member) => total + member.yearsExp, 0);
const avgExp = totalExp/team.length;
console.log(avgExp);

//Find the person with the most experience
function mostExp(team){
    let highestExp = 0;
    let highestExpName = "";
    for (i = 0; i < team.length; i++){
         if (team[i].yearsExp > highestExp){
            highestExp = team[i].yearsExp
            highestExpName = team[i].name;
        }
    }
    console.log(highestExpName);
}
//Create a new array where each object also has isExperienced (true if 4+ years)
const wikiExp = team.filter(member => member.yearsExp >= 4)
.map(member => ({
      ...member,
      isExperienced: true
  }))
console.log(wikiExp);

//Exercise 5.2 - Shopping Cart
const cart = [
    {item: "Laptop", price: 999, quantity: 1},
    {item: "Mouse", price: 25, quantity: 2},
    {item: "Keyboard", price: 75, quantity: 1},
    {item: "Monitor", price: 300, quantity: 2}
];

//getTotal(cart)
function getTotal(cart){
    const total = cart.reduce((current, item) => (current + (item.price * item.quantity)), 0);
    console.log(total);
}

//getItemNames array of just item names
function getItemNames(cart){ 
    const itemNames = cart.map(member => member.item);
    console.log(itemNames);
}
//findExpensive - items with price above threshold
function findExpensive(cart, threshold){
    const expensive = cart.filter(member => member.price >= threshold);
    console.log(expensive);
}

//addItem - returns a new cart with new item added
function addItem(cart,item){
    const newCart = [...cart, item];
    console.log(newCart);
}


