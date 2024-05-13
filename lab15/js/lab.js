// lab.js - 
// Author: Samantha Chang
// Date: 06/03/2024

var pokemon = {} 
function get_chain(data) { 
    ids = [] 


    function recur(evolve) {
        
        if (evolve.length === 0){
            return 
        }
        // console.log(evolve)
        // console.log(evolve.species.url.split('/'))
        ids.push(evolve.species.url.split('/').at(-2))
        for(var i = 0; i < evolve.evolves_to.length; i++)
            recur(evolve.evolves_to[i])
    }

    recur(data.chain)
    // console.log(ids)
    return ids
}

function images(id) { 
    
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://pokeapi.co/api/v2/pokemon/" + id.toString() + '/',
        // The data to send (will be converted to a query string)
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            console.log(data);

            outputStr = "<div class=\"pokemon\">" +  
                "<img src=\"" + data.sprites.front_default + "\" width=\"100\"/>" + 
                "<label>" + data.name.charAt(0).toUpperCase()+ data.name.slice(1) + "</label>" +
                "</div>";
            
            
            $("#output").append(outputStr)
            // pokemon = data
            // return outputStr
        },  
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

function pokemon_lookup(name) { 
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://pokeapi.co/api/v2/pokemon-species/" + name + '/',
        // The data to send (will be converted to a query string)
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            
            $.ajax({
                // The URL for the request (from the api docs)
                url: data.evolution_chain.url,
                // The data to send (will be converted to a query string)
                // Whether this is a POST or GET request
                type: "GET",
                // The type of data we expect back
                dataType : "json",
                // What do we do when the api call is successful
                //   all the action goes in here
                success: function(data) {

                    ids = get_chain(data)
                    outputStr = ""
                    for(var i = 0; i < ids.length; i++){
                        images(ids[i]);
                    }
                    

                },
                // What we do if the api call fails
                error: function (jqXHR, textStatus, errorThrown) { 
                    // do stuff
                    console.log("Error:", textStatus, errorThrown);
                }
            });

            // $("#output").append("<img src=\"" + data.sprites.front_default + "\" width=\"100\"/>")
            
            
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}



$("#activate").click(function(){
    
    var name = $("#id_name").val().toLowerCase();
    // name = "charmander";
    $("#output").html("<h2>👏 Results (Script Output)</h2>")
    pokemon_lookup(name)
})

