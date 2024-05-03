// index.js - Lab 7: Functions
// Author: Samantha Chang
// Date: 5/2/2024

// Functions
// sortUserName - a function takes user input and sorts letters of name
function sortUserName() {
  var userName = window.prompt("Hello! Please tell me your name so I can fix it.")
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;



}


// Output
document.writeln("Here's your name fixed har har: ",
  sortUserName(), "</br>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
