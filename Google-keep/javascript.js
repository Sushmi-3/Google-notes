let label=document.querySelector(".modal-title",".modal-text","close-button");


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const input = document.createElement("input");
input.setAttribute("title", "text");
document.body.appendChild(input);