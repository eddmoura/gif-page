$(document).ready(function(){

var gifs = [];



function displayGif() {
var gif = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=5&api_key=dc6zaTOxFJmzC";



$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
           
           var results = response.data;

          for (var i = 0; i < results.length; i++){
           
          var gifsDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var gifImage = $("<img>");
          gifImage.attr("data-state", "still");
          gifImage.attr("data-still", results[i].images.fixed_height_still.url);
          gifImage.attr("src", results[i].images.fixed_height.url);
          gifImage.attr("data-animate", results[i].images.fixed_height.url);
          gifImage.addClass("image")
          // gifsDiv.append(p);
          // gifsDiv.append(gifImage);

          

      $("#gifs-view").append(p);
      $("#gifs-view").append(gifImage);
      
      
      console.log(results);
      }
        });

}


$("#gifs-view").on("click", ".image", function(){


var state = $(this).attr("data-state");

if(state === "animate"){
$(this).attr("src", $(this).data("still"));
$(this).attr("data-state", "still");
} else{

  $(this).attr("src", $(this).data("animate"));
  $(this).attr("data-state", "animate");
}



});


function buttoncreation(){



  $("#gif-type").empty();

  for(var i = 0; i < gifs.length; i++) {

    var newButton = $("<button>");

    newButton.addClass("gif");

    newButton.attr("data-name", gifs[i]);

    newButton.text(gifs[i]);

   
    $("#gif-type").append(newButton);


  }

}

$("#add-gif").on("click", function(event){

event.preventDefault();


var gifInput = $("#gif-input").val().trim();

if(gifInput != " "){

gifs.push(gifInput);

$("#gif-type").val(" ");


buttoncreation();

}

});


 $(document).on("click", ".gif", displayGif);



});












