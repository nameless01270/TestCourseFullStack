
class Question {
    
    $btnAnswer01;
    $btnAnswer02;
    $btnAnswer03;
    $btnAnswer04;
    $formQuestion;

    constructor() {
        
        this.$btnAnswer01 = document.createElement("button");
        this.$btnAnswer01.innerHTML = "Answer 1";
        this.$btnAnswer01.classList.add("bg-white", "p-4", "text-purple-800", "rounded", "shadow", "mb-4");
        this.$btnAnswer01.id = "answer01";

        this.$btnAnswer02 = document.createElement("button");
        this.$btnAnswer02.innerHTML = "Answer 2";
        this.$btnAnswer02.classList.add("bg-white", "p-4", "text-purple-800", "rounded", "shadow", "mb-4");
        this.$btnAnswer02.id = "answer02";

        this.$btnAnswer03 = document.createElement("button");
        this.$btnAnswer03.innerHTML = "Answer 3";
        this.$btnAnswer03.classList.add("bg-white", "p-4", "text-purple-800", "rounded", "shadow", "mb-4");
        this.$btnAnswer03.id = "answer03";

        this.$btnAnswer04 = document.createElement("button");
        this.$btnAnswer04.innerHTML = "Answer 4";
        this.$btnAnswer04.classList.add("bg-white", "p-4", "text-purple-800", "rounded", "shadow", "mb-4");
        this.$btnAnswer04.id = "answer04";

        this.$formQuestion = document.createElement("form");

    };

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");

        const title = document.createElement("h2");
        title.innerHTML = "This is question fsafsafsfsafsfasfefsff";
        title.classList.add("text-2xl");
        title.id = "question";

        div2.classList.add("bg-white", "text-purple-800", "p-10", "rounded-lg", "shadow-md");
        
        div2.appendChild(title);
        div1.classList.add("grid", "grid-cols-2", "gap-6", "mt-6"); 
        
        flexContainer.appendChild(div2);
        div1.appendChild(this.$btnAnswer01);
        div1.appendChild(this.$btnAnswer02);
        div1.appendChild(this.$btnAnswer03);
        div1.appendChild(this.$btnAnswer04);

        flexContainer.appendChild(div1);

        this.$formQuestion.appendChild(flexContainer);
        container.appendChild(this.$formQuestion);
        
    }

}
const container = document.getElementById("app");

const question = new Question;

question.initRender(container);

const thisQuestion = document.getElementById("question");
console.log(thisQuestion.innerHTML);

const answer01 = document.getElementById("answer01");
const answer02 = document.getElementById("answer02");
const answer03 = document.getElementById("answer03");
const answer04 = document.getElementById("answer04");

const api = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";

let quiz = [];

function getQuestions(){
    let response = fetch(api);
    response.then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
       
        const result = data.results;
        console.log(result);

        thisQuestion.innerHTML = result[0].question;
        answer01.innerHTML = result[0].correct_answer;
        answer02.innerHTML = result[0].incorrect_answers[2];
        answer03.innerHTML = result[0].incorrect_answers[0];
        answer04.innerHTML = result[0].incorrect_answers[1];
    });
}
getQuestions();
