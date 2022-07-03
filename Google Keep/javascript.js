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
function showNotes(){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    notesObj=[];
  }
  else{
    notesObj=Json.stringyfiy(notes);
  }
  let display="";
  notesObj.forEach(function(element,index){
    // display +=`
    // <div class="note">
    // <p class="note-counter">""</p>
    // <h3>Todays date</h3>
    // <p>2nd of july 2022</p>
    // <button id="delete">Delete</button>
    // <button id="edit">Edit</button>
  `;
  })
  }
}