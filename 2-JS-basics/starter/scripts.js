// *******************************
// Variables and data types
// *******************************
//
// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
// //undefined since a value is not assigned
//
// job = 'Teacher';
// console.log(job);
//
// //can't start a variable name with numbers
// var 3years = 3;
//
// //acceptable variable naming conventions
// var _3years = 3;
// var $3years = 3;
//
// *******************************
// Variable mutation and type coercion
// *******************************
//
// var firstName = 'John';
// var age = 28;
//
// // Type Coercion
// console.log(firstName + ' ' + age);
// John 28 will be printed as a string due to type coercion although var age is equal to a number
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// //Variable mutation
// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last Name?')
// console.log(firstName + ' ' + lastName);
//
// *******************************
// Basic Operators
// *******************************
//
// // Basic Operators
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
//
// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
//
// console.log(yearJohn);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// //is ageJohn > ageMark?
// console.log(johnOlder);
// //output false
//
// //typeof Operator
// console.log(typeof johnOlder);
// //output is boolean
// console.log(typeof ageJohn);
// //output is a number
// console.log(typeof 'Mark is older than John');
// //output is a string
// var x;
// console.log(typeof x);
// //undefined because var x is not defined with a value
//
// *******************************
// Basic Operators
// *******************************

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
//
// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);
//
// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
//
// // Multiple Assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y); // will show as 26 26
//
// // More Operators
// // x = x * 2;
// x *= 2;
// console.log(x);
// x += 10; //x = x + 10
// console.log(x);
// // x = x + 1;
// // x += 1;
// x++;
// console.log(x);

// *******************************
// CODING CHALLENGE 1
// *******************************

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
//
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

// var marksMass = 72 // kg
// var marksHeight = 1.7 // meters
//
// var johnsMass = 74 // kg
// var johnsHeight = 1.9 // meters
//
// var marksBMI = marksMass / (marksHeight * marksHeight);
// console.log('Mark\'s BMI: ' + marksBMI); // BMI = 24.91
//
// var johnsBMI = johnsMass / (johnsHeight * johnsHeight);
// console.log('John\'s BMI: ' + johnsBMI); // 20.50
//
// var higherBMI = marksBMI > johnsBMI
// console.log(higherBMI); //true
//
// console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);
// // output: Is Marks BMI higher than Johns? true
//
// // *******************************
// // If / Else Statements
// // *******************************
//
// var firstName = 'John';
// var civilStatus = 'single';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var isMarried = true;
//
// if (isMarried ) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }
//
// var marksMass = 72 // kg
// var marksHeight = 1.7 // meters
//
// var johnsMass = 74 // kg
// var johnsHeight = 1.9 // meters
//
// var marksBMI = marksMass / (marksHeight * marksHeight);
// // console.log('Mark\'s BMI: ' + marksBMI); // BMI = 24.91
//
// var johnsBMI = johnsMass / (johnsHeight * johnsHeight);
// // console.log('John\'s BMI: ' + johnsBMI); // 20.50
//
// // var higherBMI = marksBMI > johnsBMI
// console.log(higherBMI); //true
//
// console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);
// // output: Is Marks BMI higher than Johns? true
//
// if (marksBMI > johnsBMI) {
//   console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//   console.log('John\'s BMI is higher than John\'s.');
// }
//
// // *******************************
// // Boolean Logic
// // *******************************
//
// var firstName = 'John';
// var age = 16;
//
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20 ) { // Between 13 and 20 === >= 13 AND age < 20
//   console.log(firstName + ' is a teenager.');
// } else {
//   console.log(firstName + ' is a man.');
// }

// *******************************
// The Ternary (Three Parts) Operator and Switch Statements
// *******************************

// var firstName = 'John';
// var age = 20;
//
// // Ternary Operator
// age >= 18 ? console.log(firstName  + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

// Switch  Statement
// var job = 'instructor';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber in Lisbon');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
// }


// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20 ) { // Between 13 and 20 === >= 13 AND age < 20
//   console.log(firstName + ' is a teenager.');
// } else {
//   console.log(firstName + ' is a man.');
// }

// var firstName = 'John';
// var age = 20;
//
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man.');
//     break;
//   default:
//     console.log(firstName + ' is a man.');
// }

// *******************************
// Truthy and Falsy values and equality operators
// *******************************

// faly values: undfined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;
//
// height = 24;
//
// if (height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }
//
// // Equality Operators
//
// if (height == "24") {
//   console.log('The == operator does type coercion');
// }

// *******************************
// CODING CHALLENGE 2
// *******************************

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
//
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
//
// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

// var johnsTeamAvg = 11
// console.log('John\'s Team Average: ' + johnsTeamAvg);
//
// var mikesTeamAvg = 14
// console.log('Mike\'s Team Average: ' + mikesTeamAvg);
//
// var marysTeamAvg = 12
// console.log('Mary\'s Team Average: ' + marysTeamAvg);
//
// if (johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg) {
//   console.log('John\'s Team Has The Highest Team Avg. Average: ' + johnsTeamAvg);
// } else if (mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg) {
//   console.log('Mike\'s Team Has The Highest Team Avg. Average: ' + mikesTeamAvg);
// } else if (marysTeamAvg > johnsTeamAvg && marysTeamAvg > mikesTeamAvg) {
//   console.log('Mary\'s Team Has The Highest Team Avg. Average: ' + marysTeamAvg);
// } else {
//   console.log('There Is A Draw');
// }

// *******************************
// Functions
// *******************************

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }
//
// calculateAge(1990);
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1990);
//
// console.log(ageJohn, ageMike, ageJane);
//
// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year)
//   var retirement = 65 - age;
//
//   if (retirement > 0) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired.');
//   }
// }
//
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

