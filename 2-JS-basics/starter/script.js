/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/



/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/



/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/



/*****************************
* Boolean logic




var firstName = 'John';
var age = 26;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if(age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************
* Ternary operators amd switch statements
*/
/* 

//Ternary operator
var firstName = 'John';
var age = 11;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/
/* 
//switch statement
var job = 'designer';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' desiugns beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
var firstName = 'John';
var age = 50;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    case age >= 30 :
        console.log(firstName + ' is a man.');
        break;
}


/* 
Truthy and falsy values and equality operators

*/

// falsey values: undefined, null, 0, "", NaN
// truthy values: NOT falsy
/* 
var height;

height = 23;

if (height || height == 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');
}

// Equality operators
if (height === '23') {
    console.log('The == operator deos type coercion!');
}

 */
/* 
var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (0 + 134 + 105) / 3;

switch (true) {
    case johnAverage > mikeAverage && johnAverage > maryAverage:
        console.log('John\'s team has a higher average score of ' + johnAverage);
        break;
    case mikeAverage > johnAverage && mikeAverage > maryAverage:
        console.log('Mike\'s team has a higher average score of ' + mikeAverage);
        break;
    case maryAverage > johnAverage && maryAverage > mikeAverage:
        console.log('Mary\'s team has a higher average score of ' + maryAverage);
        break;
    case johnAverage === mikeAverage && mikeAverage === maryAverage:
        console.log('Both teams have the same average of ' + johnAverage);
        break;
    
}
 */


/* 
Funtions
 */

/* 
function calculatAge(birthYear) {
    return 2018- birthYear;
}

var ageJohn = calculatAge(1990);
var ageMike = calculatAge(1948);
var ageJane = calculatAge(1969);
console.log(ageJohn)
console.log(ageMike)
console.log(ageJane)


function yearsUntilRetirement(year, firstName) {
    var age = calculatAge(year);
    var retirement = 65 - age;
    if (retirement > 0 ) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }

};

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
 */

/*
 Function statements and expressions
 */
/* 
// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives for Uber in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.'

    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('driver', 'Mark'))

//Function declaration
//function whatDoYouDo(job, firstName) {
 */

/* 
Arrays
*/

/* var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names.length);
console.log(names[0]);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names)


//Different data types
var john = ['John',  'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
john.shift();

console.log(john);
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'John is a designer';

console.log(isDesigner); */

/* 
var bills = [124, 48, 268]
var tipPercentage = [.2, .15, .1]

function calculateTip(billAmount) {
    if (billAmount < 50) {
        return billAmount * tipPercentage[0];
    } else if (billAmount >= 50 && billAmount < 200) {
        return billAmount * tipPercentage[1];
    } else {
        return billAmount * tipPercentage[2];
    }
}

var tipPaid = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
console.log(tipPaid);

var totalBillPaid = [tipPaid[0] + bills[0], tipPaid[1] + bills[1], tipPaid[2] + bills[2]];
console.log(totalBillPaid);
 */

/* 
Objects and properties
*/

//Object literals
/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

var jane = new Object();

jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane)
 */

/* 
Objects and methods
*/
/* 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};
john.calcAge()
console.log(john)

 */


//Arrays are objects, that's why you can objects on them

/* 

var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height**2
        return this.bmi;
    }
};

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height**2
        return this.bmi;
    }
};


if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same bmi of ' + mark.bmi);
}
 */


/* 
Loops and iteration
*/

/* for (var i = 1; i <=20; i+=2) {
    console.log(i);
}
 */
/* var john = ['John',  'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
 */
//CONTINUE AND BREAK STATEMENTS

/* var john = ['John',  'Smith', 1990, 'designer', false, 'blue'];
/* 
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
} */

/* 
//loop backwards
for (var i = john.length - 1; i >= 0; i--) {
    if (typeof john[i] !== 'string');
    console.log(john[i]);
}
 */


var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >=50 && bill <200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage
        }
    }
};


var mark = {
    fullName: 'Mark Smith',
    bills: [77, 475, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i =0; i < mark.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            //Add the results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};





function calcAverageTips(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
mark.calcTip();
john.average = calcAverageTips(john.tips)
mark.average = calcAverageTips(mark.tips)

console.log(john, mark)