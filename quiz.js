let questions = [
    {
        question: "Quelle est la capitale du Rwanda ?",
        reponse: "Kigali"
    },
    {
        question: "Combien y a-t-il de continents sur Terre ?",
        reponse: "7 continents"
    },
    {
        question: "Quel langage de programmation apprends-tu actuellement ?",
        reponse: "JavaScript"
    },
    {
        question: "Quelle planète est surnommée la planète rouge ?",
        reponse: "Mars"
    },
    {
        question: "Qui a écrit Les Misérables ?",
        reponse: "Victor Hugo"
    },
    {
        question: "Combien font 9 × 8 ?",
        reponse: "72"
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        reponse: "Océan Pacifique"
    },
    {
        question: "Quelle est la formule chimique de l'eau ?",
        reponse: "H₂O"
    },
    {
        question: "Dans quel pays se trouve la tour Eiffel ?",
        reponse: "France"
    },
    {
        question: "Qui a développé la théorie de la relativité ?",
        reponse: "Albert Einstein"
    },
    {
        question: "Quel animal est appelé le roi de la jungle ?",
        reponse: "Le lion"
    },
    {
        question: "Combien de côtés possède un hexagone ?",
        reponse: "6"
    },
    {
        question: "Quel est le plus grand mammifère du monde ?",
        reponse: "La baleine bleue"
    },
    {
        question: "Quel est le système d'exploitation de Microsoft ?",
        reponse: "Windows"
    },
    {
        question: "Quelle est la plus grande planète du système solaire ?",
        reponse: "Jupiter"
    },
    {
        question: "Qui a peint la Joconde ?",
        reponse: "Léonard de Vinci"
    },
    {
        question: "Combien font 15 + 27 ?",
        reponse: "42"
    },
    {
        question: "Quelle est la capitale du Japon ?",
        reponse: "Tokyo"
    },
    {
        question: "Quel organe permet de respirer ?",
        reponse: "Les poumons"
    },
    {
        question: "Quel est le plus grand continent ?",
        reponse: "L'Asie"
    },
    {
        question: "Combien de joueurs composent une équipe de football sur le terrain ?",
        reponse: "11 joueurs"
    },
    {
        question: "Quel pays a inventé la pizza moderne ?",
        reponse: "L'Italie"
    },
    {
        question: "Quelle est la vitesse de la lumière environ ?",
        reponse: "300 000 km/s"
    },
    {
        question: "Quel est le langage utilisé pour structurer une page web ?",
        reponse: "HTML"
    },
    {
        question: "Quel langage sert principalement à styliser une page web ?",
        reponse: "CSS"
    },
    {
        question: "Qui est l'auteur de Harry Potter ?",
        reponse: "J.K. Rowling"
    },
    {
        question: "Quelle est la capitale de l'Espagne ?",
        reponse: "Madrid"
    },
    {
        question: "Combien de minutes y a-t-il dans une heure ?",
        reponse: "60 minutes"
    },
    {
        question: "Quel est le symbole chimique de l'or ?",
        reponse: "Au"
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        reponse: "L'Everest"
    },
    {
        question: "Quel pays est surnommé le pays du Soleil-Levant ?",
        reponse: "Le Japon"
    },
    {
        question: "Quel est le plus grand désert du monde ?",
        reponse: "L'Antarctique (désert froid)"
    },
    {
        question: "Combien de dents possède généralement un adulte ?",
        reponse: "32 dents"
    },
    {
        question: "Quelle est la capitale de la France ?",
        reponse: "Paris"
    },
    {
        question: "Quel animal pond des œufs et produit du lait ?",
        reponse: "L'ornithorynque"
    },
    {
        question: "Quel est le nom du premier homme sur la Lune ?",
        reponse: "Neil Armstrong"
    },
    {
        question: "Quel est le plus grand pays du monde en superficie ?",
        reponse: "La Russie"
    },
    {
        question: "Quel est le nombre de jours dans une année normale ?",
        reponse: "365 jours"
    },
    {
        question: "Quel est le contraire de 'rapide' ?",
        reponse: "Lent"
    },
    {
        question: "Quel est le rôle principal du CPU dans un ordinateur ?",
        reponse: "Exécuter les instructions"
    },
    {
        question: "Que signifie HTML ?",
        reponse: "HyperText Markup Language"
    },
    {
        question: "Que signifie CSS ?",
        reponse: "Cascading Style Sheets"
    },
    {
        question: "Quel est le plus grand réseau informatique mondial ?",
        reponse: "Internet"
    },
    {
        question: "Quel sport utilise un ballon orange ?",
        reponse: "Basketball"
    },
    {
        question: "Combien de joueurs y a-t-il dans une équipe de basketball sur le terrain ?",
        reponse: "5 joueurs"
    },
    {
        question: "Quel est le pays d'origine du judo ?",
        reponse: "Le Japon"
    },
    {
        question: "Quel est le nom du héros principal de One Piece ?",
        reponse: "Monkey D. Luffy"
    },
    {
        question: "Combien de lettres possède l'alphabet français ?",
        reponse: "26 lettres"
    },
    {
        question: "Quel est le métal utilisé principalement dans les câbles électriques ?",
        reponse: "Le cuivre"
    },
    {
        question: "Quelle est la capitale de l'Italie ?",
        reponse: "Rome"
    }
];

let index = 0

let num = document.getElementById("num")

function afficherQuestion(){
    questionBox.textContent = questions[index].question;
    questionBox.classList.remove("active")
    num.textContent = "Question " + (index + 1) + "/" + questions.length;
}

let questionBox = document.getElementById("question");

questionBox.textContent = questions[index].question;

let next = document.getElementById("next");

let input = document.getElementById("reponse");
let verifier = document.getElementById("verifier");

next.addEventListener("click", function(){

    if (index >= questions.length - 1) {
        return;
    }
    index++;

    afficherQuestion();
    questionBox.style.backgroundColor = "white";
});

questionBox.addEventListener("click", function(){
    questionBox.textContent = questions[index].reponse
    questionBox.classList.add("active")
    
})

let before = document.getElementById("before")

before.addEventListener("click", function(){
    if (index <= 0){
        return;
    }
    index--
    afficherQuestion();    
})

verifier.addEventListener("click", function () {

    
    if (input.value === questions[index].reponse) {

        questionBox.classList.add("active");
        questionBox.textContent = "Bonne réponse !";

    } else {

        questionBox.style.backgroundColor = "red";
        questionBox.textContent = "Mauvaise réponse !";

    }

    input.value = ""
    input.focus();
});

