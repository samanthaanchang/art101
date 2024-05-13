// lab.js - Sorting hat function
// Author: Samantha Chang
// Date: 05/24/2024



function sortingHat(str) {
    len = str.length; 
    mod = len % 4; 

    if (mod == 0) { 
        return "Gryffindor" 
    }
    else if (mod == 1) {
        return "Ravenclaw" 
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

$("#button").click(function() { 
    var name = $("#input").val(); 
    var house = sortingHat(name);
    newText = "<p>The Sorting hat has sorted you into " + house + "</p>"; 
    $("#output").append(newText)
})