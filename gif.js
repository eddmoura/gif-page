$(document).ready(function(){

var gifs = [];



function displayGif() {
var gif = $(this).attr("data-name");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&limit-5&api_key=dc6zaTOxFJmzC";



$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
           var results = response.data;
          for (var i = 0; i < results.length; i++){
          var gifsDiv = $("<div class='gif'>");

          var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height.url);

           // var gifsDiv = $("<div class='gif'>");
          gifsDiv.prepend(gifImage);

           // gifsDiv.append(gifsDiv);

      $("#gifs-view").prepend(gifsDiv);

      
      console.log(results);
      }
        });

}







function buttoncreation(){



  $("#gif-type").empty();

  for(var i = 0; i < gifs.length; i++) {

    var newButton = $("<button>");

    newButton.addClass("gif");

    newButton.attr("data-name", gifs[i]);

    newButton.text(gifs[i]);

    // newButton.html(gifs[i]);

    $("#gif-type").append(newButton);


  }

}

$("#add-gif").on("click", function(event){

event.preventDefault();

var gifInput = $("#gif-input").val().trim();

gifs.push(gifInput);

// $("#gif-input").val();


buttoncreation();

})


$(document).on("click", ".gif", displayGif);




buttoncreation();





});












