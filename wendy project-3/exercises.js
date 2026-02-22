        //exercise 1.1: Personal Info
        let name = "Wendy";
        let age = 18;
        let major = "Biological Sciences";
        console.log("Hi, I'm "  + name + "! I'm " + age + " years old and studying " + major + "!");
        console.log(age);

        //exercise 1.2: String Manipulation
        console.log(name.length);
        console.log(name.toUpperCase());
        console.log(name.toLowerCase());

        //exercise 1.3: Temperature Converter
        function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }

        //exercise 1.4: Greeting Function
        function greet(day,name) {
            return "Good " + day + ", " + name + "!";
        }
        console.log(greet("Wendy", "morning"));
        console.log(greet("Nicole", "afternoon"));
        console.log(greet("Max", "evening"));

        //exercise 1.5: Is Even or Odd
        function isEvenOrOdd(num) {
            if (num % 2 === 0) {
                return num + " is even.";
            } else {
                return num + " is odd.";
            }
        }
        console.log(isEvenOrOdd(5));
        console.log(isEvenOrOdd(10));

        //exercise 2.1: Array Basics 
        let bigback = ["sashimi", "sushi", "oysters", "soju", "grapes"];
        console.log(bigback);
        console.log(bigback[0]);
        console.log(bigback[4]);
        console.log(bigback.length);

        //exercise 2.2: Array Manipulation
        bigback.push("ice cream");
        bigback.push("cake");
        bigback.push("boba");
        bigback.pop()
        console.log(bigback);

        //exercise 2.3: Double the Numbers
        const numbers = [1, 2, 3, 4, 5];
        console.log(numbers.map(num => num *2))
        console.log(numbers)

        //exercise 2.4: Filter Adults
        const ages = [12, 18, 25, 30, 16, 21];
        const adults = ages.filter(age => age >= 18);
        console.log(adults);

        //exercise 2.5: Find Total
        const numbers2 = [10, 20, 30, 40];
        let total = 0;
            for (let num of numbers2) {
                total += num;
            }   
        console.log(total);

        //exercise 3.1: Create a Person Object

        const person = {
            name: "Wendy",
            age: 18,
            major: "Biological Sciences",
            hobbies: ["drawing", "baking", "exploring cafes"],
            isStudent: true
        };
        console.log(person);

        //exercise 3.2: Access and Modify
        console.log(person.name);   
        console.log(person.hobbies[1]);
        person.age = 19;    
        console.log(person.age);
        university = "Cornell University";
        person.university = "Cornell University";
        console.log(person.university);
        console.log(person);

        //exercise 3.3: Object Destructuring
        name2 = person.name;
        console.log(name2);
        major2 = person.major;
        console.log(major2);

        //exercise 3.4: Array of Objects
        const team = [
            {name: "Wendy", role: "New Member", year: "Freshman"},
            {name: "Nicole", role: "Member", year: "Sophomore"},
            {name: "Max", role: "New Member", year: "Freshman"}
        ];
        console.log(team);
        

        //exercise 3.5: Transform Team Data
        const teamNames = team.map(member => member.name);
        console.log(teamNames);
        const role = team.filter(member => member.role === "New Member").map(member => member.name);
        console.log(role);

        //exercise 4.1: Grade Calculator
        function calculateGrade(score) {
            if (score >= 90) {
                return "A";
            } else if (score >= 80) {
                return "B";
            } else if (score >= 70) {
                return "C";
            } else if (score >= 60) {
                return "D";
            } else {
                return "F";
            }
        }
        console.log(calculateGrade(95));
        console.log(calculateGrade(85));

        //exercise 4.2: Find Longest String
        function LongestString(strings) {
            let longest = "";
            for (let str of strings) {
                if (str.length > longest.length) {
                    longest = str;
                }
            }
            return longest;
        }
        console.log(LongestString(["cat", "elephant", "dog"]));

        //exercise 4.3: Count Occurrences
        function countLetter(str, letter) {
            let count = 0;
            for (let char of str) {
                if (char === letter) {
                    count++;
                }
            }
            return count;
        }
        console.log(countLetter("hello", "l"));
        console.log(countLetter("banana", "a"));

        //exercise 4.4: Reverse Array
        function reverseArray(arr) {
            let reversed = [];
            for (let i = arr.length-1; i>=0; i--){
                reversed.push(arr[i]);
            }
            return reversed;
        }

        console.log(reverseArray([1, 2, 3, 4, 5]));

        //exercise 4.5: FizzBuzz
        function FizzBuzz(num){

            let result = [];
            for(num1 = 1; num1 <= num; num1++){
            if(num1%3==0 && num1%5==0){
                result.push("FizzBuzz");
            } else if (num1%3==0){
                result.push("Fizz");
            } else if (num1%5==0){
                result.push("Buzz");
            } else {
                result.push(num1);
            }
        }
            return result;
        }

        console.log(FizzBuzz(15));

        //exercise 5.1: Team Statistics
        const team1 = [
            { name: "Anthony", role: "Lead", yearsExp: 2 },
            { name: "Alex", role: "Developer", yearsExp: 2 },
            { name: "Audrey", role: "Designer", yearsExp: 2 },
            { name: "Eujin", role: "Advisor", yearsExp: 3 },
            { name: "Max", role: "Developer", yearsExp: 1 },
            { name: "Nicole", role: "Designer", yearsExp: 2 },
            { name: "Wendy", role: "Designer", yearsExp: 1 },
            { name: "Winnie", role: "Developer", yearsExp: 2 }      
        ];
        console.log(team);

        const roledevelopers = team1.filter(member => member.role === "Developer").map(member => member.name);
        console.log(roledevelopers);
        const avgExp = team1.reduce((total, member) => total + member.yearsExp, 0) / team1.length;
        console.log(avgExp);
        const mostExp = team1.reduce((most, member) => member.yearsExp > most.yearsExp ? member : most);
        console.log(mostExp.name);
        
        const isExperienced = team1.map(person => ({
            ...person,                      //...person keeps all the original properties of the person object
            isExperienced: person.yearsExp >= 4   
            }));

            console.log(isExperienced);

        //exercise 5.2: Shopping Cart
        const cart = [
            { item: "Laptop", price: 999, quantity: 1 },
            { item: "Mouse", price: 25, quantity: 2 },
            { item: "Keyboard", price: 75, quantity: 1 },
            { item: "Monitor", price: 300, quantity: 2 }
        ];

        function calculateTotal(cart) {
            return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
        console.log(calculateTotal(cart));

        function getItemNames(cart) {
            return cart.map(item => item.item);
        }
        console.log(getItemNames(cart));

        function findExpensive(cart, threshold) {
            return cart.filter(item => item.price > threshold);
        }
        console.log(findExpensive(cart, 100));

        function addItem(cart, item) {
            cart.push(item);
        }
        addItem(cart, { item: "Headphones", price: 150, quantity: 1 });
        console.log(cart);