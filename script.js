const answerList = document.querySelector(".answerList");
const nextQuestionBtn = document.querySelector(".nextQuestionBtn");
const timerDisplay = document.querySelector(".timeDuration");
const questionStatus = document.querySelector(".status");
const examContainer = document.querySelector(".examContainer");
const resultContainer = document.querySelector(".resultContainer");
const subjectContainer = document.querySelector(".subjectContainer");

let quizCategory = "Python";
const questionIndexHistory = [];
let currentQuestion = null;
let correctAnswersCount = 0;
let numberOfQuestions = 10;
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;



// get random questions
const getRandomQuestions = () => {
    let categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if(questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions))
    {
        return showQuizResult();
    }

    // Filter the questions which already appeared
    const availableQuestions = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// Render questions and answers into the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestions();
    if (!currentQuestion) return;
    resetTimer();
    startTimer();

    // Update the UI
    examContainer.querySelector(".headingText").innerHTML = quizCategory;
    answerList.innerHTML="";
    nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> out of <b>${numberOfQuestions}</b> Questions.`;

    // create option <li> and append them
    currentQuestion.options.forEach((option,index) =>{
        const li = document.createElement("li");
        li.classList.add("answer");
        li.textContent = option;
        answerList.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
}

// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const iscorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(iscorrect ? 'correctAnswer' : 'incorrectAnswer');
    !iscorrect ? highlightCorrectAnswer() : correctAnswersCount++;

    const iconHtml = `<span class="material-symbols-rounded">${iscorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHtml);

    // Disable other options when one is chosed.
    answerList.querySelectorAll(".answer").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible";
}

// HighLight correct Answer
const highlightCorrectAnswer = () => {
    const correctOption = answerList.querySelectorAll(".answer")[currentQuestion.correctAnswer];
    correctOption.classList.add("correctAnswer");
    const iconHtml = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHtml);
}

// Reset The Time when the question chnages
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
    examContainer.querySelector(".timer").style.background = "gray";
    examContainer.querySelector(".timer").style.color = "#fff";
}

// Set the timer when the quiz starts
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;
        if(currentTime <= 0)
        {
            clearInterval(timer);
            highlightCorrectAnswer();

            // Disable options selection
            answerList.querySelectorAll(".answer").forEach(option => option.style.pointerEvents = "none");
            nextQuestionBtn.style.visibility = "visible";
        }

        if (currentTime <= 5)
        {
            examContainer.querySelector(".timer").style.background = "#FFCDD2";
            examContainer.querySelector(".timer").style.color = "#C62828";
        }
    },1000);
}

// HighLight corrected options on click
document.querySelectorAll(".subject, .questionSize").forEach(option =>{
    option.addEventListener("click", ()=> {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

// Showing the result when the quiz completed
const showQuizResult = () => {
    examContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You Have Answered <b>${correctAnswersCount}</b> Out Of <b>${numberOfQuestions}</b> Questions Correctly.`
    document.querySelector(".resultMessage").innerHTML = resultText;
}

// Selecting The Subject and number of questions and staring the quiz
const startQuiz = () => {
    subjectContainer.style.display= "none";
    examContainer.style.display= "block";

    quizCategory = subjectContainer.querySelector(".subject.active").textContent;
    numberOfQuestions = parseInt(subjectContainer.querySelector(".questionSize.active").textContent);
    renderQuestion();
}

// Reset all elements when the quiz completed
const resetQuiz = () =>{
    resetTimer();
    correctAnswersCount = 0;
    questionIndexHistory.length=0;
    subjectContainer.style.display = "block";
    resultContainer.style.display = "none";
}

// Adding functions to the buttons when clicked
nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".start").addEventListener("click",startQuiz);
document.querySelector(".tryAgain").addEventListener("click",resetQuiz);