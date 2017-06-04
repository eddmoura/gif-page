$(document).ready(function(){

var gifs = ["happy", "lol", "whatever"];

function buttoncreation(){

  $("#gif-type").html("");

  for(var i = 0; i < gifs.length; i++) {

    var newButton = $("<button>");

    newButton.html(gifs[i]);

    $("#gif-type").append(newButton);


  }

}

$("#add-gif").on("click", function(event){

event.preventDefault();

var gifInput = $("#gif-input").val();

gifs.push(gifInput);

$("#gif-input").empty(" ");
$("#gif-input").val(" ");


buttoncreation();

})



buttoncreation();





});












