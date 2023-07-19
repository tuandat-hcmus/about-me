"use strict";

let userName = prompt("Please enter your name: ");
alert("Welcome " + userName + " to the site. Please answer the following questions.");
let rightAns = "Great!";
let wrongAns = "Wrong answer!";
let totalScore = 0; // each correct question = 10 points

function YesNoQuest(quest, ans) {
    let answer = prompt(quest);
    answer = answer.toLowerCase();
    if (answer === 'yes' || answer === 'y') {
        answer = 'y';
    }
    else if (answer === 'no' || answer === 'n') {
        answer = 'n';
    }
    if (answer === ans) {
        //console.log(rightAns);
        alert(rightAns);
        totalScore += 10;
    }
    else {
        // console.log(wrongAns);
        alert(wrongAns);
    }
}

YesNoQuest("Am I over 20 years old?", 'n');
YesNoQuest("Do I come from Dak Lak?", 'y');
YesNoQuest("Do I know anything about C++?", 'y');
YesNoQuest("Is  my major Computer Science?", 'n');
YesNoQuest("Do I love football?", 'y');

// Sixth Question 
function SixthQuestion() {
    let sixthCorrectAns = 4;
    let i = 0;

    for (i = 0; i < 4; i++) {
        let sixthAns = prompt("How many languages do I have in my experience?");
        if (sixthAns > sixthCorrectAns) {
            alert('Too high');
        }
        else if (sixthAns < sixthCorrectAns) {
            alert('Too low');
        }
        else if (sixthAns == sixthCorrectAns) {
            alert(rightAns);
            totalScore += 10;
            break;
        }
        else if (typeof sixthAns != 'number') {
            alert('Wrong input');
        }
    }

    if (i === 4) {
        alert(wrongAns + '.Correct answer is ' + sixthCorrectAns);
    }
}

SixthQuestion();

// Seventh Question
function SeventhQuestion() {
    let seventhCorrectAns = ['top gun maveric', 'tenet', 'the amazing spiderman', 'spiderman: homecoming'];

    for (let i = 0; i < 6; i++) {
        let seventhAns = prompt("Which movie is in my top 4 favorite movies?");
        seventhAns = seventhAns.toLowerCase();
        if (seventhCorrectAns.includes(seventhAns)) {
            alert(rightAns);
            totalScore += 10;
            break;
        }
        else {
            alert(wrongAns);
        }
    }

    let correctAnsString = "";
    for (let i = 0; i < seventhCorrectAns.length; i++) {
        correctAnsString += seventhCorrectAns[i];
        if (i < seventhCorrectAns.length - 1)
            correctAnsString += ', ';
    }

    alert("Correct answers: " + correctAnsString);
}

SeventhQuestion(); // function call

alert("You total score: " + totalScore + ". You have answered correctly " + totalScore / 10 + " answers.");
alert("Thank you for joining, " + userName); 