//CRIAR-MAPA
const map = L.map("mapid").setView([-27.2230259,-49.6387525], 15);

// CRIA E ADICIONA O TITULO
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// ICONE
const icon = L.icon(
    {
        iconUrl: "./public/images/map-marker.svg",
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2]
    }
)

// POPUP
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" classe="chosse-orphanege"><img src="./public/images/arrow-white.svg"></a>')

//CRIA E ADICIONA MARCADOR
L.marker([-27.2230259,-49.6387525], {icon})
  .addTo(map)
  .bindPopup(popup)

