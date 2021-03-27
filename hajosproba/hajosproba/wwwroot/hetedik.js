var kerdesek;
var kerdesSorszam = 0;

 function letöltés() {

    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    KerdesMegjelenites(0)
}


window.onload = function () {
    
    letöltés();

    document.getElementById("vissza").onclick = function () {
        kerdesSorszam--;
        if (kerdesSorszam == -1) {
            KerdesMegjelenites(2);
        }
    }

    document.getElementById("előre").onclick = function () {
        kerdesSorszam++;
        if (kerdesSorszam == 3) {
            KerdesMegjelenites(0)
        }
    }
    
}

function KerdesMegjelenites(kerdesSzam) {
    let kerdes_szoveg = document.getElementById("kérdés_szöveg")
    let kep = document.getElementById("kép1");
    let valasz1 = document.getElementById("válasz1");
    let valasz2 = document.getElementById("válasz2");
    let valasz3 = document.getElementById("válasz3");

    kerdes_szoveg.innerHTML = kerdesek[kerdesSzam].questionText
    kep.src = "https://szoft1.comeback.hu/hajo/" + kerdesek[kerdesSzam].image
    valasz1.innerText = kerdesek[kerdesSzam].answer1
    valasz2.innerText = kerdesek[kerdesSzam].answer2
    valasz3.innerText = kerdesek[kerdesSzam].answer3



}
