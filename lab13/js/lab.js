// lab.js - Loops
// Author: Samantha Chang
// Date: 05/27/2024

const factorObj = { 
    3: "Fizz", 
    5: "Buzz", 
    7: "Boom"
}

function FizzBuzz(maxNums, factorObj) { 
    // iterate over all numbers based on maxNums    
    for(var num=0; num < maxNums; num++) { 
        // reset output string 
        var outputStr = ""; 

        for (var factor in factorObj) { 
            if (num % factor == 0) { 
                outputStr += factorObj[factor];
            }
        }

        if (outputStr) { 
            outputStr = " - " + outputStr + "!"; 
        }

        $("#output").append("<p>" + num.toString() + outputStr + "</p>");
    }
}


$("#run").click(function() {
    var maxNum = $("#maxNum").val();
    FizzBuzz(maxNum, factorObj)
});




