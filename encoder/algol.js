let myModule = (function () {
'use strict';
let Caesar =document.querySelector('#Caesar'); 
let Key= document.querySelector('#Key'); 
let Polibiy =document.querySelector('#Polibiy'); 
let Vigener= document.querySelector('#Vigener');    
let codeIN = document.querySelector('#code');   
let wordIN = document.querySelector('#word');
let toCode = document.querySelector('#toCode');
let deCode = document.querySelector('#deCode');
let change = document.querySelector('#change');    
function CaesarCode (){
        let str=wordIN.value;
        let alphabet = ["А", "Б", "В", "Г", "Д", "Е",
                        "Є", "Ж", "З", "И", "І", "Ї",
                        "Й", "К", "Л", "М", "Н", "О",
                        "П", "Р", "С", "Т", "У", "Ф",
                        "Х", "Ц", "Ч", "Ш", "Щ", "Ь",
                        "Ю", "Я"],
            CodeWord="",
            k=+prompt('Введіть к');
    for(let i=0;i<str.length;i++){
        for(let j=0;j<alphabet.length;j++){
            if (str[i]===" "){
                CodeWord+=str[i];
                i++;
            }
            if(str[i]===alphabet[j]){
                CodeWord+=alphabet[(j+k)%alphabet.length];
            }
        }
        
    }   
    codeIN.value=CodeWord;  
}
function CaesarDecode (){
        let str=wordIN.value;
        let alphabet = ["А", "Б", "В", "Г", "Д", "Е",
                        "Є", "Ж", "З", "И", "І", "Ї",
                        "Й", "К", "Л", "М", "Н", "О",
                        "П", "Р", "С", "Т", "У", "Ф",
                        "Х", "Ц", "Ч", "Ш", "Щ", "Ь",
                        "Ю", "Я"],
            DecodeWord="",
            k=+prompt('Введіть к');
    for(let i=0;i<str.length;i++){
        for(let j=0;j<alphabet.length;j++){
            if (str[i]===" "){
                DecodeWord+=str[i];
                i++;
            }
            if(str[i]===alphabet[j]){
                DecodeWord+=alphabet[(j+alphabet.length-k)%alphabet.length];
            }
        }
        
    }   
   codeIN.value=DecodeWord;  
}
 function func1() {  
     if(toCode.checked===true && deCode.checked===false)
     {
        CaesarCode();
        }
    if(deCode.checked===true && toCode.checked===false){
        CaesarDecode();
        }}
    
function codeKeyword(key = "малюк") {
        let word = "",
            indexes = [],
            str=wordIN.value;
        for (let i = 0; i < (str.length % key.length); i++) {
            str += "_";
        }
        for (let i = 0; i < key.length; i++) {
            indexes[i] = {
                value: key.charCodeAt(i),
                index: i
            }
        }
        indexes.sort((a, b) => {
            return a.value - b.value;
        })
        for (let i = 0; i < key.length; i++) {
            for (let row = 0; row < str.length / key.length; row++) {
                word += str[row * key.length + indexes[i].index];
            }
        }
        codeIN.value=word;
    }
function decodeKeyword( key = "малюк") {
        let word = [],
            decode = "",
            indexes = [],
            str=wordIN.value,
            len = str.length / key.length;
        for (let i = 0; i < key.length; i++) {
            indexes[i] = {
                value: key.charCodeAt(i),
                index: i
            }
        }
        indexes.sort((a, b) => {
            return a.value - b.value;
        })
        for (let i = 0; i < key.length; i++) {
            word[indexes[i].index] = str.substr(i * len, len);
        }
        for (let j = 0; j < len; j++) {
            for (let i = 0; i < key.length; i++) {
                if (word[i][j] !== "_")
                    decode += word[i][j];
            }
        }
        codeIN.value = decode;
    }  
 function func2() {  
     if(toCode.checked===true && deCode.checked===false)
     {
        codeKeyword();
        }
    if(deCode.checked===true && toCode.checked===false){
        decodeKeyword();
        }}
    
function codePolibiy() {
        let letters = ["А", "Б", "В", "Г", "Д", "Е"],
            alphabet = [["А", "Б", "В", "Г", "Д", "Е"],
                        ["Є", "Ж", "З", "И", "І", "Ї"],
                        ["Й", "К", "Л", "М", "Н", "О"],
                        ["П", "Р", "С", "Т", "У", "Ф"],
                        ["Х", "Ц", "Ч", "Ш", "Щ", "Ь"],
                        ["Ю", "Я", ".", ",", "-", " "]],
            str=wordIN.value.toUpperCase(),
            table = {},
            code = "";
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                table[alphabet[i][j]] = letters[i] + letters[j];
            }
        }
        for (let i = 0; i < str.length; i++) {
            code += table[str[i]];
        }
        codeIN.value= code;
    }
