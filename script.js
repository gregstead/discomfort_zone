//Initialize floating action button for light and dark mode
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
    });
  });

//Initialize dropdown menu for mode of transport
$(document).ready(function(){
  $('select').formSelect();
});

//Button Click handler
//ajax call to apis

var travelTimeAppID = '1a8d3c90';
var travelTimeAPIKey = '59530f476afdb89ee3907bf314e7d611';

// function getAjax(params) {
//     console.log("I work");
// }


//KCMO Coordinates: 39.0997° N, -94.5786° W
//Practicing Google  Map API call Line 19-24
var discomfortMap;
function initMap() {
    var mapOpts = {
        center: { lat: 39.0997, lng: -94.5786 },
        zoom: 8,
    };
    discomfortMap = new google.maps.Map(document.getElementById('discomfortMap'), mapOpts);
    var location0 = new google.maps.Marker({
        position: { lat: 39.0997, lng: -94.5786 },
        map: discomfortMap,
        title: 'Kansas City: Crown Town',
        animation: google.maps.Animation.DROP
    });
};


<<<<<<< HEAD
function getAjax(params) {
    console.log("I work");
}
=======
>>>>>>> development

//Render map
//Render search results
//Add clickable results to webpage or copy address (if everything else is done)

//Dark and Light mode in local storage

// Get user location data 
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // Error/decline handler
        // Default to KC? 
        console.log("something went wrong");
    }
};

// Handler for location data
function showPosition(position) {
    // User latitude
    console.log(position.coords.latitude);
    // User longtude
    console.log(position.coords.longitude);
}

getUserLocation();