const questions = [
    {
        question: "What is 5 × 6?",
        choices: ["11", "30", "20", "26"],
        answer: 1,
        solution: "5 × 6 = 30"
    },
    {
        question: "What is H2O commonly known as?",
        choices: ["Oxygen", "Water", "Hydrogen", "Salt"],
        answer: 1,
        solution: "H2O is the chemical name for water."
    }
];

let current = 0;

function loadQuestion() {
    let q = questions[current];
    document.getElementById("question").innerText = q.question;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.choices.forEach((choice, index) => {
        let btn = document.createElement("div");
        btn.className = "choice";
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(index);
        choicesDiv.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
    document.getElementById("solution").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(index) {
    let q = questions[current];

    if (index === q.answer) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong!";
    }

    document.getElementById("solution").innerText = "Solution: " + q.solution;
    document.getElementById("next-button").style.display = "block";
}

document.getElementById("next-button").onclick = () => {
    current++;
    if (current >= questions.length) current = 0;
    loadQuestion();
};

// Load first question
loadQuestion();
