"use strict";
(function () {
    let arrWord = ["apple", "peach", "car", "phone","children","peace","world","dream","country"],
        arrPicture = [],
        rand = Math.floor(Math.random() * arrWord.length),
        playWord = arrWord[rand].toUpperCase(),
        count = 6,
        trueAlfa = 0,
        helpcount = 2;
    for (let i = 65; i <= 90; i++) {
        addElem("input", "alfa", "button", String.fromCharCode(i), ".button").addEventListener("click", findPos);
    }
    makeField();
    for (let i = 0; i <= 6; i++) {
        let picture = document.createElement("img");
        picture.src = "count" + i + ".png";
        arrPicture.push(picture);
    }
    addElem("input", "show", "button", "Show word", "#footer").addEventListener("click", buttonShow);
    addElem("input", "help", "button", "Help", "#footer").addEventListener("click", help);

    function addElem(nameElem, id, type, value, nameSelec) {
        let nameObj = document.createElement(nameElem);
        nameObj.id = id;
        nameObj.type = type;
        nameObj.value = value;
        document.querySelector(nameSelec).appendChild(nameObj);
        return nameObj;
    }

    function makeField() {
        for (let i = 0; i < playWord.length; i++) {
            addElem("input", "place", "text", "_", "#word").disabled = true;
        }
    }

    function findPos() {
        let foundPos = playWord.indexOf(this.value, 0);
        this.disabled = true;
        if (foundPos === -1) {
            this.id = "false";
            changePicture();
            isLost();
        } else {
            do {
                if (document.querySelector("#word").children[foundPos].value === "_") {
                    trueAlfa++;
                    document.querySelector("#word").children[foundPos].value = this.value;
                }
                foundPos = playWord.indexOf(this.value, foundPos + 1);
            } while (foundPos !== -1);
            this.id = "true";
            isWin();
        }
    }

    function changePicture() {
        document.querySelector("#moves").innerHTML = --count;
        document.querySelector("#picture").replaceChild(arrPicture[count], document.querySelector("#picture").children[0]);
    }

    function isWin() {
        if (trueAlfa === playWord.length) {
            document.querySelector("#footer").removeChild(document.querySelector("#help"));
            trueORfalse('Congratulations,you win--->', 'win', 'Next word');
            for (let i = 0; i <= 25; i++) {
                document.querySelector(".button").children[i].disabled = true;
            }
            return true;
        }
        return false;
    }

    function isLost() {
        if (count === 0) {
            Show();
            document.querySelector("#footer").removeChild(document.querySelector("#help"));
            trueORfalse("Sorry,you lost --->", "lost", "Try again!");
            return true;
        }
        return false;
    }

    function trueORfalse(text, id, value) {
        document.querySelector("#footer").replaceChild(document.createTextNode(text), document.querySelector("#show"));
        let obj = addElem("input", id, "button", value, "#footer");
        obj.addEventListener("click", start);
    }

    function help() {
        let rand = Math.floor(Math.random() * playWord.length);
        while (document.querySelector("#word").children[rand].value !== "_") {
            rand = Math.floor(Math.random() * playWord.length);
        }
        document.querySelector("#word").children[rand].value = playWord[rand];
        changePicture();
        trueAlfa++;
        document.querySelector("#helps").innerHTML = --helpcount;
        if (helpcount === 0) {
            this.disabled = true;
        }
        return (isWin() || isLost());
    }

    function Show() {
        for (let i = 0; i < playWord.length; i++) {
            document.querySelector("#word").children[i].value = playWord.charAt(i);
        }
        for (let i = 0; i <= 25; i++) {
            document.querySelector(".button").children[i].disabled = true;
        }
    }

    function buttonShow() {
        Show();
        document.querySelector("#moves").innerHTML = (count = 0);
        document.querySelector("#picture").replaceChild(arrPicture[count], document.querySelector("#picture").children[0]);
        addElem("input", "lost", "button", "Try again!", "#footer").addEventListener("click", start);
        document.querySelector("#footer").replaceChild(document.querySelector("#lost"), document.querySelector("#show"));
        document.querySelector("#footer").removeChild(document.querySelector("#help"));
    }

    function start() {
        this.remove();
        rand = Math.floor(Math.random() * arrWord.length);
        playWord = arrWord[rand].toUpperCase();
        trueAlfa = 0;
        document.querySelector("#moves").innerHTML = (count = 6);
        document.querySelector("#helps").innerHTML = (helpcount = 2);
        let newAlfa = document.querySelector(".button").children;
        let newPlace = document.querySelector("#word").childNodes;
        addElem("input", "show", "button", "Show Word", "#footer").addEventListener("click", buttonShow);
        addElem("input", "help", "button", "Help", "#footer").addEventListener("click", help);
        document.querySelector("#footer").replaceChild(document.querySelector("#show"),
            document.querySelector("#footer").firstChild);
        document.querySelector("#picture").replaceChild(arrPicture[count],
            document.querySelector("#picture").children[0]);
        for (let i = 0; i < newAlfa.length; i++) {
            newAlfa[i].id = "alfa";
            newAlfa[i].disabled = false;
        }
        let numPlace = newPlace.length;
        for (let i = 0; i < numPlace; i++) {
            newPlace[0].remove();
        }
        makeField();
    }
}());
