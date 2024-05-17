var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // Si el contenido está abierto, cerrarlo
      content.style.maxHeight = null;
      this.classList.remove("active");
    } else {
      // Cerrar todos los collapsibles
      closeAllCollapsibles();
      // Abrir el contenido del collapsible actual
      content.style.maxHeight = content.scrollHeight + "px";
      this.classList.add("active");
    }
  });
}

function closeAllCollapsibles() {
  var collapsibles = document.getElementsByClassName("collapsible");
  for (var i = 0; i < collapsibles.length; i++) {
    var content = collapsibles[i].nextElementSibling;
    content.style.maxHeight = null;
    collapsibles[i].classList.remove("active");
  }
}
