let questions = [
    {
        question: "Quel est le plus grand pays du monde par superficie ?",
        reponse: "Russie"
    },
    {
        question: "Combien de temps met la Terre à faire le tour du Soleil ?",
        reponse: "1 an"
    },
    {
        question: "Qui a écrit 'Roméo et Juliette' ?",
        reponse: "Shakespeare"
    },
    {
        question: "Quel est le sport national du Rwanda le plus populaire ?",
        reponse: "Football"
    },
    {
        question: "Combien de temps dure un match de football (temps réglementaire) ?",
        reponse: "90 minutes"
    },
    {
        question: "Quel est le plus grand pays d'Afrique par superficie ?",
        reponse: "Algerie"
    },
    {
        question: "Quel est l'organe qui permet de respirer ?",
        reponse: "Poumons"
    },
    {
        question: "Quelle entreprise a créé l'iPhone ?",
        reponse: "Apple"
    },
    {
        question: "Quel est le métal le plus utilisé au monde ?",
        reponse: "Fer"
    },
    {
        question: "Qui a découvert la pénicilline ?",
        reponse: "Fleming"
    },
    {
        question: "Quel pays a la plus grande population du monde ?",
        reponse: "Inde"
    },
    {
        question: "Combien de temps met la lumière du Soleil à atteindre la Terre ?",
        reponse: "8 minutes"
    },
    {
        question: "Quel est le nom du plus grand lac d'Afrique ?",
        reponse: "Lac Victoria"
    },
    {
        question: "Combien de temps dure une révolution de la Lune autour de la Terre ?",
        reponse: "1 mois"
    },
    {
        question: "Quel est l'instrument utilisé pour mesurer la température ?",
        reponse: "Thermometre"
    },
    {
        question: "Quel est le nom de la voie lactée en anglais ?",
        reponse: "Milky Way"
    },
    {
        question: "Quel pays a inventé le papier ?",
        reponse: "Chine"
    },
    {
        question: "Quel est le plus grand pays d'Amérique du Sud ?",
        reponse: "Bresil"
    },
    {
        question: "Combien de dents a un adulte en moyenne ?",
        reponse: "32"
    },
    {
        question: "Quelle est la capitale de l'Égypte ?",
        reponse: "Le Caire"
    },
    {
        question: "Quel est le principal gaz que respirent les humains ?",
        reponse: "Oxygene"
    },
    {
        question: "Qui a fondé Microsoft ?",
        reponse: "Bill Gates"
    },
    {
        question: "Quel est le plus long os du corps humain ?",
        reponse: "Femur"
    },
    {
        question: "Combien de temps faut-il pour qu'un cœur humain batte en moyenne 1 fois ?",
        reponse: "1 seconde"
    },
    {
        question: "Quelle est la monnaie utilisée au Japon ?",
        reponse: "Yen"
    },
    {
        question: "Quel est le plus grand empire de l'histoire par superficie ?",
        reponse: "Empire britannique"
    },
    {
        question: "Combien de temps dure un jour sur Mars environ ?",
        reponse: "24 heures"
    },
    {
        question: "Quel est le fruit le plus cultivé au monde ?",
        reponse: "Tomate"
    },
    {
        question: "Qui a peint la chapelle Sixtine ?",
        reponse: "Michel-Ange"
    },
    {
        question: "Quelle est la capitale du Canada ?",
        reponse: "Ottawa"
    },
    {
        question: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?",
        reponse: "CO2"
    },
    {
        question: "Quel réseau social a été créé par Mark Zuckerberg ?",
        reponse: "Facebook"
    },
    {
        question: "Quel est l'animal terrestre le plus lent ?",
        reponse: "Escargot"
    },
    {
        question: "Combien de temps dure une grossesse humaine environ ?",
        reponse: "9 mois"
    },
    {
        question: "Quelle est la capitale de la Corée du Sud ?",
        reponse: "Seoul"
    },
    {
        question: "Quel est l'élément chimique le plus léger ?",
        reponse: "Hydrogene"
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        reponse: "Victor Hugo"
    },
    {
        question: "Quel est le plus grand stade de football au monde ?",
        reponse: "Rungrado"
    },
    {
        question: "Combien de temps met le son à parcourir 1 km environ ?",
        reponse: "3 secondes"
    },
    {
        question: "Quel pays organise la Coupe du monde 2026 ?",
        reponse: "Etats-Unis"
    },
    {
        question: "Quel est l'oiseau qui ne peut pas voler mais court très vite ?",
        reponse: "Autruche"
    },
    {
        question: "Quel est le nom du fondateur d'Amazon ?",
        reponse: "Jeff Bezos"
    },
    {
        question: "Quelle est la capitale de l'Espagne ?",
        reponse: "Madrid"
    },
    {
        question: "Combien de continents sont traversés par l'équateur ?",
        reponse: "3"
    },
    {
        question: "Quel est le plus vieux sport olympique ?",
        reponse: "Athletisme"
    },
    {
        question: "Quel est le nom scientifique de l'étoile la plus proche de la Terre ?",
        reponse: "Soleil"
    },
    {
        question: "Quelle est la capitale de la Chine ?",
        reponse: "Pekin"
    },
    {
        question: "Quel est le plus grand mammifère marin ?",
        reponse: "Baleine bleue"
    },
    {
        question: "Combien de temps faut-il à un avion pour traverser l'Atlantique environ ?",
        reponse: "7 heures"
    },
    {
        question: "Quel pays a offert la Statue de la Liberté aux États-Unis ?",
        reponse: "France"
    }
]

let index = 0;

let scoreDisplay = document.getElementById("score");
let score = 0;

let num = document.getElementById("num");

function afficherQuestion() {
    questionBox.textContent = questions[index].question;
    questionBox.classList.remove("active");
    voirRep.classList.add("voirRep");
    num.textContent = "Question " + (index + 1) + "/" + questions.length;
}

let questionBox = document.getElementById("question");

questionBox.textContent = questions[index].question;

let next = document.getElementById("next");

let input = document.getElementById("reponse");
let verifier = document.getElementById("verifier");
let voirRep = document.getElementById("voirRep");


next.addEventListener("click", function() {

    if (index >= questions.length - 1) {
        return;
    }

    index++;

    afficherQuestion();
    questionBox.style.backgroundColor = "white";
});





let before = document.getElementById("before");

before.addEventListener("click", function() {

    if (index <= 0) {
        return;
    }

    index--;

    afficherQuestion();

});


function afficherScore() {
    scoreDisplay.textContent = "Score : " + score + "/" + [index + 1];
}

verifier.addEventListener("click", function() {

    if (input.value === questions[index].reponse) {

        questionBox.classList.add("active");
        questionBox.textContent = "Bonne réponse !";
        score = score + 1
        
    } else {

        questionBox.style.backgroundColor = "red";
        questionBox.textContent = "Mauvaise réponse !";

        voirRep.classList.remove("voirRep");
    }
    afficherScore()
    input.value = "";
    input.focus();

});


voirRep.addEventListener("click", function() {


    questionBox.textContent = questions[index].reponse;
    questionBox.style.backgroundColor = "white";
    questionBox.classList.add("active")
});



