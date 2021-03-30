function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 24.53657122313039,  lng: 78.75925908005932 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 19.206890624688338, lng: 72.9692460798376},
  { lat: 19.26750798086137, lng: 73.11002690119112 },
  { lat: 19.228075055746203,  lng: 73.09184956897296 },
  { lat: 19.20013427316102,  lng: 73.19442486779609 },
  { lat: 19.15479802349003, lng: 72.83343872001466 },
  { lat: 19.088410577839287,  lng: 72.91200638898138 },
  { lat: 28.61351402034726,  lng: 77.20348155458666 },
  { lat: 28.586385170295966,  lng: 77.17876231670242 },
  { lat: 28.660520762619882,  lng: 77.40947520362207 },
  { lat: 28.53693237712558,  lng: 77.23094737445804 },
  { lat: 28.6520852058929,  lng: 77.15472972431495 },
  { lat: 22.580373018112184,  lng: 88.36918767934446 },
  { lat: 22.64393814195919,  lng: 88.50975162049032 },
  { lat: 22.791813225609502,  lng: 88.32477558299716 },
  { lat: 17.33366121860418,  lng: 78.47395218895186 },
  { lat: 17.32317352507605,  lng: 78.54467667512067 },
  { lat: 17.469291623598828,  lng: 78.52339066472035 },
  { lat: 26.891962861382073,  lng: 75.78857408461477 },
  { lat: 25.607958002245628,  lng: 74.58451621354713 },
  { lat: 25.44038131974808,  lng: 75.90838083795482 },
  { lat: 26.843869697446298,  lng: 75.71669003261073 },
  { lat: 24.814078237915897,  lng: 73.66645497979127 },
  { lat: 22.83578519321598, lng: 77.72021289990724 },
];