// *******************************
// Function Statements and Expressions
// *******************************

// Function Declaration
// function whatDoYouDo(job, firstname) {
//
// }

// // Function Expression (Produce Immediate Results)
// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives a cab in Lisbon.'
//     case 'designer':
//       return firstName + ' designs beautiful websites.'
//     default:
//       return firstName + ' does something else';
//   }
// }
//
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));
//
// // *******************************
// // Arrays
// // *******************************
//
// // Initialize New Array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
//
// console.log(names[2]);
// console.log(names.length);
//
// // Mutate Array Data
// names[1] = 'Ben';
// names[names.length] = 'Mary'
// console.log(names);
//
// // Different Data Types
// var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];
//
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
//
//
// john.pop();
// john.pop();
// john.shift();
// console.log(john);
//
// console.log('Index Number: ' + john.indexOf(22));
//
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

// *******************************
// CODING CHALLENGE 3
// *******************************

// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
//
// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
//
// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).
//
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// // *******************************
// // My Solution
// // *******************************
// var firstRestaurant = 124;
// var secondRestaurant = 48;
// var thirdRestaurant = 268;
//
// function tipCalculator (bill) {
//
//   if (bill < 50) {
//     return bill * (20/100);
//   } else if (bill >= 50 && bill < 50) {
//     return bill * (15/100);
//   } else {
//     return bill * (10/100);
//   }
// }
//
// var firstRestaurantTip = tipCalculator(firstRestaurant);
// var secondRestaurantTip = tipCalculator(secondRestaurant);
// var thirdRestaurantTip = tipCalculator(thirdRestaurant);
//
// tipsArray = []
// tipsArray.push(tipCalculator(firstRestaurant), secondRestaurantTip, thirdRestaurantTip)
//
// console.log(tipsArray);
//
// var finalAmount1 = firstRestaurantTip + firstRestaurant
// var finalAmount2 = secondRestaurantTip + secondRestaurant
// var finalAmount3 = thirdRestaurantTip + thirdRestaurant
//
// finalAmountArray = []
// finalAmountArray.push(finalAmount1, finalAmount2, finalAmount3)
//
// console.log(finalAmountArray);
//
// // *******************************
// // CODING CHALLENGE SOLUTION
// // *******************************
//
// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return percentage * bill;
// }
//
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
//
// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] = tips[2]];
//
// console.log(tips, finalValues);

// // *******************************
// // Objects and Properties
// // *******************************

// // Object Literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
//
// // Accessing Objects
// console.log(john.firstName); // 'John'
// console.log(john['family']); // ['Jane', 'Mark', 'Bob', 'Emily']
// var x = 'birthYear';
// console.log(john[x]); // 1990
//
// // Object Mutatation
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//   // output:
//   // family: [ 'Jane', 'Mark', 'Bob', 'Emily' ],
//   // job: 'designer',
//   // isMarried: true }
//
// // Creating a new array containing values from the object
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane); // { name: 'Jane', birthYear: 1969, lastName: 'Smith' }

// // *******************************
// // Objects and Methods
// // *******************************

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2018 - this.birthYear;
//   }
// };
//
// // john.age = john.calcAge(); //stores value into the john object
//
// john.calcAge();
// console.log(john);

// // *******************************
// // CODING CHALLENEGE 4
// // *******************************

// Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
//
// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// var mark = {
//   fullName: 'Mark Anthony',
//   mass: 75,
//   height: 1.7,
//   calcBMI: function () {
//     var bmi = this.mass / (this.height * this.height);
//     return bmi;
//   }
// };
//
// mark.bmiMark = mark.calcBMI();
// mark.calcBMI();
// console.log(mark);
//
// var john = {
//   fullName: 'John Lee',
//   mass: 74,
//   height: 1.9,
//   calcBMI: function () {
//     var bmi = this.mass / (this.height * this.height);
//     return bmi;
//   }
// };

