/*
console.log("Hello World");


//Delaring a variable with a random number
let randomNumber = Math.random();

// Logging variable in console to generate a random number
console.log(randomNumber);


// Using If statement if number is less than 0.5 output "Hello Peter" in console
if (randomNumber < 0.5) {

    console.log("Hello Peter");
    console.log(randomNumber);
    
}

// Using If statement if number is less than or equal to 0.5 output "RandomNumber is greater than 0.5" in console
if (randomNumber >= 0.5) {

    console.log('RandomNumber is greater than 0.5');
    console.log(randomNumber);

}
*/

// If Else statements
/*

// constant variable value is Monday
const dayOfWeek = 'Monday';

// Using if statement and strict equality for dayOfWeek and will log into the console 
if (dayOfWeek === 'Monday') {

    console.log("This is Monday");

} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");

} else if (dayOfWeek === "Saturday") {

    console.log("Hooray, Today is Saturday");

}
*/

/*

// creating a promt to enter age 
const age = prompt('Enter An Age to Drive')

// using if statement for ages less than 5 and logging the following string into the console
if (age < 5) {

    console.log("You are less that 5! Cmon bro.");

// using if statement for ages less than 10 and logging the following string into the console
} else if (age < 10) {

    console.log("Still to young");

// using if statement for ages less than or equal to 16 and logging the following string into the console
} else if (age >= 16) {

    console.log("You are able to drive");

}

// Else --- All Condition in the logic failed 

// Using else statement if condition do not meet the statements log the following string in the console
else {

    console.log("Last Resort If all Conditions Fails");
}
*/
/*

// Declaring a variable 
const expr = "Papayas";
// Using switch statement to pass on the expression
switch (expr) {
// Creating case statements for fruits and using break function to break out of the execution
    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;
    case 'Mangoes':
        console.log("Hello Mangoes!");
        break;
    case 'Papayas':
        console.log("Hello Papayas");
        break;
    // Default statement if none of the parameter matches the case statment log the string in the console
    default:
        console.log("Sorry, we are out of your asked item.");

}
*/
/*
// Creating a prompt
const password = prompt("Please Enter A New Password");
// If statement with condtion of password.length greater than or equal to 6 characters
if (password.length >= 6) {

    // Nested Condition to look for a occurrence in the string and return -1 if value is not found
    if (password.indexOf(' ') === -1) {
        // If condtion are met log the string in the console
        console.log('Valid password');

    } else {
        // Else statement log in console if password.indexOf is not met
        console.log("Password Can't Have Spaces");

    }

} else {

    // Else statement log in console if password.length is not met
    console.log("Password is Too Short");

}
*/
/*

// Creating a function with three different outputs 
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
// log function into console
singSong()
singSong()
singSong()
*/

// creating function name of greet with argument parameter of firstName
function greet(firstName) {
//  log in the sting and using template literal for the firstName  
    console.log(`Hey There, ${firstName}`);

}
// Calling the function name greet to Peter
greet('Peter')

function greet1(firstName, lastName) {
// log the string and using template literal for firstName and the first character of lastName
    console.log(`Hey There, ${firstName} ${lastName[0]}.`);
    

}
// Calling the function name of greet1 to Boomer, Sooner
greet1('Boomer','Sooner');