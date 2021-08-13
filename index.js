var readlineSync = require("readline-sync");

var score = 0;

// Questions
var questions = [
{
  question: "1. Under which wrestling category does Deepak Punia representing India at Tokyo Olympics? \n A. 65 Kg \n B. 57 Kg \n C. 86 Kg \n D. 75 kg ",
  answer: "C"
}, 
{
  question: "2. Saikhom Mirabai Chanu, women weightlifter is representing India in _______ category at Tokyo Olympics 2020?  \n A. 49 Kg \n B. 55 Kg \n C. 64 Kg \n D. 59 kg ",
  answer: "A"
},
{
  question: "3. Who is the first ever Indian fencer to qualify for the Tokyo Olympic Games 2020?  \n A. Kabita Devi \n B. CA Bhavani Devi \n C. Shilpa Garg \n D. Pooja Mishra ",
  answer: "B"
},
{
  question: "4. Who is the women Indian Golfer who qualified for the Tokyo Olympics Games 2020?  \n A. Neha Tripathi \n B. Shaili Chopra \n C. Aditi Ashok \n D. Tvesa Malik ",
  answer: "C"
},
{
  question: "5. Which Indian women Gymnast is going to represent India at Tokyo Olympics 2020?  \n A. Pranati Nayak \n B. Sunita Sharma \n C. Dipa Karmakar \n D. Aruna Reddy ",
  answer: "A"
},
{
  question: "6. Which Indian wrestler is going to represent India at Tokyo Olympics 2020 in Men's 65 Kg category?  \n A. Amit Dahiya \n B. Ravi Dahiya \n C. Yogeshwar Dutt \n D. Bajrang Punia  ",
  answer: "D"
},
{
  question: "7. Sonam malik is going to represent India at Tokyo Olympic Games 2020 in which weight category?  \n A. 53 Kg \n B. 57 Kg \n C. 62 Kg \n D. 50 Kg  ",
  answer: "C"
},
{
  question: "8. What is the Tokyo Olympic Games 2020 MAscot?  \n A. Hodori \n B. Miraitowa \n C. Amik \n D. Fuwa ",
  answer: "B"
},
{
  question: "9. What do the five rings on the Olympic symbol represent?  \n A. The five oceans \n B. The five continents \n C. The five planets \n D. Five Greek Gods  ",
  answer: "B"
},
{
  question: "10. At which of the following Olympics were gold medals made of pure gold last awarded?  \n A. 1912 \n B. 1920 \n C. 1936 \n D. 1948  ",
  answer: "A"
},
{
  question: "11. Who of the following athletes has won the maximum number of individual gold medals at a single Olympics?  \n A. Mark Sptiz \n B. Michael Phelps \n C. Carl Lewis \n D. Matt Biondi  ",
  answer: "B"
},
{
  question: "12. The five rings of the Olympic symbol are in five different colours.Red, Green, Yellow, Blue and _____?  \n A. Indigo \n B. Violet \n C. Orange \n D. Black  ",
  answer: "D"
},
{
  question: "13. Olympic games were held in ancient Greece in the honour of Greek God _____?  \n A. Zeus \n B. Uranus \n C. Apollo \n D. Jupiter  ",
  answer: "A"
},
{
  question: "14. At which of the following cities have the Olympic games NOT been held twice?  \n A. Athens \n B. Paira \n C. London \n D. Atlanta  ",
  answer: "D"
},
{
  question: "15. In which year were the first modern Olympic Games held?  \n A. 1900 \n B. 1896 \n C. 1904 \n D. 1892  ",
  answer: "B"
}
];

// Welcome function
function welcome() {
  const userName = readlineSync.question("How may I address you? \n(Name Please) : ");
  console.log("\n");
  console.log("Welcome "+ userName + " to 'Olympics Games Quiz..'");
 
}

// quiz play function
function play(question, answer) {
  var userAnswer = readlineSync.question("\nQuestion:- " + question + "\n \nAnswer:- ");

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("You are right!");
    score = score + 4;
    
  } else {
    console.log("ohho!");
    score = score - 1;
    console.log("Right answer is : " + answer);
   
  }

  console.log("\n");
  console.log("-------------------------")
}

// quiz processing
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// Totel score
function showScores() {
  console.log("YAY! You SCORED: ", score +" out of 60");

  if(score == 60){
    console.log("\n");
    console.log("Yah,I am so glad to say that you are a top  performer in the Quiz.");
    console.log("you should be ping me with SnapShot of your marks and I'll update it on the list of Top performer of the Quiz.");
  }
  else if((score <= 56) && (score > 43)){
    console.log("\n");
    console.log("You are in the top 30 performer in the Quiz.");
  }
  else if((score <= 42) && (score > 10)){
    console.log("\n");
    console.log("Learn More About Olympics Games And participate again." );
  }
  else{
    console.log("\n");
    console.log(" Ohh So bad perform in the Quiz, Learn more about Olympics Games and participate again !!!" );
  }
  console.log("\n");
  console.log("Top performers :-");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

// data of high score
var highScores = [
  {
    name: "Jawed",
    score: 60,
  },

  {
    name: "upYadav",
    score: 60,
  },
]

welcome();
var wantbeORnot = readlineSync.question("\nAbout the Quiz:- \n\n a.> All Question are related to Olympics Games. \n b.> Every correct answer has 4 point and Incorrect has -1. \n c.> Answer accept Option like(A. 1992 B.1993 C. 1994 D. 1876 then fill in Answer Section 'a or A' not the full answer like '1992') \n\nAre you want to participate.(Yes Or No) : ");
if((wantbeORnot.toUpperCase() === "YES") || (wantbeORnot.toUpperCase() === "Y")){
  game();
  showScores();
}
else{
  console.log("Thank you for giving your Time.")
}


