mapboxgl.accessToken =
  "pk.eyJ1Ijoia2Vzb2NpYWwiLCJhIjoiY2wxeTFsMDNnMDJjZDNkcWhmbDAwajQ3YiJ9.pARxiWrzCq-Apw5wTOlXHQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [0, 18], // starting position
  zoom: 5,
});
var markers = [];
var markersRepresentation = [];
var markersContainer = document.getElementById("markers");
console.log(map);
const actualizarMarkers = (markers) => {
  markersContainer.innerHTML = "";
  markers.forEach(({ longitud, latitud }, index) => {
    var marker = document.createElement("div");
    marker.classList.add("markerContenedor");
    marker.innerHTML = `
    <div class="marker">
      <div>
        Marcador: ${index}
      </div>
      <div> ${longitud}</div>
      <div>${latitud}</div>
    </div>
    <button onclick="eliminarMarker(${index})"className="deleteMarker">x</button>
    `;
    markersContainer.appendChild(marker);
  });
};
map.on("click", function (e) {
  var longitud = e.lngLat.lng;
  var latitud = e.lngLat.lat;
  var m = new mapboxgl.Marker();
  m._color = "#fefef";
  m.setLngLat([longitud, latitud]).addTo(map);
  const markerObject = {
    longitud: longitud,
    latitud: latitud,
  };
  markersRepresentation.push(markerObject);
  markers.push(m);
  console.log("Marcador agregado");
  console.log("AllMarkers:");
  console.log(markers);
  console.log("AllMarkersContainer:");
  console.log(markersRepresentation);
  console.log("MarkerDeleted \n\n");
  actualizarMarkers(markersRepresentation);
});

const eliminarMarker = (pos) => {
  markers[pos].remove();
  markersRepresentation = markersRepresentation.filter(
    (e) => e != markersRepresentation[pos]
  );
  markers = markers.filter((e) => e != markers[pos]);
  actualizarMarkers(markersRepresentation);
  console.log("Marcador eliminado");
  console.table("Pos:" + pos);
  console.log("AllMarkers:");
  console.log(markers);
  console.log("AllMarkersContainer:");
  console.log(markersRepresentation);
  console.log("MarkerDeleted");
  console.log(markers[pos]);
  console.log("\n\n");
};
