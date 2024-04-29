// Map API with Leaflet 
function initializeMap() {
  // Coordinates for Perfect Nails nail salon
  const uriCoordinates = [41.78281297703632, -71.4638305626947];

  // Create a map centered at the specified coordinates
  const map = L.map('map').setView(uriCoordinates, 15);

  // Add OpenStreetMap as the base layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker at the salon with a popup
  const marker = L.marker(uriCoordinates).addTo(map);
  
  // Add information to be displayed in the popup
  const popupContent = "<strong>Perfect Nails Salon</strong>";
  
  // Bind the popup to the marker
  marker.bindPopup(popupContent).openPopup();
}

// Call the initializeMap function when the document is ready
document.addEventListener('DOMContentLoaded', initializeMap);



