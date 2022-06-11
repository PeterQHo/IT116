/*
console.dir(document);

// Logging the domain and URL in the console
console.log(document.domain);
console.log(document.URL);

// output title of the document in the console
console.log(document.title);
// output doctype of the document in the console
console.log(document.doctype);
// logging the document head in the console
console.log(document.head);
// Logging the document body in the console
console.log(document.body);
//  logging all the document content in the console
console.log(document.all);
// Output the line that is give the index of the given line in the console
console.log(document.all[10]);
// using the sub function to change the text context of the index line
document.all[10].textContent = "We Just changed the Header";

// Document Object Model can scan the tree for elements 
console.log(document.forms);
console.log(document.links);
console.log(document.images);

//////////////////////////////////////////////////////////////////////

Access the DOM with the GETELEMENTBYID

// Selecting the element by ID
console.log(document.getElementById("header-title"));

// Creation of an object variable using document function.
let headerTitle = document.getElementById("header-title");

// Changing the the text of the header-title ID by using the object variable 
headerTitle.textContent = "I'm Changing the Header";
headerTitle.innerText = "I am Changing It Again";

headerTitle.style.color = "hotpink";
*/

////////////////////////////////////////////GetElementByClassName//////////////////////////////
/*
// Using getElementByClassName to select list-group-item and giving a varaible to item
var items = document.getElementsByClassName("list-group-item");

// Logging the variable of items as arrays start at 0 
console.log(items);
console.log(items[1]);

// styling property of different items within the list 

items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "brown";
items[1].textContent = "Royal Never Give Up";
items[1].style.color = "white";

items[0].style.fontWeight = "bold";
items[0].style.backgroundColor = "red";
items[0].textContent = "SK Telecom";
items[0].style.color = "white";

items[2].style.fontWeight = "bold";
items[2].style.backgroundColor = "blue";
items[2].textContent = "Counter Logic Gaming";
items[2].style.color = "white";
*/

/*
// This is a counter which loops in increments of 1 all the way until 10
for (let i = 1; i <= 10; i++) {

    console.log(i); 

} 
// This is a counter which loops in increments of 2 all the way until 20
for (let i = 1; i <= 20; i +=2) {

    console.log(i);
}

// This is which loops from 100 all the way until 0 in increments of 2 
for (let i = 100; i >= 0; i -=2) {

    console.log(i);
}

// incrementing through a for loop in the header
for (var i = 0; i < items.length; i++) {

    items[i].style.backgroundColor = "grey";
    items[i].textContent = "I changed the list";
}


// this loop help to myGames on var number starting index 
const myGames = ['Skyrim','Fallout','Fable','Halo','FireEmblem'];

// using for loop, Declaring the variable and checking the length of the myGames incrementing through each particular item.
for(let i = 0; i < myGames.length; i++){

    console.log(i, myGames[i]);

}
*/

//////////////////////////////////////////////////////////////////////////////////////////////
//GetElementByTagName
/*
// Getting the element tag from the document 
var li = document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);

li[1].textContent = "Hello 2";

// changing the style of the li item 
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'crimson';
li[1].style.color = 'white';


//  using for loop, Declaring the variable and checking the length of the list incrementing through each particular item.
for(var i = 0; i < li.length; i++){

    li[1].style.backgroundColor = 'lightgrey';
    li[1].textContent = 'Changed Context';

}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////// - Query Selector 
/*
// Selecting main-header by ID using query selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';

// Selecting the first input within the document and changing the text 
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";

// Declaring the input using querySelector to grap the specifc type of submit
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND";

// Declaring the list group item and changing color of first item in the list
var item = document.querySelector(".list-group-item");
item.style.color = 'red';

// Declaring the last item of the list and change the text color 
var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "coral";
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////QuerySelectorAll

// Declaring a varible and using querySelectorAll to select all the titles in the document
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello Peter';

// Using nth-child odd and even to grap all the odd numbers and the even in the list
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// for loop iterating through both created variables
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor = "red";
    even[i].style.backgroundColor = "blue";
    even[i].style.color = "whitesmoke"; 
}
