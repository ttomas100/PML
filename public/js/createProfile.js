$(document).ready(function() {

    $.get("/api/saveSong").then(function(data) {
      for (var i = 0; i < data.length; i++){
        console.log(data[i].email);
   
        }
    });
    });
  
    
 
// };


// function getData(track){ 

//     var numberOfSongs = 6
  
//     for (var i= 1;i < numberOfSongs; i++){
    
//     var queryURL= "https://api.deezer.com/track/" + track;
//     var artist = [];
//     var prev30Seconds = [];
//     var albumImage = [];
  
  
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
  
//       var randomdata= Math.floor((Math.random() * 25) + 1);  
      
//       console.log(response);
//       artist = response.data[randomdata].title;
//       prev30Seconds = response.data[randomdata].preview;
//       albumImage = response.data[randomdata].artist.picture;
//       console.log(albumImage);
//       console.log(artist);
//       console.log(prev30Seconds);
//       console.log(id);
  
//       var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
//       var prevBody = $("<div>").addClass("card-body p-3 previewBody");
//       var audioControl= $("<audio controls>").attr("src", prev30Seconds);
//       var artistToAppend = $("<div>").addClass("card-body p-3 previewBody").text(artist);
//       var image = $("<img>").attr("src", albumImage);
    
      
//      prevBody.append(artistToAppend,image, audioControl, saveButton);
//      card.append(prevBody);
//      $("#preview-section").append(card);
//     });
//   }
//   };