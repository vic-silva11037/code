// Obtem o modal
var modalDica = document.getElementById("myModalDica");

// Pega o botão que abre o modal
var btnDica = document.getElementById("myBtnDica");

// Obtem o elemento <span> que fecha o modal
var spanDica = document.getElementsByClassName("closeDica")[0];

// Quando o usuário clicar no botão, abra o modal 
btnDica.onclick = function() {
  modalDica.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal
spanDica.onclick = function() {
  modalDica.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalDica) {
    modalDica.style.display = "none";
  }
}