// Decclare  variable using DOM
let startDiv = document.querySelector(".startDiv");
let startBtn = document.querySelector(".startBtn");
let displayContainer = document.querySelector(".displayContainer");
let question = document.querySelector(".questionDiv");
let answer = document.querySelector(".answerDiv");
let previousBtn = document.querySelector(".previousBtn");
let nextBtn = document.querySelector(".nextBtn");
let optionBtn = document.getElementsByClassName("optionBtn");
let correctResult = document.getElementById("correctResult");
let wrongResult = document.getElementById("wrongResult");
let count = 0;

// Start button
startBtn.addEventListener("click", function () {
  previousBtn.classList.add("conceal");
  startDiv.classList.add("hidden");
  displayContainer.classList.remove("hidden");
  quizCreater(quizArray[0]);
  checker();
});

// Quiz question and answer
let quizArray = [
  {
    question: "1.What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: "Canberra",
  },
  {
    question: "2.Who wrote the play Romeo and Juliet?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correct: "William Shakespeare",
  },
  {
    question: "3.How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correct: "7",
  },
  {
    question: "4.What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Orca"],
    correct: "Blue Whale",
  },
  {
    question: "5.Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correct: "Leonardo da Vinci",
  },
];

// quiz creater function
function quizCreater(i) {
  question.innerHTML = i.question;
  answer.innerHTML = `
    <button class="optionBtn">${i.options[0]}</button>
    <button class="optionBtn">${i.options[1]}</button>
    <button class="optionBtn">${i.options[2]}</button>
    <button class="optionBtn">${i.options[3]}</button>
  `;
}

// Previous Button
previousBtn.addEventListener("click", function () {
  wrongResult.classList.add("hidden");
  correctResult.classList.add("hidden");
  if (count == 1) {
    previousBtn.classList.add("conceal");
    checker();
  }
  if (count > 0) {
    count--;
    quizCreater(quizArray[count]);
    nextBtn.classList.remove("conceal");
    checker();
  }
});

// Next Button
nextBtn.addEventListener("click", function () {
  previousBtn.classList.remove("conceal");
  wrongResult.classList.add("hidden");
  correctResult.classList.add("hidden");
  if (count < 4) {
    count++;
    quizCreater(quizArray[count]);
    checker();
  }
  if (count == 4) {
    nextBtn.classList.add("conceal");
    checker();
  }
});

// Answer Checker
function checker() {
  for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener("click", function () {
      let choice = optionBtn[i].innerHTML;
      let answer = quizArray[count].correct;
      console.log(answer);
      console.log(choice);
      if (choice == answer) {
        correctResult.classList.remove("hidden");
        wrongResult.classList.add("hidden");
      } else if (choice != answer) {
        wrongResult.classList.remove("hidden");
        correctResult.classList.add("hidden");
      }
    });
  }
}
