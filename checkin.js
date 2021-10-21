console.log("Hi there");
let addBtn = document.querySelector("#add");
let vipBtn = document.querySelector("#vip");
let deleteBtn = document.querySelector("#remove");
let textInput = document.querySelector("#person");
let ol = document.querySelector("#myOl");
let emptyList = document.querySelector(".queue");

let personListArray = []; 

function add(){
  if(textInput.value === ""){
    alert("Input is empty. Please enter the person!");
  }
  else{
    personListArray.push(textInput.value.toLowerCase()); 
    let li = document.createElement("li"); 
    li.innerHTML = textInput.value; 
    textInput.value = ""; 
    ol.appendChild(li); 
    console.log(personListArray);
  }
}

addBtn.addEventListener("click", ()=>{
  add();
});  

vipBtn.onclick = function(){
  if(textInput.value === ""){
    alert("Input is empty! Please, write in a VIP person to fast-track."); 
  }
  else{
    add(); 
    ol.prepend(ol.lastElementChild); 
  }
}

deleteBtn.onclick = function(){ 
    ol.removeChild(ol.firstElementChild); //räcker bara med den rad
    emptyLine();
}

let emptyLine = () =>{
  if (myOl.childElementCount > 0){
    emptyList.innerHTML = ""
  } 
  else{
    alert("Line is empty!");
  }
}
