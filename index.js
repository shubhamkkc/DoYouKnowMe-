
var readlineSync = require('readline-sync');

var username=readlineSync.question("Hi, what is your name ");
console.log("welcome "+username+" to do know shubham?\n");
var score=0;
function play(question, answer)
{
  var userans =readlineSync.question(question).toLowerCase();
  
  if(userans==answer)
  {
  console.log("right");
  score+=1;
  }
  else
  {console.log("wrong");
  score-=1;
  }
  console.log("current score "+ score);
  console.log("------------------------")
}

var questions=[{
    question:"where do I live? patna/kolkata  ",
    answer:"patna"}
    ,{
      question:"Where do I work? Wipro/Tcs : ",
    answer:"wipro"},
    {
      question:"what is my favourite Game? Pubg/Free fire :",
    answer:"pubg"
    }
    ]
    for(var i=0;i<questions.length;i++)
    {
      play(questions[i].question,questions[i].answer);
    }
console.log(username+", your total score is "+score);