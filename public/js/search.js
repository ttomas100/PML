var artist = $("#search-term").val()
   
$("#search-term").keypress(function(event) { 

  if (event.keyCode === 13) { 
    event.preventDefault();
    $("#run-search").click(); 
  } 
});

$("#run-search").on("click", function() {
event.preventDefault();
  console.log(artist);
  
  $('#previewMusic').addClass('showClass');
  artist = $("#search-term").val();
  getData(artist);
  $("#search-term").val("");  
});


function getData(filter){ 

  var numberOfSongs = 6

  for (var i= 1;i < numberOfSongs; i++){
  
  var queryURL= "https://api.deezer.com/search?q=" + filter;
  var artist = [];
  var prev30Seconds = [];
  var albumImage = [];
  var id = [];

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var randomdata= Math.floor((Math.random() * 25) + 1);  
    
    console.log(response);
    id = response.data[randomdata].id;
    artist = response.data[randomdata].title;
    prev30Seconds = response.data[randomdata].preview;
    albumImage = response.data[randomdata].artist.picture;
    console.log(albumImage);
    console.log(artist);
    console.log(prev30Seconds);
    console.log(id);

    var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
    var prevBody = $("<div>").addClass("card-body p-3 previewBody");
    var audioControl= $("<audio controls>").attr("src", prev30Seconds);
    var artistToAppend = $("<div>").addClass("card-body p-3 previewBody").text(artist);
    var idToAppend = $("<div>").addClass("card-body p-3 previewBody").text(id);
    var saveButton = $('<button id='+id+'>save</button>').click(function (event) {saveSong($(this).attr('id'))});
    var image = $("<img>").attr("src", albumImage);
  
    
   prevBody.append(artistToAppend,image, audioControl, idToAppend, saveButton);
   card.append(prevBody);
   $("#preview-section").append(card);
  });
}
};
function saveSong (id){
  //Create an ajax POST
  //Add the id in the body
  //Make the request
  //Make sure that the user is send

  //NODE EXPRESS:
  //Get the id from the requestbody
  //save in the database
}
function clearData(){
  var queryURL= "https://api.deezer.com/search?q=" + filter;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#preview-section").empty();
});
};

$("#clear-all").on("click", function() {
event.preventDefault();

  $( "#preview-section" ).empty();
});