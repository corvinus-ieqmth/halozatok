var jóVálasz;
var questionId = 4
var kerdesek;
var kerdesSorszam = 0;

var hotList = [];
var questionsInHotList = 3; 
var displayedQuestion;      
var numberOfQuestions;      
var nextQuestion = 1; 

var hotList = [];
var questionsInHotList = 3;

var displayedQuestion;      
var numberOfQuestions;      
var nextQuestion = 1; 

 function letöltés() {

    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }


    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}


function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    KerdesMegjelenites(0)
}

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { 
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
            }
        );
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
window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre_gomb").onclick = előre;
    document.getElementById("vissza_gomb").onclick = vissza;
    kérdésBetöltés(questionId)
}
function választás(n) {
    if (n != jóVálasz) {
        document.getElementById(`válasz${n}`).classList.add("rossz");
        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
    }
    else {
        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
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
function kérdésMegjelenítés(kérdés) {
    let kérdés = hotList[displayedQuestion].question; 
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    jóVálasz = kérdés.correctAnswer;
    if (kérdés.image) {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép").classList.add("rejtett")
    }
    //Jó és rossz kérdések jelölésének levétele
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
}

function előre() {
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
}

function vissza() {
    questionId--;
    kérdésBetöltés(questionId)
}