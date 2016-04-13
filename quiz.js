var numQuestions = 5;
var numChoices = 3;
var answers = new Array(4);

answers[0] = "quotes";
answers[1] = "true/false";
answers[2] = "len";
answers[3] = "exponentiation";
answers[4] = "print";

function jsQuiz(form) {
  var score = 0;
  var current;
  var currSelection;
  for (var i=0; i<numQuestions; i++) {
    current = i*numChoices;
    for (var j=0; j<numChoices; j++) {
      currSelection = form.elements[current + j];
      if (currSelection.checked) {
        if (currSelection.value === answers[i]) {
          score++;
          break;
        }
      }
    }
  }

  score = Math.round(score/numQuestions*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQuestions; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}
