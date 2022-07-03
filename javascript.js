let addBtn = document.getElementById("add-button");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("text");
  let addTxt = document.getElementById("note-text");
  

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
//   console.log(notesObj);
  showNotes();
});