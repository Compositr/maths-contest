var num1;
var num2;
var correct = 0;
var incorrect = 0;
var timeCount;
var intId = -1;
var incorrectQuestions = [];
var modal = document.getElementById("scoreModal");

// Little easter egg
if (typeof console === "object") {
  console.log(
    "\n" +
      "Hi there, fellow developer (or curious person)! Thanks for visiting.\n" +
      "We hope you enjoy your stay here and good luck with the\n" +
      'multiplication game                                       ("`-’-/").___..--’’"`-._\n' +
      ":)                                                       `6_ 6  )   `-.  (     ).`-.__.‘)\n" +
      "                                                         (_Y_.)’  ._   )  `._ `. ``-..-’\n" +
      "                                                       _..`--’_..-_/  /--’_.’ ,’\n" +
      "                                                      (il),-’‘  (li),’  ((!.-‘\n" +
      "Feel free to poke around w/ the code\n" +
      "\n" +
      "— @windows95\n"
  );
}

function startGame() {
  $("#answer").val("");
  newQuestion();
  timeCount = 240;
  correct = 0;
  incorrect = 0;
  $("#guide").hide();
  $("#result").hide();
  $("#prize").hide();
  $("#ending").hide();
  $("#play").fadeOut(1000, function () {
    $("#timer").show();
    $("#game").show();
    // $("#timeBar").fadeOut(10000, "linear" function(){});
    //$("#timerBar").hide();
  });

  intId = setInterval(timed, 250);
}

$("#answer").keypress(function (e) {
  if (e.which == 13) {
    checkAnswer();
    return false; //<---- Add this line
  }
});

function checkAnswer() {
  var ans = parseInt($("#answer").val());
  if (ans === num1 * num2) {
    correct++;
    $("#result").show();
    $("#incorrect").text("Incorrect:" + incorrect);
    $("#result").text("Correct:" + correct);
    $("#answer").val("");
    newQuestion();
  } else if (ans != num1 * num2) {
    incorrect++;
    incorrectQuestions.push(`${num1} × ${num2}`);
    $("#result").show();
    $("#incorrect").text("Incorrect:" + incorrect);
    $("#result").text("Correct:" + correct);
    $("#answer").val("");
    newQuestion();
  }
}
$(document).ready(function () {
  $("#answer").hide();
  $("#result").hide();
  $("#timer").hide();
  $("#incorrect").hide();
  //$("#timerBar").hide();
});

// timer

function timed() {
  var secs = Math.floor(timeCount / 4) % 60;
  var mins = Math.floor(timeCount / 240);
  $("#timer").text(mins + ":" + formatTime(secs));
  if (timeCount === 0) {
    endGame();
  } else if (timeCount <= 40) {
    $("#timer").addClass("red-text");
  }
  timeCount--;
  var timeProgress = "" + (timeCount / 480) * 100;
  // var prevClass = "sec" + ((Math.ceil(timeCount / 12)) + 1);
  // var currClass = "sec" + (Math.ceil(timeCount / 12));
  // $("#timerBar").removeClass(prevClass);
  //$("#timerBar").addClass(currClass);
  $("#timerBar").css("width", timeProgress + "%"); //$("timerBar").removeClass("s10").addClass("s0", 3000, "linear");
  // $( "#timerBar").css("width", timeProgress + "%;");
  //$("#timerBar").val("" + 10*timeCount);
}

function newQuestion() {
  num1 = Math.round(Math.random() * 10);
  num2 = Math.round(Math.random() * 10);
  $("#question").text(num1 + "×" + num2 + "=");
  $("#answer").show();
}

function endGame() {
  $("#game").hide();
  $("#timer").hide();
  showResult(correct, incorrect);
  //$("#timerBar").hide();
  $("#timer").removeClass("red-text");
  clearInterval(intId);
  $("#play").fadeIn(1000, function () {});
  $("#guide").fadeIn(2000);
}

function formatTime(toFormat) {
  if (toFormat < 10) {
    return "0" + toFormat;
  }
  return toFormat;
}
function showResult(correct, incorrect) {
  $("#ending").show();
  var score = correct - incorrect;
  $("#ending").text(
    `You answered ${correct} questions correctly. You made ${incorrect} mistakes! We think this is worth ${score} points!`
  );
  document.getElementById("incorrect").innerHTML = incorrectQuestions;
}
