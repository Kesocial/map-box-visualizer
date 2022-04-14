mapboxgl.accessToken =
  "pk.eyJ1Ijoia2Vzb2NpYWwiLCJhIjoiY2wxeTFsMDNnMDJjZDNkcWhmbDAwajQ3YiJ9.pARxiWrzCq-Apw5wTOlXHQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [0, 18], // starting position
  zoom: 5,
});
var marker = new mapboxgl.Marker().setLngLat([0, 18]).addTo(map);
