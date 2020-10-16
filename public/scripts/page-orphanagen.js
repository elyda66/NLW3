const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CRIAR-MAPA
const map = L.map('mapid', options).setView([-27.2230259,-49.6387525], 15);

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


//CRIA E ADICIONA MARCADOR
L.marker([-27.2230259,-49.6387525], {icon})
  .addTo(map)


// IMAGE GALLERY
function selectImage(event) {
    const button = event.currentTarget

    // REMOVER TODAS AS CLASES ACTIVE
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button)  {
        button.classList.remove("active")
    }

    //SELECIONAR A IMAGEM CLICADA
    const image = button.children[0]
    const imageconteiner = document.querySelector(".orphanage-details > img")
    
    //ATUALIZAR O CONTEINER DE IMAGEM
    imageconteiner.src =image.src

    //ADICIONAR A CLASSE .active PARA TODOS OS BOTOES
    button.classList.add('active')
}