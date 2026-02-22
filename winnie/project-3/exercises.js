// Part 1: Variables & Strings
// Exercise 1.1: Personal Info
console.log("Exercise 1.1")
let myName = "Winnie"
let age = 20
let major = "Computer Science"

console.log(`Hi, I'm ${myName}! I'm ${age} years old and studying ${major}.`)

// Exercise 1.2: String Manipulation
console.log("Exercise 1.2")
let fullName = "Winnie Lin"
let nameLength = fullName.length
let capName = fullName.toUpperCase()
let lowName = fullName.toLowerCase()

console.log(`Length: ${nameLength}`)
console.log(`Uppercase: ${capName}`)
console.log(`Lowercase: ${lowName}`)
 
// Exercise 1.3: Temperature Converter
console.log("Exercise 1.3")
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}
console.log(`0°C = ${celsiusToFahrenheit(0)}°F`)
console.log(`100°C = ${celsiusToFahrenheit(100)}°F`)

// Exercise 1.4: Greeting Function
console.log("Exercise 1.4")
function greet(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`
}
console.log(greet("Winnie", "morning"))
console.log(greet("Winnie", "evening"))

// Exercise 1.5: Is Even or Odd
console.log("Exercise 1.5")
function isEven(number) {
  return number % 2 === 0
}
console.log(`6 is even: ${isEven(6)}`)
console.log(`7 is even: ${isEven(7)}`)

// Part 2: Arrays
// Exercise 2.1: Array Basics
console.log("Exercise 2.1")
let array = ['ice cream', 'sushi', 'greek yogurt', 'mango', 'watermelon']

console.log(array)
console.log(array[0])
console.log(array[array.length-1])
console.log(array.length)

// Exercise 2.2: Array Manipulation
console.log("Exercise 2.2")
let newArray = []
newArray.push('strawberry')
console.log(newArray)
newArray.push('blueberry')
console.log(newArray)
newArray.push('kiwi')
console.log(newArray)
newArray.pop()
console.log(newArray)

// Exercise 2.3: Double the Numbers
console.log("Exercise 2.3")
let numArray = [1, 2, 3, 4, 5]
let doubledArray = numArray.map(function(num) {
  return num * 2
})
console.log(numArray)
console.log(doubledArray)

// Exercise 2.4: Filter Adults
console.log("Exercise 2.4")
let ageArray = [12, 18, 25, 8, 30, 16, 21]

let over18 = ageArray.filter(function(age) {
  return age >= 18
})
console.log(over18)

// Exercise 2.5: Find Total
console.log("Exercise 2.5")
let providedArray = [10, 20, 30, 40]
let sum1 = providedArray.reduce(function(total, num) {
  return total + num
}, 0)

let sum2 = 0;
for (let i = 0; i < providedArray.length; i++) {
  sum2 += providedArray[i];
}
console.log(sum1);
console.log(sum2)

// Part 3: Objects
// Exercise 3.1: Create a Person Object
const person = {
    name : "Winnie",
    age: 20,
    major: "Computer Science",
    Hobbies: ['food', 'sleep', 'cats'],
    isBoolean: true
};

console.log(person)

// Exercise 3.2: Access and Modify
console.log(person.name)
console.log(person.Hobbies[0])
person.age = 21
person.university = "Cornell University"
console.log(person)

// Exercise 3.3: Object Destructuring
const { name: personName, major: personMajor } = person
console.log(personName, personMajor)

// Exercise 3.4: Array of Objects
const team1 = [
  { name: "Winnie", role: "Developer", year: 2 },
  { name: "Nicole", role: "Designer", year: 2 },
  { name: "Audrey", role: "Designer", year: 2 },
];
console.log(team1)

// Exercise 3.5: Transform Team Data
const team1Names = team1.map(member => member.name)
const designers = team1.filter(member => member.role === "Designer")
console.log(team1Names)
console.log(designers)

// Part 4: Functions & Logic
// Exercise 4.1: Grade Calculator
function getGrade(score) {
  if (score >= 90) return "A"
  if (score >= 80) return "B"
  if (score >= 70) return "C"
  if (score >= 60) return "D"
  return "F"
}
//test
console.log(getGrade(1)) // F

// Exercise 4.2: Find Longest String
function findLongest(strings) {
  return strings.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  , "")
}

console.log(findLongest(["cat", "elephant", "dog"]))

// Exercise 4.3: Count Occurrences
function countLetter(word, letter) {
  return word.split("").filter(char => char === letter).length
}
console.log(countLetter("hello", "l"))
console.log(countLetter("banana", "a"))

// Exercise 4.4: Reverse Array
function reverseArray(values) {
  const result = []
  for (let i = values.length - 1; i >= 0; i--) {
    result.push(values[i])
  }
  return result
}
console.log(reverseArray([6, 7, 8]))

// Exercise 4.5: FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}
fizzBuzz(15)

// Part 5: Putting It Together
// Exercise 5.1: Team Statistics
const team = [
  { name: "Anthony", role: "Lead", yearsExp: 2 },
  { name: "Alex", role: "Developer", yearsExp: 2 },
  { name: "Audrey", role: "Designer", yearsExp: 2 },
  { name: "Eujin", role: "Advisor", yearsExp: 3 },
  { name: "Max", role: "Developer", yearsExp: 1 },
  { name: "Nicole", role: "Designer", yearsExp: 2 },
  { name: "Wendy", role: "Designer", yearsExp: 1 },
  { name: "Winnie", role: "Developer", yearsExp: 2 },
]

const teamNames = team.map(member => member.name)
const developers = team.filter(member => member.role === "Developer")
const avgYears = team.reduce((sum, member) => sum + member.yearsExp, 0) / team.length
const mostExperienced = team.reduce((best, member) =>
  member.yearsExp > best.yearsExp ? member : best
)

const validExperienceCheck = team.map(member => ({
  ...member,
  isExperienced: member.yearsExp >= 4,
}));

console.log(teamNames)
console.log(developers)
console.log(avgYears)
console.log(mostExperienced)
console.log(validExperienceCheck)


// Exercise 5.2: Shopping Cart
const cart = [
  { item: "Laptop", price: 999, quantity: 1 },
  { item: "Mouse", price: 25, quantity: 2 },
  { item: "Keyboard", price: 75, quantity: 1 },
  { item: "Monitor", price: 300, quantity: 2 },
]

function getTotal(cartItems) {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

function getItemNames(cartItems) {
  return cartItems.map(item => item.item)
}

function findExpensive(cartItems, threshold) {
  return cartItems.filter(item => item.price > threshold)
}

function addItem(cartItems, item) {
  return [...cartItems, item]
}

console.log(getTotal(cart))
console.log(getItemNames(cart))
console.log(findExpensive(cart, 100))
console.log(addItem(cart, { item: "newStuff", price: 67, quantity: 67 }))
