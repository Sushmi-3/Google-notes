function red(){
  document.getElementById('text').style.background ="LightCoral";
  // let isUpdate=true;
}

function blue(){
  document.getElementById('text').style.background ="LightCoral";
  // let isUpdate=false;
}

const addBox =document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box");

popupTitle = popupBox.querySelector("header p");
closeIcon = popupBox.querySelector("header i");
titleTag = popupBox.querySelector("input"),
desTag = popupBox.querySelector(".des"),
addBtn = popupBox.querySelector("button");

const notes =JSON.parse(localStorage.getItem("notes")||"[]"); 

addBox.addEventListener("click",()=>{
 
  popupBox.classList.add("show");
});

addBtn.addEventListener("click",v=>{
  v.preventDefault();
  let noteTitle = titleTag.value,
  noteDesc =desTag.value;
  if(noteTitle || noteDesc){
      
      let noteInfo ={
          title:noteTitle,description:noteDesc
      }
      if(!isUpdate){
          notes.push(noteInfo);
      }
      else{
          isUpdate=false;
          notes[updateId]=noteInfo;
      }
      
      notes.push(noteInfo);//adding new note to notes
      //saving notes to localstorage
      localStorage.setItem("notes",JSON.stringify(notes));
      closeIcon.click();
      showNotes();
  }
      
  
})


let isUpdate = false,updateId;
function updateNote(noteId,title,desc){
  isUpdate =true;
  updateId=noteId; 
  addBox.click();
  titleTag.value =title;
  desTag.value =desc;
  addBtn.innerText ="update note";
  // popupTitle.innerText ="update a note";
  console.log(noteId,title,desc);
}


function deleteNote(noteId){
  notes.splice(noteId,1);
  localStorage.setItem("notes",JSON.stringify(notes));
  showNotes();
}
function showNotes(){
  document.querySelectorAll(".note").forEach(note=>note.remove());
  notes.forEach((note,index)=>{
      let liTag=`<li class="note">
      <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
      </div>
      <div class="bottom-content">
       
        <div class="settings">
          <i onclick="showMenu(this)"class="uil uil-ellipsis-h"></i>
          <ul class="menu">
            <li onclick ="updateNote(${index},'${note.title}','${note.description}')">
            <i class="uil uil-pen"></i>edit</li>
            <li onclick ="deleteNote(${index})"><i class="uil uil-trash"></i>delete</li>
          </ul>
        </div>
      </div>
    </li>`
    addBox.insertAdjacentHTML("afterend",liTag);
  });
}
showNotes();

function showMenu(choose){
  choose.parentElement.classList.add("show");
  document.addEventListener("click",e =>{
      if(e.target.tagName !="I" || e.target !=choose){
          choose.parentElement.classList.remove("show");
      }
  });
}

closeIcon.addEventListener("click",()=>{
  ISUpdate =false;
  titleTag.value ="";
  desTag.value ="";
 
  popupBox.classList.remove("show");
});

function updateNote(noteId,title,desc){
  isUpdate =true;
  updateId=noteId; 
  addBox.click();
  titleTag.value =title;
  desTag.value =desc;

  console.log(noteId,title,desc);
}