const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";
let questions = ['1) Who was the first American woman in space? ',
'2) True or false: 5 kilometer == 5000 meters? ',
'3) (5+3)/2*10 = ? ',
"4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
'5) What is the minimum crew size for the ISS? '];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let correctCandidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  
  candidateName = input.question("What is your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i <= 4; i++) {
    candidateAnswers[i] = input.question(questions[i]);
     if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
       console.log(`You answered ${candidateAnswers[i]}`);
       console.log(`Correct answer is ${correctAnswers[i]}\n`);
      correctCandidateAnswers.push(candidateAnswers[i]);
     }else {
       console.log("Your answer is incorrect.")
       console.log(`Correct answer is ${correctAnswers[i]}\n`);
     }
  }  

}

function gradeQuiz() {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = 0; 

  grade = (correctCandidateAnswers.length/questions.length) * 100; 

  if (grade >= 80) {
    console.log(`>>> Overall Grade: ${grade}% (${correctCandidateAnswers.length} of 5 responses correct)<<<\n>>> Status: PASSED <<<`);
  }else {
    console.log(`>>> Overall Grade: ${grade}% (${correctCandidateAnswers.length} of 5 responses correct)<<<\n>>> Status: FAILED <<<`);
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nGreetings " + candidateName);
  askQuestion();
  gradeQuiz();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};