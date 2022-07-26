const noteContainer = document.querySelector('.note-container');
const modalContainer = document.querySelector('.modal-container');
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');

// Class: for creating a  new  note
class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = Math.random();
  }
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e) {

  let addTitle = document.getElementById("note-title");
  let addTxt = document.getElementById("note-text");
  
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
// Function: View note in modal
// function activateNoteModal(title, body){
//   const modalTitle = document.querySelector('.modal__title');
//   const modalBody = document.querySelector('.modal__body');
//   modalTitle.textContent = title;
//   modalBody.textContent = body;
//   modalContainer.classList.add('active');
// }

// // Event: Close Modal
// const modalBtn = document.querySelector('.modal__btn').addEventListener('click', () => {
//   modalContainer.classList.remove('active');
// }

  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
//   console.log(notesObj);
displayNotes();
});

// Function to show elements from localStorage
function displayNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
        <div class="note">
            <p class="note-counter"></p>
            <h3 class="note-title"> ${element.title} </h3>
            <p class="note-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="note-btn">Delete</button>
            <button id="${index}"onclick="editNote(this.id)" class="note-btn edit-btn">Edit</button>
        </div>
            `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Notes Yet! Add a note using the form above.`;
  }
}

// Function to delete a note
function deleteNote(index) {
//   console.log("I am deleting", index);
    let confirmDel = confirm("Delete this note?");
    if (confirmDel == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        displayNotes();
    }
  
}

// Function to Edit the Note
function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");

    if (addTitle.value !== "" || addTxt.value !== "") {
      return alert("Please clear the form before editing a note")
    } 

    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    console.log(notesObj);

    notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        displayNotes();
}

  // validate inputs
//   if(titleInput.value.length > 0 && noteInput.value.length > 0){
//     const newNote = new Note(titleInput.value, noteInput.value);
//     addNoteToList(newNote);
//     addNotesToLocalStorage(newNote);
//     titleInput.value = '';
//     noteInput.value = '';
//     showAlertMessage('Note successfully added', 'success-message');
//     titleInput.focus();
//   } else {
//     showAlertMessage('Please add both a title and a note', 'alert-message');
//   }
// });
displayNotes();