// john.bmiJohn = john.calcBMI();
// john.calcBMI();
// console.log(john);
//
// if (mark.bmiMark > john.bmiJohn) {
//   console.log(mark.fullName + ' has a higher BMI! BMI: ' + mark.bmiMark);
// } else if (mark.bmiMark === john.bmiJohn) {
//   console.log('It is a Draw!');
// } else {
//   console.log(john.fullname + ' has a higher BMI! BMI: ' + john.bmiJohn);
// }

// // *******************************
// // CODING CHALLENEGE 4 Solution
// // *******************************

// var mark = {
//   fullName: 'Mark Anthony',
//   mass: 75,
//   height: 1.7,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
//
// var john = {
//   fullName: 'John Lee',
//   mass: 100,
//   height: 1.9,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
//
//
// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + ' has a higher BMI! BMI: ' + john.bmi);
// } else if (mark.calcBMI() > john.calcBMI()) {
//   console.log(mark.fullName + ' has a higher BMI! BMI: ' + mark.bmi);
// } else {
//   console.log('They have the same BMI');
// }

// // *******************************
// // Loops and Iterations
// // *******************************

// for (var i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
//
// // i = 0, 0 < 10 true, log i to console, i++
// //...
// // i = 9, 9 < 10 true, log i to console, i++
// // i = 10, 10 < 10 false, exit the loop!
//
// // // for loop
// // var john = ['John', 'Smith', 1990, 'teacher', 'designer', false];
// //
// // for (var i = 0; i < john.length; i++) {
// //   console.log(john[i]);
// // }
// //
// // // while loop
// // var i = 0
// // while (i < john.length) {
// //   console.log(john[i]);
// //   i++;
// // }

// // continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
//
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }
//
//
// // looping Backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

// // *******************************
// // CODING CHALLENGE 5
// // *******************************

// Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
//
// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
//
// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
var john = {
  fullName: 'John Smith',
  billArray: [124, 48, 268, 180, 42],
  tipCalc: function () {
    this.tipsArray = [];
    this.finalAmountsArray = [];
    for (var i = 0; i < this.billArray.length; i++) {
      if (this.billArray[i] < 50) {
        this.tipsArray[i] = this.billArray[i] * .2
        this.finalAmountsArray[i] = this.billArray[i] + (this.billArray[i] * .2)
      } else if (this.billArray[i] > 50 && this.billArray[i] < 200) {
        this.tipsArray[i] = this.billArray[i] * .15
        this.finalAmountsArray[i] = this.billArray[i] + (this.billArray[i] * .15)
      } else {
        this.tipsArray[i] = this.billArray[i] * .10
        this.finalAmountsArray[i] = this.billArray[i] + (this.billArray[i] * .10)
      }
    }
  }
}

// john.tipCalc();
// console.log(john);

// EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
// Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
//
// 5. Implement the same functionality as before, this time using Mark's tipping rules
// 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
// 7. Calculate the average tip for each family
// 8. Log to the console which family paid the highest tips on average

var mark = {
  fullName: 'Mark Anthony',
  billArray: [77, 375, 110, 45],
  tipCalc: function () {
    this.tipsArray = [];
    this.finalAmountsArray = [];
    for (var i = 0; i < this.billArray.length; i++) {
      var percentage;
      var bill = this.billArray[i]
      if (bill < 50) {
        percentage = .20
      } else if (bill > 50 && bill < 200) {
        percentage = .15
      } else {
        percentage = .1
      }
      this.tipsArray[i] = bill * percentage
      this.finalAmountsArray[i] = bill + (bill * percentage)
    }
  }
}

// // invoke tipCalc() first before printing to the console to show that tipsArray and finalAmountsArray is a property in the object
// mark.tipCalc()
// console.log(mark);

function tipAvg (tips) {
  var sum = 0;
  for(var i = 0; i < tips.length; i++) {
    sum = sum + tips[i]
  }
  return sum / tips.length;
}

mark.tipCalc()
john.tipCalc()

john.tipAverage = tipAvg(john.tipsArray)
mark.tipAverage = tipAvg(mark.tipsArray)

console.log(mark);
console.log(john);


// // *******************************
// // CODING CHALLENGE 5 SOLUTION
// // *******************************

// var john = {
//   fullName: 'John Smith',
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function () {
//     this.tips = []
//     this.finalValues = []
//
//     for (var i = 0; i < this.bills.length; i++) {
//       // Determine percentage based on tipping rules
//       var percentage;
//       var bill = this.bills[i] //store value
//
//       if (bill < 50) {
//         percentage = .2
//       } else if (bill >= 50 && bill < 200) {
//         percentage = .15
//       } else {
//         percentage = .1
//       }
//
//       // Add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + bill * percentage
//     }
//   }
// }