function decodePolibiy(str) {
        let letters = ["А", "Б", "В", "Г", "Д", "Е"],
            alphabet = [["А", "Б", "В", "Г", "Д", "Е"],
                        ["Є", "Ж", "З", "И", "І", "Ї"],
                        ["Й", "К", "Л", "М", "Н", "О"],
                        ["П", "Р", "С", "Т", "У", "Ф"],
                        ["Х", "Ц", "Ч", "Ш", "Щ", "Ь"],
                        ["Ю", "Я", ".", ",", "-", " "]],
            str=wordIN.value,
            table = {},
            decode = "";
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                table[letters[i] + letters[j]] = alphabet[i][j];
            }
        }
        for (let i = 0; i < str.length; i += 2) {
            decode += table[str[i] + str[i + 1]];
        }
        codeIN.value= decode;
    }
 function func3() {  
     if(toCode.checked===true && deCode.checked===false)
     {
        codePolibiy();
        }
    if(deCode.checked===true && toCode.checked===false){
        decodePolibiy();
        }}

function Index(letter, alph) {
        for (let i = 0; i < alph.length; i++) {
            if (alph[i] === letter)
                return i;
        }
    }
function codeVigener( key = "МАЛЮК") {
        let alphabet = ["А", "Б", "В", "Г", "Д", "Е",
                        "Є", "Ж", "З", "И", "І", "Ї",
                        "Й", "К", "Л", "М", "Н", "О",
                        "П", "Р", "С", "Т", "У", "Ф",
                        "Х", "Ц", "Ч", "Ш", "Щ", "Ь",
                        "Ю", "Я"],
            str=wordIN.value.toUpperCase(),
            code = "";
        for (let i = 0; i < str.length / key.length; i++)
            key += key;
        key += key.substr(0, (str.length % key.length));
        for (let i = 0; i < str.length; i++) {
            code += str[i] === " " ? " " : alphabet[(Index(str[i], alphabet) + Index(key[i], alphabet)) % alphabet.length];
        }
        codeIN.value= code;
    }    
function decodeVigener( key = "МАЛЮК") {
        let alphabet = ["А", "Б", "В", "Г", "Д", "Е",
                        "Є", "Ж", "З", "И", "І", "Ї",
                        "Й", "К", "Л", "М", "Н", "О",
                        "П", "Р", "С", "Т", "У", "Ф",
                        "Х", "Ц", "Ч", "Ш", "Щ", "Ь",
                        "Ю", "Я"],
            str=wordIN.value,
            decode = "";
        for (let i = 0; i < str.length / key.length; i++)
            key += key;
        key += key.substr(0, (str.length % key.length));
        for (let i = 0; i < str.length; i++) {
            decode += str[i] === " " ? " " : alphabet[(Index(str[i], alphabet) - Index(key[i], alphabet) + alphabet.length) % alphabet.length];
        }
        codeIN.value= decode;
    }
 function func4() {  
     if(toCode.checked===true && deCode.checked===false)
     {
        codeVigener();
        }
    if(deCode.checked===true && toCode.checked===false){
        decodeVigener();
        }}
   
toCode.addEventListener("input",()=>{deCode.checked=false}); 
deCode.addEventListener("input",()=>{toCode.checked=false});
change.addEventListener("click",()=>{word.value=code.value;
                                    code.value="";});    
Caesar.addEventListener("click",func1);
Key.addEventListener("click",func2); 
Polibiy.addEventListener("click",func3);
Vigener.addEventListener("click",func4); 
wordIN.addEventListener("click",()=>{
                                      codeIN.value="";
                                      wordIN.value="";    
                                    })    
}());




