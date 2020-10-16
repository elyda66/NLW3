//CRIAR-MAPA
const map = L.map("mapid").setView([-27.2230259, -49.6387525], 15);

// CRIA E ADICIONA O TITULO
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// ICONE
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

// CREATE AND ADD MARKER
let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //REMOVE ICON AFTER ADD
  marker && map.removeLayer(marker);

  //ADD ICON LAYER
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//SELECT PHOTOS

function addPhotoField() {
  //PEGAR O CONTEINER DE FOTOS
  const conteiner = document.querySelector("#images");

  //PEGAR O CONTEINER PARA DUPLICAR
  const fielsdConteiner = document.querySelectorAll(".new-upload");

  //REALIZAR O CLONE DA ÚLTIMA IMAGEM ADICIONADA
  const newfieldconteiner = fielsdConteiner[
    fielsdConteiner.length - 1
  ].cloneNode(true);

  // VERIFICAR SE ESTA VAZIO
  const input = newfieldconteiner.children[0];

  if (input.value == "") {
    return;
  }

  //LIMPAR O CAMPO ANTES
  input.value = "";

  //ADICIONAR O CLONE AO CONTEINER DE IMAGENS
  conteiner.appendChild(newfieldconteiner);
}

function deletefield(event) {
  const span = event.currentTarget;

  const fielsdConteiner = document.querySelectorAll(".new-upload");

  if (fielsdConteiner.length <= 1) {
    // lIMPAR O  VALOR DO CAMPO
    span.parentNode.children[0].value = "";
    return;
  }

  // DELETAR O CAMPO
  span.parentNode.remove();
}

// TROCA DO SIM E NÃO
function togglerselect(event) {
  // RETIRAR A CLASSE .ACTIVE DOS BOTÕES
  document.querySelectorAll('.button-select button')

  .forEach(function (button) {
    button.classList.remove('active')
  })

  // COLOCAR A CLASS . ACTIVE NO CLICADO 
  const  button = event.currentTarget

  button.classList.add('active')
  // ATUALIZAR O MEU INPUT HIDDEN COM O VALOR SELECIONADO
  const input =  document.querySelector('[name = "open-on-weekends"]')

  console.log(input.value = button.dataset.value)
  
  //PEGAR O BOTÃO CLICADO

  //VERIFICAR SE SIM OU NÃO COM

  

  

}
