function init() {

    // Set up the map options
    var mapOptions = {  
        center: new google.maps.LatLng (40.782710, -73.965310),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };
    
    // Map() draws a map
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {

    // Create <script> element
    var script = document.createElement('script'); 

    script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize';
    
    // Add element to page
    document.body.appendChild(script);
}

// Onload call
window.onload = loadScript;