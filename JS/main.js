// console.log("Hi da")
// console.log(typeof("EHllo"))
// console.log(typeof(7))
//Strings
const myVariabale = "Mathematics";

// Length property
/// console.log(myVariabale.length)
//String Methods
/// console.log(myVariabale.charAt(0))
//string methods index of
/// console.log(myVariabale.indexOf("ath"))
//String methods lastIndexof
/// console.log(myVariabale.lastIndexOf("cs"))
//String methods slice
/// console.log(myVariabale.slice(5,9))
//String methods uppercase
/// console.log(myVariabale.toUpperCase())
//Stromg methods lowercase
/// console.log(myVariabale.toLowerCase())
//String methods includes-boolean type
/// console.log(myVariabale.includes("a"))
//String methods split
/// console.log(myVariabale.split("e"))
/// console.log("demo react".split("o"))
/// console.log("dmo to react".split(" "))
/// console.log("earn,grow,give".split(""))
const myVar1 = "34.7988888";
const myNumber = 34;
// console.log(myNumber)
const myFloat = 43.0878888;
// console.log(myFloat)
// console.log(myVar1) // it will display in white color
// console.log(myNumber === myFloat)
// console.log(myNumber === myVar1) // it becomes false because right side is variable
// console.log(Number(myVar1)) //it will change the variable datatype into number datatype
// console.log(Number(true)) // true is said as 1
// console.log(Number(false))
// //Number meethods
// //isInteger
// console.log(Number.isInteger(myVar1 ));
// console.log(Number.parseFloat(myVar1));
// console.log(Number.parseInt(myFloat));
//console.log(Number.parseFloat(myVar1).toFixed(2));// but it will display the ans as string datatype(like white color)
// console.log(myFloat.toString()) // it will convert to display as string dataype
// console.log(parseFloat(myVar1).toFixed(2).toString()); //chainning(this type is adding with dot)
// //NaN=>Not a number
// console.log(Number.isNaN(45))// becomes false => because it contains number then number. .
// console.log(Number.isNaN("java"))// same false=> because it contains number. .
// console.log(isNaN("java"))// becomes true because it is not a number

//Math properties
// console.log(Math.PI)//  22/7
// console.log(Math.trunc(Math.PI)); // also we can use round()
// console.log(Math.round(5.8)); // it will show into round of value => 6
// console.log(Math.ceil(5.1)); // it also gives only the round form
// console.log(Math.floor(5.2)); // it will only display except decimal point or 7.8
// console.log(Math.pow(2,4)); // 2power4
// console.log(Math.min(2,3,5,6,7,4,1));
// console.log(Math.max(4,45,3,4,6,6,5,33,78));
// console.log(Math.random()); // it will take random value from 0 to 1
// console.log(Math.random()*10); // it will display as multiplied by ten
// console.log(Math.floor(Math.random()*10)+1); //when we want 10 random number add +1
// console.log(Math.floor(Math.random()*100)+1); // when we want random number number from 1 to 100 use this<
const myName = "AkashJS";
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));

//if Statements
let customerIsBanned = false;
let namew = "The Demo JS";
let reply;
let finance = true;
if (customerIsBanned) {
  reply = "sorry";
} else if (namew && finance) {
  reply = `Make ${namew} and finance`;
} else if (namew) {
  reply = `Make ${namew}`;
} else {
  reply = "Done";
}
// console.log(reply);

let testscore = 44;
let grade;
let collegeStudent = true;

if (testscore >= 90) {
  grade = "A";
} else if (testscore >= 78) {
  grade = "B";
} else if (testscore >= 68) {
  grade = "C";
} else if (testscore >= 55) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "RA";
  } else {
    grade = "F";
  }
}
// console.log(grade);

//switch statement

// switch(3){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log("NO match");
// }

// let player ="rock";
// let computer = "scissor";

// switch(player){
//     case computer:
//         console.log("tie");
//         break;
//     case player:
//         if(computer==="scissor"){
//             console.log("Player wins");
//         }
//         else{
//             console.log("computer wins");
//         }
//         break;
//     default:
//         console.log("NO tie");
// }

//conditional statements(ternary statements)

// let a ;
// let response = a ? "yes its js":"no its not js";
// console.log(response)

// let testscoore = 44;
// let gradee = testscoore >=90 ? "A" : testscoore>=80 ? "B" : testscoore>=70? "C" : testscoore>=60 ? "D" : "F";
// console.log(gradee);

// let plaayer = "scissor";
// let computeer = "rock";
// let game = plaayer===computeer ? "Tie"
// : plaayer === "rock" && computeer === "paper" ? "Computer wins"
// : plaayer === "paper" && computeer === "scissor" ? "Player wins"
// : plaayer === "scissor" && computeer === "rock" ? "Computer wins":"Player wins"
// console.log(game);

//alert mesg
// let myBoolean = confirm("Ok>>true\nCancel>>false");
// console.log(myBoolean);
//alert mesg with type to get ans in console
// let my = prompt("type here");
// if(my){
// console.log(my ?? "you didn`t type in alert mesg");
// }// is said as null colasing

// else{
//     console.log("you didn`t type in alert mesg");
// }
// console.log(my.trim().length); //it will take the unnecessary space in the typing area(alert mesg)

//Game

let playgame = confirm("can we play rock,paper,scissor?");
if (playgame) {
  let playchoice = prompt("please select rock or paper or scissor.");
  if (playchoice) {
    let playone = playchoice.trim().toLowerCase();
    if (playone === "rock" || playone === "paper" || playone === "scissor") {
      let computerchocie = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerchocie === 1
          ? "rock"
          : computerchocie === 2
          ? "paper"
          : "scissor";
      let result =
        playone === computer
          ? "Tie Game"
          : playone === "rock" && computer === "paper"
          ? `You: ${playone} \n Computer:${computer} \n Computer Winz`
          : playone === "paper" && computer === "scissor"
          ? `You:${playone} \n Computer:${computer} \n Computer Winz`
          : playone === "scissor" && computer === "rock"
          ? `You:${playone} \n Computer:${computer} \n Computer Winz`
          : `You:${playone} \n Computer:${computer} \n YOU VICTORY`;
      alert(result);
      let playagain = confirm("Taara you want to play again?");
      playagain ? location.reload() : alert("Ok, bye ");
    } else {
      alert(
        "select only rock or paper or scissor, Now refresh it and start again."
      );
    }
  } else {
    alert("Oki, Your mind gets changed Oki byeeee....");
  }
} else {
  alert("Ok, May be next time we can play, byee da kundi");
}
