// import functions and grab DOM elements
import { countsAsYes } from './counts-as-yes.js';

const button = document.getElementById('button');
const results = document.getElementById('results');
// initialize state
button.addEventListener('click', () => {
// I did use comment-driven development - but I got rid of it as I went along. Pulled from notes in README.md. 
    const userName = prompt('Hello! Please enter your name.');

    const userConfirm = confirm(`Are you sure you want to take this quiz, ${userName}?`);

    if (!userConfirm) {
        alert('OKCU!');
        return;
    }

    let correctAnswers = 0;

    const hitchResponse = prompt(`Ok then, ${userName}, has Bryana hitchhiked in Europe?`);

    if (countsAsYes(hitchResponse)) {
        correctAnswers++;
    }

    const musicResponse = prompt(`${userName}, next question. Has Bryana attended Coachella?`);

    if (!countsAsYes(musicResponse)) {
        correctAnswers++;
    }

    const elbowResponse = prompt(`Take a deep breath for your last question, ${userName}. Can Bryana lick her elbow?`);

    if (countsAsYes(elbowResponse)) {
        correctAnswers++;
    }

    alert(`Quiz complete! Well, ${userName}, do you think you passed?`);

    const thePercent = Math.round((correctAnswers / 3) * 100); 

    results.textContent = `${userName}, you got ${correctAnswers} out of 3 correct, which is ${thePercent}%!`;

});
