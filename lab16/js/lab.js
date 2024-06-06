// index.js - 
// Author: Samantha Chang
// Date: 6/6/2024

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // headers: {
    //     'Access-Control-Allow-Origin':'http://127.0.0.1:5500'
    // },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})