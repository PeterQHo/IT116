/*
console.dir(document);

console.log(document.domain);
console.log(document.URL);

// output title of the document in the console
console.log(document.title);
// output doctype of the document in the console
console.log(document.doctype);
// 
console.log(document.head);
// 
console.log(document.body);
// 
console.log(document.all);
// Output the line that is give the index of the given line in the console
console.log(document.all[10]);
// using the sub function to change the text context of the index line
document.all[10].textContent = "We Just changed the Header";

Document Object Model can scan the tree for elements 
console.log(document.forms);
console.log(document.links);
console.log(document.images);

//////////////////////////////////////////////////////////////////////

Access the DOM with the GETELEMENTBYID

console.log(document.getElementById("header-title"));

// Creation of an object variable using document function.
let headerTitle = document.getElementById("header-title");

// Changing the the text of the header-title ID by using the object variable 
headerTitle.textContent = "I'm Changing the Header";
headerTitle.innerText = "I am Changing It Again";

headerTitle.style.color = "hotpink";
*/

////////////////////////////////////////////GetElementByClassName//////////////////////////////

var items = document.getElementsByClassName("list-group-item");

console.log(items);
console.log(items[1]);

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
