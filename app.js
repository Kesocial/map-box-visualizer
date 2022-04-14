const styleMap = [
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
const buttons = document.querySelector(".buttons");
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
for (btn in styleMap) {
  buttons.appendChild(createButton(styleMap[btn].name, styleMap[btn].id));
}
map.on("mousemove", function (e) {
  var longitud = e.lngLat.lng;
  var latitud = e.lngLat.lat;
  document.getElementById("info").innerHTML =
    "Latitud:" + longitud + " <br> " + "Longitud: " + latitud;
});
