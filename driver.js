var order = [];
var maxProblem = 0;
var problemNumber = 0;
var nTries = 0;
var maxTries = 0;
var score = 0;
var proceedTimeout = 0;

var correctAnswer = false;

var congrats =  [
        "Yes, that’s it.",
        "Quite right!",
        "That’s exactly it.",
        "Very good.",
        "You got it right.",
        "Excellent.",
        "Good work." ];

function setupDriver() {
    problemNumber = 0;
    score = 0;
    nTries = 0;
    proceedTimeout = "";
    
    order = [];
    for (var i = 0; i < maxProblem; i++) {
        order.push(i);
    }
    shuffle(order, 0, maxProblem);
    showProblem();
}

function shuffle(nArray, startAt, n) {
    var i, j, swap;
    
    for (i = startAt; i < startAt + n; i++)
    {
        j = startAt + Math.round(Math.random() * (n - 1));
        swap = nArray[i];
        nArray[i] = nArray[j];
        nArray[j] = swap;
    }
}
            
function checkAnswer() {
    var result;
    nTries = nTries + 1;
    correctAnswer = judgeCorrect();
    giveFeedback();
}

function randomPositiveFeedback() {
    var max = congrats.length;
    var n = Math.floor(Math.random() * max);
    return congrats[n];
}

function setText(id, text) {
    document.getElementById(id).innerText = text;
}

