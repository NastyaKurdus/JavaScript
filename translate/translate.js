var myModule = (function () {
'use strict';
    let word={
        pen:"ручка",
        table:"стол",
        wolf:"волк"
    };
    let text1=document.querySelector("#text1");
    let text2=document.querySelector("#text2");
    let button=document.querySelector("#button");
    function translate(){
        if(text1.value !== ""){
            for(let key in word){
                if(key===text1.value){
                     text2.value=word[key];                     
                }
            }
            if(text2.value===""){
                alert("Слово не найдено");
            }
        }
        else{
            alert("Введите слово");
        }
    }
    button.addEventListener("click",translate);
    text1.addEventListener("input",()=>{text2.value="";})
}());