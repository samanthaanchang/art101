/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Samantha Chang
   Date: 5/13/2024
   Edit Date: 6/5/2024
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special! :D Wahoo</button>");



// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
  
});

// it only makes PART of the webpage special, not all of it.