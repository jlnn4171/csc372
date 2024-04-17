/*

//code from the slides

function init() {

    // Set up the map options
    var mapOptions = {  
        center: new google.maps.LatLng (40.782710, -73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
    
    // Map() draws a map
    var venueMap;
    venueMap = new google.maps.Map (document.getElementById('map'), mapOptions);
}

function loadScript() {

    // Create <script> element
    var script = document.createElement('script'); 

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAFcGroXwVfbPaZvXKOJGWqJz_PLEXzX0&loading=async&callback=initMap";
    
    // Add element to page
    document.body.appendChild(script);
}

// Onload call
window.onload = loadScript;
*/


let map;

async function initMap() {
  // The location of Perfect Nails
  const position = { lat: 41.78281297703632, lng: -71.4638305626947 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Perfect Nails
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Perfect Nails
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Perfect Nails",
  });
}

initMap();


