// Obtem o modal
var modalMenu = document.getElementById("myMenu");

// Pega o botão que abre o modal
var btnMenu = document.getElementById("myBtnMenu");

// Obtem o elemento <span> que fecha o modal
var spanMenu = document.getElementsByClassName("closeMenu")[0];

var resu = document.getElementsByClassName("resume")[0]
// Quando o usuário clicar no botão, abra o modal 
btnMenu.onclick = function() {
  modalMenu.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal
spanMenu.onclick = function() {
  modalMenu.style.display = "none";
}
// Quando o usuário clicar em <span> (Volte ao jogo), feche o modal
resu.onclick = function() {
  modalMenu.style.display = "none";
}


// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
}