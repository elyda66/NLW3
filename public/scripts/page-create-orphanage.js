//CRIAR-MAPA
const map = L.map("mapid").setView([-27.2230259, -49.6387525], 15);

// CRIA E ADICIONA O TITULO
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// ICONE
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

// CREATE AND ADD MARKER
let marker;

map.on("click", (event) => {
    console.log(event)
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

    //REMOVE ICON AFTER ADD 
    marker && map.removeLayer(marker)

  //ADD ICON LAYER
  marker = L.marker([lat, lng], { icon })
  .addTo(map)
})
