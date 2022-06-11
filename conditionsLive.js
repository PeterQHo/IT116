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

// Using if statement and strict equality for dayOfWeek 
if (dayOfWeek === 'Monday') {

    console.log("This is Monday");

} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");

} else if (dayOfWeek === "Saturday") {

    console.log("Hooray, Today is Saturday");

}
*/

/*
const age = prompt('Enter An Age to Drive')

if (age < 5) {

    console.log("You are less that 5! Cmon bro.");

} else if (age < 10) {

    console.log("Still to young");

} else if (age >= 16) {

    console.log("You are able to drive");

}

// Else --- All Condition in the logic failed 

else {

    console.log("Last Resort If all Conditions Fails");
}
*/
/*
const expr = "Papayas";

switch (expr) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;
    case 'Mangoes':
        console.log("Hello Mangoes!");
        break;
    case 'Papayas':
        console.log("Hello Papayas");
        break;
    default:
        console.log("Sorry, we are out of you asked item.");

}
*/
/*
const password = prompt("Please Enter A New Password");

if (password.length >= 6) {

    // Nested Condition
    if (password.indexOf(' ') === -1) {

        console.log('Valid password');

    } else {

        console.log("Password Can't Have Spaces");

    }

} else {


    console.log("Password is Too Short");

}
*/
/*
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong()
singSong()
singSong()
*/

function greet(firstName) {
// template literal
    console.log(`Hey There, ${firstName}`)

}

greet('Peter')

function greet1(firstName, lastName) {

    console.log(`Hey There, ${firstName} ${lastName[0]}.`)
    

}

greet1('Boomer','Sooner');