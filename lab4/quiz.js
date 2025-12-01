// simple quiz program in javascript

let qs = [
  "Capital of India?",
  "Which language is used for styling web pages?",
  "Full form of HTML?",
  "2 + 2 = ?",
  "Who created JavaScript?"
];

let ans = [
  "delhi",
  "css",
  "hyper text markup language",
  "4",
  "netscape"
];

let marks = 0;
// LOOP FOR ALL QUESTIONS
for (let i = 0; i < qs.length; i++) {

  let user = prompt(qs[i]);
// IF USERS PRESSES CANCEL
  if (user === null) {
    alert("Question skipped");
    continue;
  }
// CLEAN USER INPUT
  let clean = user.toLowerCase().trim();
// CHECKING ANS
  if (clean === ans[i]) {
    alert("Correct");
    marks++;
  } else {
    alert("Wrong. Answer is: " + ans[i]);
  }
}
// FINAL RESULT
alert("Final Score = " + marks + "/" + qs.length);