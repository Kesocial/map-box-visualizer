mapboxgl.accessToken =
  "pk.eyJ1Ijoia2Vzb2NpYWwiLCJhIjoiY2wxeTFsMDNnMDJjZDNkcWhmbDAwajQ3YiJ9.pARxiWrzCq-Apw5wTOlXHQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [0, 18], // starting position
  zoom: 5,
});

const cambiarMapa = (id) => {
  const contenedorMapa = document.querySelector(".map__container");
  contenedorMapa.classList.toggle("cargando");
  map.setStyle("mapbox://styles/mapbox/" + id);
  setTimeout(() => {
    contenedorMapa.classList.toggle("cargando");
  }, 2000);
};
const createButton = (name, id) => {
  var button = document.createElement("button");
  button.innerHTML = name;
  button.classList.add("buttons__btn");
  button.addEventListener("click", () => cambiarMapa(id));
  return button;
};

const buttons = document.querySelector(".buttons");
var marker = new mapboxgl.Marker().setLngLat([0, 18]).addTo(map);

var styleMap = [
  {
    name: "Mapbox Streets",
    id: "streets-v11",
    color: "#c2da9f",
  },
  {
    name: "Mapbox Outdoors",
    id: "outdoors-v11",
    color: "#75cff0",
  },
  {
    name: "Mapbox Light",
    id: "light-v10",
    color: "#e8eae9",
  },
  {
    name: "Mapbox Dark",
    id: "dark-v10",
    color: "#2e2e2e",
  },
  {
    name: "Mapbox Satellite",
    id: "satellite-v9",
    color: "#142736",
  },
  {
    name: "Mapbox Navigation Day",
    id: "navigation-day-v1",
    color: "#ebebee",
  },
  {
    name: "Mapbox Navigation Night",
    id: "navigation-night-v1",
    color: "#424d5c",
  },
];
for (btn in styleMap) {
  console.log(styleMap[btn].name);
  console.log(btn);
  buttons.appendChild(createButton(styleMap[btn].name, styleMap[btn].id));
}
map.on("mousemove", function (e) {
  var longitud = e.lngLat.lng;
  var latitud = e.lngLat.lat;
  document.getElementById("info").innerHTML =
    "Latitud:" + longitud + " <br> " + "Longitud: " + latitud;
});
