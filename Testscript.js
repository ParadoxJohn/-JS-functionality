const questionsData = [ 
    { 
        question: "Що означає HTML?", 
        answers: [ 
            { id: "a", label: "Hyper Text Markup Language", correct: true }, 
            { id: "b", label: "High Technology Modern Language", correct: false }, 
            { id: "c", label: "Happy Text Making Language", correct: false } 
        ] 
    }, 
    { 
        question: "Що означає CSS?", 
        answers: [ 
            { id: "a", label: "Cascading Style Sheets", correct: true }, 
            { id: "b", label: "Creative Styling System", correct: false }, 
            { id: "c", label: "Computer Style Selection", correct: false } 
        ] 
    }, 
    { 
        question: "Що означає JavaScript?", 
        answers: [ 
            { id: "a", label: "Мова програмування, використовується для створення структури веб-сторінок.", correct: false }, 
            { id: "b", label: "Мова програмування, використовується для створення інтерактивності на вебсайтах.", correct: true }, 
            { id: "c", label: "Мова програмування, використовується для створення стилів на веб-сайтах.", correct: false } 
        ] 
    }, 
    { 
        question: "Як розшифровується Json?", 
        answers: [ 
            { id: "a", label: "Java Sense of Notation", correct: false }, 
            { id: "b", label: "JavaScript Objext Note", correct: false }, 
            { id: "c", label: "JavaScript Object Notation", correct: true } 
        ]
    }, 
    { 
        question: "Які технології вважаються основними для Frontend?", 
        answers: [ 
            { id: "a", label: "Python, C++, Java", correct: false }, 
            { id: "b", label: "HTML, CSS, JS", correct: true }, 
            { id: "c", label: "C#, Java, Pascal", correct: false } 
        ] 
    }
];

function createQuestions() {
    const questionsContainer = document.getElementById("questions"); 
    questionsData.forEach((data, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        const questionHeading = document.createElement("h3");
        questionHeading.textContent = data.question;
        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("options-container");

        data.answers.forEach(answer => {
            const labelCheckbox = document.createElement("div");
            labelCheckbox.classList.add("label-checkbox");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${index + 1}`;
            input.value = answer.id;
            input.id = answer.id;
            const label = document.createElement("label");
            label.htmlFor = answer.id;
            label.textContent = answer.label;
            const span = document.createElement("span");
            labelCheckbox.appendChild(input);
            labelCheckbox.appendChild(label);
            labelCheckbox.appendChild(span);
            optionsContainer.appendChild(labelCheckbox);
        });
        questionDiv.appendChild(questionHeading);
        questionDiv.appendChild(optionsContainer);
        questionsContainer.appendChild(questionDiv);
    });
}

createQuestions();

function checkAnswers() {
    const questionsContainer = document.getElementById("questions");
    const questions = questionsContainer.querySelectorAll(".question");
    let correctAnswers = 0;

    questions.forEach((question, index) => {
        const selectedAnswerId = document.querySelector(`input[name="q${index + 1}"]:checked`).value;
        const selectedAnswer = questionsData[index].answers.find(answer => answer.id === selectedAnswerId);
        if (selectedAnswer && selectedAnswer.correct) {
            question.classList.remove('incorrect');
            question.classList.add('correct');
            correctAnswers++;
        } else {
            question.classList.remove('correct');
            question.classList.add('incorrect');
        }
    });
    const totalQuestions = questionsData.length;
    document.getElementById('result').innerText = `Ви відповіли правильно на ${correctAnswers} з ${totalQuestions} питань.`;
}