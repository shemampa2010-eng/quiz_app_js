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
        question: "Qui a écrit 'Les Misérables' ?",
        reponse: "Victor Hugo"
    },
    {
        question: "Combien font 9 × 8 ?",
        reponse: "72"
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        reponse: "L'océan Pacifique"
    },
    {
        question: "Quel est le symbole chimique de l'eau ?",
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
        question: "Quel animal est connu comme le roi de la jungle ?",
        reponse: "Le lion"
    },
    {
        question: "Combien de côtés possède un hexagone ?",
        reponse: "6 côtés"
    },
    {
        question: "Quel est le plus grand mammifère du monde ?",
        reponse: "La baleine bleue"
    },
    {
        question: "Quelle est la langue la plus parlée au monde en nombre de locuteurs natifs ?",
        reponse: "Le chinois mandarin"
    },
    {
        question: "Quel est le système d'exploitation créé par Microsoft ?",
        reponse: "Windows"
    }
];

let index = 0

let questionBox = document.getElementById("question");

questionBox.textContent = questions[index].question;

let next = document.getElementById("next");

next.addEventListener("click", function(){

    index++;

    questionBox.textContent = questions[index].question;

});

questionBox.addEventListener("click", function(){
    questionBox.textContent = questions[index].reponse
    
})