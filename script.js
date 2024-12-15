// Quizdaten (Fragen und Antworten)
// Quiz data (questions and answers)
const quizData = [
  {
    question: 'Was bringt der Weihnachtsmann? / What does Santa Claus bring?',
    options: ['Geschenke', 'Schnee', 'Plätzchen', 'Glühwein'],
    correct: 0, // Richtige Antwort / Correct answer: "Geschenke"
  },
  {
    question: 'Welcher Monat ist Weihnachten? / Which month is Christmas?',
    options: ['November', 'Dezember', 'Januar', 'Oktober'],
    correct: 1, // Richtige Antwort / Correct answer: "Dezember"
  },
  {
    question: "Welche Farbe hat Rudolphs Nase? / What color is Rudolph's nose?",
    options: ['Grün', 'Rot', 'Blau', 'Gelb'],
    correct: 1, // Richtige Antwort / Correct answer: "Rot"
  },
];

// Variablen zum Verfolgen des Quiz-Fortschritts
// Variables to track quiz progress
let currentQuestion = 0;
let score = 0;

// HTML-Elemente abrufen
// Getting HTML elements
const questionEl = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart');

// Funktion zum Laden einer Frage
// Function to load a question
function loadQuestion() {
  // Aktuelle Frage laden / Load current question
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;

  // Optionen aktualisieren / Update options
  optionButtons.forEach((btn, index) => {
    btn.textContent = current.options[index];
    btn.onclick = () => checkAnswer(index);
  });
}

// Funktion zum Überprüfen der Antwort
// Function to check the answer
function checkAnswer(selected) {
  const current = quizData[currentQuestion];

  // Prüfen, ob die Antwort korrekt ist / Check if the answer is correct
  if (selected === current.correct) {
    score++; // Punktzahl erhöhen / Increase score
  }

  // Nächste Frage oder Ende des Quiz / Next question or end of the quiz
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Funktion zum Anzeigen des Ergebnisses
// Function to display the result
function showResult() {
  // Fragen verstecken / Hide questions
  questionEl.classList.add('hidden');
  document.querySelector('.options').classList.add('hidden');

  // Ergebnis anzeigen / Show result
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `Dein Ergebnis: ${score} von ${quizData.length}!`;
}

// Funktion zum Neustarten des Quiz
// Function to restart the quiz
restartBtn.onclick = function () {
  score = 0;
  currentQuestion = 0;
  resultEl.classList.add('hidden');
  questionEl.classList.remove('hidden');
  document.querySelector('.options').classList.remove('hidden');
  loadQuestion();
};

// Quiz starten / Start the quiz
loadQuestion();

// Zusätzliche Schneefall-Animation für die festliche Stimmung
for (let i = 0; i < 50; i++) {
  const schneeflocke = document.createElement('div'); // Erstellt ein Div-Element
  schneeflocke.className = 'snowflake'; // Klasse für Styling
  schneeflocke.style.left = `${Math.random() * 100}vw`; // Zufällige Position auf der Breite
  schneeflocke.style.width = `${Math.random() * 5 + 2}px`; // Zufällige Größe
  schneeflocke.style.height = schneeflocke.style.width; // Gleiche Höhe wie Breite
  schneeflocke.style.animationDelay = `${Math.random() * 10}s`; // Zufälliger Verzögerungsstart
  document.body.appendChild(schneeflocke); // Fügt die Schneeflocke zum Dokument hinzu
}
