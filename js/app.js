let userName = prompt("Please enter your name: ");
alert("Welcome " + userName + " to the site. Please answer the following questions.");
let rightAns = "Great!";
let wrongAns = "Wrong answer!";

function YesNoQuest(quest, ans){
    let answer = prompt(quest);
    answer = answer.toLowerCase();
    if(answer === 'yes' || answer === 'y'){
        answer = 'y';
    }
    else if(answer === 'no' || answer === 'n'){
        answer = 'n';
    }
    if(answer === ans){
        //console.log(rightAns);
        alert(rightAns);
    }
    else{
        // console.log(wrongAns);
        alert(wrongAns);
    }
}

YesNoQuest("Am I over 20 years old?", 'n');
YesNoQuest("Do I come from Dak Lak?", 'y');
YesNoQuest("Do I know anything about C++?", 'y');
YesNoQuest("Is  my major Computer Science?", 'n');
YesNoQuest("Do I love football?", 'y');

alert("Thank you for joining, " + userName);
