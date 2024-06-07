// index.js - 
// Author: Samantha Chang
// Date: 6/6/2024


function getAndPutData(id) {
// Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: `https://xkcd.com/${id}/info.0.json`,
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
            console.log(data)
            comicObj = data 
            const title =  `<h1 style="text-align: center;">${comicObj.title}</h1>`

            const img = `<img src=${comicObj.img} alt=${comicObj.alt} style="margin-left: auto; margin-right: auto; display: block; padding: 10px">`

            // $('#result').append(img)

            $('#show').html(title + img)
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

let max = 0

$.ajax({
    // The URL for the request (from the api docs)
    url: `https://xkcd.com/info.0.json`,
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
        console.log(data)
        comicObj = data 
        const title =  `<h1 style="text-align: center;">${comicObj.title}</h1>`

        const img = `<img src=${comicObj.img} alt=${comicObj.alt} style="margin-left: auto; margin-right: auto; display: block; padding: 10px">`

        // $('#result').append(img)
        max = data.num;
        $('#show').html(title + img)
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})


let id = max

function randomButton() { 
    id = Math.floor( Math.random() * max)
    getAndPutData(id);     
}


function nextButton() {
    id = id + 1; 
    if (id > max){
        id = 1
    }
    getAndPutData(id);
}

function prevButton() { 
    id = id - 1; 
    if (id < 1) {
        id = max 
    }
    getAndPutData(id);
}


