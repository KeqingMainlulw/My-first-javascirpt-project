/* Declare variables below to save the different sections (divs) of your story*/
let button = document.querySelector(".yourName");
let p = document.querySelector(".welcome");
let outputs = document.querySelector(".outputs");
let inputs = document.querySelector(".inputs");
button.onclick = function() {

  let input = document.querySelector(".name").value; //saves the value of the input 
  p.innerHTML = input;
  outputs.style.display = "block";
  inputs.style.display = "none";
};//This is for entering the name and main page
let next1 = document.querySelector(".Next1");
let title = document.querySelector(".title");
let storyopening = document.querySelector(".story-opening");
  next1.onclick = function() {
    console.log("eeee");
    title.style.display = "none";
    storyopening.style.display = "block";
  };
let op1 = document.querySelector(".op1");
let optionOne = document.querySelector(".option-one");
let op1Screen = document.querySelector(".op1-screen");
let op2 = document.querySelector(".op2");
let optionTwo = document.querySelector(".option-two");
let op2Screen = document.querySelector(".op2-screen");
let op3 = document.querySelector(".op3");
let optionThree = document.querySelector(".option-three");
let op3Screen = document.querySelector(".op3-screen");
let gun = document.querySelector(".gun");
let failWiz = document.querySelector(".FailWiz");
let failWar = document.querySelector(".FailWar");
let failArc = document.querySelector(".FailArc");
let op1End = document.querySelector(".op1-end");
let op2End = document.querySelector(".op2-end");
let op3End = document.querySelector(".op3-end");
let PassWizard = document.querySelector(".PassWiz");
let PassWarrior = document.querySelector(".PassWarrior");
let PassArcher = document.querySelector(".PassArcher");

  optionOne.onclick = function() {
  storyopening.style.display = "none";
    op1Screen.style.display = "block";
}
  optionTwo.onclick = function() {
  storyopening.style.display = "none";
   op2Screen.style.display = "block";
}
  optionThree.onclick = function() {
  storyopening.style.display = "none";
  op3Screen.style.display = "block";
}
failWiz.onclick = function() {
  gun.style.display = "block";
  gun.style.animation = "dance .1s infinite"
  op1Screen.style.display = "none";
   console.log("fail");
}
failWar.onclick = function() {
  gun.style.display = "block";
  gun.style.animation = "dance .1s infinite"
  op2Screen.style.display = "none";
   console.log("fail");
}
failArc.onclick = function() {
  gun.style.display = "block";
  op3Screen.style.display = "none";
   console.log("fail");
  gun.style.animation = "dance .1s infinite"
}

PassWizard.onclick = function() {
  op1End.style.display = "block";
  op1Screen.style.display = "none";
}
PassWarrior.onclick = function() {
  op2End.style.display = "block";
  op2Screen.style.display = "none";
}
PassArcher.onclick = function() {
  op3End.style.display = "block";
  op3Screen.style.display = "none";
 }
/* Endings for each path below. */
let killImp =document.querySelector(".killImp");
let noKillImp =document.querySelector(".noKillImp");
let killKnight =document.querySelector(".killKnight");
let noKillKnight =document.querySelector(".noKillKnight");
let killRabbit =document.querySelector(".killRabbit");
let noKillRabbit =document.querySelector(".noKillRabbit");
let youDied = document.querySelector(".youDied");
let youWin = document.querySelector(".youWin")
let goBack = document.querySelector(".goBack");

killImp.onclick = function() {
  op1End.style.display = "none";
  youDied.style.display = "block";
}
noKillImp.onclick = function() {
    op1End.style.display = "none";
  youDied.style.display = "block";
}
killKnight.onclick = function() {
    op2End.style.display = "none";
  youDied.style.display = "block";
}
noKillKnight.onclick = function() {
    op2End.style.display = "none";
  youDied.style.display = "block";
}
killRabbit.onclick = function() {
    op3End.style.display = "none";
  youWin.style.display = "block";
}
noKillRabbit.onclick = function() {
    op3End.style.display = "none";
  youDied.style.display = "block";
}
goBack.onclick = function() {
  youDied.style.display = "none";
      title.style.display = "block";
    outputs.style.display = "none";
  inputs.style.display = "block";
}
