var myModule = (function () {
'use strict';
let text =document.querySelector("#text");
let button=document.querySelector("#button");
let div=document.querySelector("#list");
   
function add(){
    if (text.value !== ""){
     let p=document.createElement('p');    
     let  textElem = document.createTextNode(text.value);
     let deleteButton=document.createElement('input');
        deleteButton.setAttribute('type','button');
        deleteButton.value="Удалить";
    div.appendChild(textElem);
    text.value=""; 
    div.appendChild(deleteButton); 
    div.appendChild(p);
    deleteButton.addEventListener("click",()=>{
        deleteButton.previousSibling.remove();
        deleteButton.remove();});    
    }
    else {
        alert("Введите текст");
    }
}    
button.addEventListener("click",add);

}());