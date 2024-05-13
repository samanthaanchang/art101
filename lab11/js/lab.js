// lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
// Requirements: jQuery must be loaded for this script to work.
// Author: Samantha Chang
// Date: 05/20/2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    const userName = $("#user-name").val();
    const userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});