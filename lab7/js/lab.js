// index.js - Lab 6: Arrays and Objects
// Author: Samantha Chang
// Date: 4/29/2024

// Define Variables
myTransport = ["Car", "Bus", "Walking", "Carpool", "Bike"];

// Create an Object for my Main Ride
myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "White",
  year: 2021,
  age: function() {
  return 2024 - this.year;
  }
}


// Output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>")
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");




// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happens
}

// let's get this party started
main();
