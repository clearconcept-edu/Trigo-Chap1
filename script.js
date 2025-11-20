// Correct answers for each question
// Q1 → option 2, Q2 → option 2, Q3 → option 2
// You can change these anytime!
const correctAnswers = {
    1: 2,
    2: 2,
    3: 2
};

function checkAnswer(optionClicked, button) {

    // Get question block
    const questionDiv = button.closest(".question");
    const questionNumber = Array.from(document.querySelectorAll(".question")).indexOf(questionDiv) + 1;

    // Remove old feedback if exists
    let oldFeedback = questionDiv.querySelector(".feedback");
    if (oldFeedback) oldFeedback.remove();

    // Create feedback box
    const feedback = document.createElement("div");
    feedback.className = "feedback";
    feedback.style.marginTop = "10px";
    feedback.style.padding = "10px";
    feedback.style.border = "1px solid #ddd";
    feedback.style.borderRadius = "8px";
    feedback.style.background = "#f9f9f9";

    // 🟩 Correct Answer
    if (optionClicked === correctAnswers[questionNumber]) {
        feedback.innerHTML = `
            <p style="color: green; font-weight: bold; font-size: 18px;">✔ Correct answer!</p>
            <p><strong>Solution:</strong> Good job! You selected the right answer.</p>
        `;
    } 
    // 🟥 Wrong Answer
    else {
        feedback.innerHTML = `
            <p style="color: red; font-weight: bold; font-size: 18px;">✘ Wrong answer.</p>
            <p><strong>Solution:</strong> The correct option is: ${correctAnswers[questionNumber]}</p>
        `;
    }

    questionDiv.appendChild(feedback);
}
