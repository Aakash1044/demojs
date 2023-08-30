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
///console.log(myVariabale.lastIndexOf("cs"))
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
 const myVar1 ="34.7988888"
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
const myName="AkashJS"
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));

//if Statements
let customerIsBanned = false;
let namew="The Demo JS";
let reply;
let finance= true;
if(customerIsBanned){
    reply = "sorry"
}
else if(namew && finance){
    reply = `Make ${namew} and finance`;
}
else if(namew){
    reply = `Make ${namew}`;
}
else{
    reply = "Done";
}
// console.log(reply);




let testscore = 44;
let grade;
let collegeStudent=true;

if(testscore>=90){
    grade='A';
}
else if(testscore>=78){
    grade='B'

}
else if(testscore>=68){
    grade ='C'
}
else if(testscore>=55){
    grade='D'
}
else{
    if(collegeStudent){
        grade='RA'
    }else{
    grade='F'
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

// let playgame = confirm(" Taara,can we play rock,paper,scissor?");
// if(playgame){
//     let playchoice = prompt("Taara,please select rock or paper or scissor.");
//     if(playchoice){
//         let playone = playchoice.trim().toLowerCase();
//         if (playone === "rock" ||
//         playone === "paper" ||
//         playone === "scissor"){
//             let computerchocie = Math.floor(Math.random()*3+1);
//             let computer =
//             computerchocie === 1
//             ? "rock"
//             : computerchocie === 2
//             ? "paper"
//             : "scissor";
//             let result = 
//             playone === computer ?
//             "Tie Game": 
//             playone === "rock" && computer === "paper"?
//             `You: ${playone} \n Computer:${computer} \n Computer Winz`:
//             playone === "paper" && computer === "scissor" ?
//             `You:${playone} \n Computer:${computer} \n Computer Winz` :
//             playone === "scissor" && computer === "rock" ?
//             `You:${playone} \n Computer:${computer} \n Computer Winz` :
//             `You:${playone} \n Computer:${computer} \n YOU VICTORY`;
//             alert(result);
//             let playagain = confirm("Taara you want to play again?");
//             playagain ? location.reload() : alert("Ok, bye taara...");
            
//         }else{
//             alert("Ai pattu select only rock or paper or scissor, Now refresh it and start again.")
//         }
    
//     }else{
//         alert("Oki, Your mind gets changed Oki byeeee....")
//     }
// }else{
//     alert("Ok, May be next time we can play, byee pattu");
// }


//loops
//while loop

// let i=0;
// while(i<=50){
//     console.log(i);
//     i = i+1;
// }

// do while loop

// let i =50;
// do{
//     console.log(i);
//     i =i+1;
// } while (i<=50)

//for loop

// for(i=0; i<=50; i++){
//     console.log(i);
// }


// let nam = "akaaasssh";
// for ( i= 0; i<= nam.length; i++){
//     console.log(nam.charAt(i));// print as single word next down to down

// }


// let nam = "al        "
// for (let i=0; i<=nam.trim().length; i++)
// {
//     for(let j=0; j<=nam.trim().length; j=j+1)
//     {
//         for(let k=0; k<=nam.trim().length; k=k+1){
//             for ( let l =0; l<=nam.trim().length; l++){
//                 console.log(i,j,k,l);
//             }
//         }
//     }
    
// } 


//Function

// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(11,12));
// console.log(sum(43,54));
// console.log(sum(45,66));

// let a = "aakash.ariu7a@gmail.com";
// n=a.slice(0,a.indexOf("@"));


// function getUserNameFromEmail(ga){
//     return ga.slice(0,ga.indexOf("@"));
// }

// console.log(a);
// console.log(getUserNameFromEmail(a));

//For first letter should capital using function
// let b = "nakshthara";
// function toProperCase(h){//> we can also define and written as const toProperCase = function(h), const toProperCase = (name)=>{}
//     return h.charAt(0).toUpperCase() + h.slice(1).toLowerCase();
// }
// console.log(b);
// console.log(toProperCase(b));

// const toProperCase = function(h){}
// const toProperCase = (h) =>{}


//Scope
// var x=4;
// var x=5;
//console.log(x);//it will display the last declared value of x;

// let y=4;
// y=8;
//console.log(y);// it will dipslay the recent value of y also using the let;


//Global scope
// var x = 3;
// let y=5;
// const z= 4;

//Local scope => block scope
// {
//     let y=8; // in this y value mention in a another code block which represents the curely braces
//     console.log(`block scope y:${y}`);// when we use that dollar symbol for printing it will display the number as while coloru which is represent as string value
// }

//Local scope => function scope
// function myFuc(){
//     const z = 4;
//     console.log("function scope z:",z);
// }
// myFuc()
// console.log("global scope x:",x);
// console.log("global scope y:",y);// it will print the global scope value because it doesnt mean the block scope value of y
//when we mention the console.log in the block scope then it will printh the value of y inthe block scope
// same for function scope also
// but in fuction scope we can declare the value of x which is the global scope
// var x=5;
// let y=9;
// const z=4;
// console.log(`Global  x:${x}`);
// console.log(`Global  y:${y}`);
// console.log(`Global  z:${z}`);

// function myFuc(){
//     const z=3;
//     console.log(`Function  x:${x}`);
//     console.log(`Function  y:${y}`);
//     console.log(`Function  z:${z}`);

    
// }myFuc()

// {
//     let y=0;
//     console.log(`Block x:${x}`); 
//     console.log(`Block y:${y}`);
//     console.log(`Block z:${z}`);

// }

//Array
const myArray =[];
myArray[0]="akash";
myArray[1]="prem";
myArray[2]=786;
// console.log(myArray);
//for searching a array in bigself of array ,to find the last array value
// console.log(myArray[myArray.length-1]);
// myArray.push("Click");//adding a new array but this array add at end of the created array.
// console.log(myArray);
// myArray.pop();//it will delete the last array element.
// console.log(myArray);
// myArray.unshift("save");//adding a new element in arrray but in first positionn.
// console.log(myArray);
 //console.log(myArray[0]);
// myArray.shift();//it will delete the first array elament.
// console.log(myArray)

// const lastitem = myArray.push("maths");// it will print only the length of the myArray
// console.log(lastitem);
// const firstitem = myArray.unshift("sci");// same this will also print the lenght of the myArray
// console.log(firstitem);
// console.log(myArray);
// const laastitem = myArray.pop();//it will print the deleted array element at the last value , it doesnot show the length of the array
// console.log(laastitem);
// const fiirstitem = myArray.shift();
// console.log(fiirstitem);// same it will also show the deleted array elemant of first vlaue.

// delete myArray[2];//it will shown as empty inthe array
// console.log(myArray);
// myArray.splice(2,1);//it will delete the array and dosnot show as empty array.
// console.log(myArray);
// myArray.splice(1,1,"Break");//it will replace the given word.
// console.log(myArray);
// myArray.splice(1,0,"helo");// when we give 0 it will go to the [1] position and add the give word.
// console.log(myArray);
// const newArrya = myArray.slice(1); 
// console.log(newArrya);
// const nneewAray = myArray.reverse();
// console.log(nneewAray);
// let an = myArray.join();// it will convert it into string;
// console.log(an);
// let b = an.split(',');// it will split into the array from the string;
// console.log(b); 
// array2 = ['ake','prm','kim'];
// console.log(array2);
// const combo = myArray.concat(array2);//it will join both the array values in a one array
// console.log(combo);
// const ah = [...myArray,...array2];//it also same method of concat
// console.log(ah);

const earm = ["Frontend","Backend","FullStack"];
 
const ears =["AI","Outline","Timeline"];

const eari =["Style","Main","Learn"];
 
const eark = ["Css","Html"];

const earg =["Qalify"];
// console.log(earm[1],eari[1]);
// const e = [earm,eari];
// console.log(e);
// console.log(e[0][1]);//That 0 represent the first name of array which is earm and 1 is represent the first array of value

// const j = [...earg,...eari,...eark];
// console.log(j);

// Game using array and loop and function
// const initgame = () =>{
//     const startgme = confirm("Taara, Can we play our game - stone paper scissors");
//     startgme ? playgame() :  alert("Ok da, We can play next time.");
// }
// const playgame = ()=>{
//     while(true){
//         let playchoice = getplaychoice();
//         playchoice = formatplaychoice(playchoice);
//         if(playchoice ==="  "){
//             invalid();
//             continue;
//         }
//         if(!playchoice){
//             decidednottoplay();
//             break;
//         }
//         playchoice = evaluateplaychoice(playchoice);
//         if(!playchoice){
//             invalid();
//             continue;
//         }
//         const computerchoice = getcompchoice();
//         const Winner = gamewinner(playchoice,computerchoice); 
//         displayresult(Winner);  
//         if (asktoplayagain()){
//             continue;
//         }
//         else{
//             tnksforplaying();
//             break;
//         }
//     }

// };
// const getplaychoice = () =>{
//     return prompt("Taara,type to play stone paper scissor which u want");
// };
// const formatplaychoice = (playchoice) => {
//     if (playchoice  || playchoice ===" "){
//         return playchoice.trim().toLowerCase();
//     }
//     else {
//         return false;
//     }
// };
// const invalid =()=>{
//     alert ("sorry da, u entered wrong name ");
// };
// const decidednottoplay = ()=>{
//     alert ("Oki taara,You changed the mind , so we can play next time");
// };
// const evaluateplaychoice = (playchoice) =>{
//     if(
//         playchoice === "stone" ||
//         playchoice === "paper" ||
//         playchoice === "scissors"
//     ){
//         return playchoice;
//     }else{
//         return false;
//     }
// };
// const getcompchoice = ()=>{
//     const randomno = Math.floor(Math.random()*3);
//     const spsArray = ["stone","paper","scissors"];
//     return spsArray[randomno];
// };
// const gamewinner = (player, computer) =>{
//     const winner = 
//     player === computer 
//     ? "Tie Game"
//     : player === "stone" || computer === "paper"
//     ? `Taara: ${player} \n Computer: ${computer} /n Computer Victory`
//     : player === "paper" || computer === "scissors"
//     ? `Taara: ${player} \n Computer: ${computer} \n Computer Victory`
//     : player === "scisors" || computer === "stone"
//     ? `Taara: ${player} \n Computer: ${computer} \n Computer Victory`
//     : `Taara: ${player} \n Computer: ${computer} \n Taara u- Victory`;
//     return winner;
    
// };
// const displayresult = (winner) =>{
//     alert(winner);

// };
// const asktoplayagain =() =>{
//      alert ("Can we Play Again, Taara");
// };
// const tnksforplaying = () =>{
//     alert ("Thanks for playing Taara...");
// };
// initgame();

// Object,Key-value pairs in curley braces
const myobj = {name:"Html"};
// console.log(myobj);
// console.log(myobj.name);//this can display only the value of name 
const obj2 ={
    a:true,
    b:33,
    anotherobj :{
        n:"Suman",
        m:"Aaangaiyar"
    },
    array:["akash","index","style"],
    funct: function(a){
        // return "Hello Profession";
        return `Getting anotherobj n value ${this.anotherobj.n}`;
    },

};     //in this object we can create array int string  funtion also another object inthe the same object
// console.log(obj2);
// console.log(obj2.anotherobj);
// console.log(obj2.array[2]);//this will take the array of 2nd value
// console.log(obj2.anotherobj.m);//it will enter into anotherobject and display the m value
// console.log(obj2["b"]);//another way of display the values for the object
// console.log(obj2.funct());

const vechile = {
    door:2,
    engine: function(){
        return "Engine sound - Vroom!";
    },

};
// console.log(vechile.engine());
// const car = Object.create(vechile);//it will get the vechile object values and send it to car object,it is called as inheritance
// car.wheeels=4;
// console.log(car);
// car.engine = function(){
//     return "Engine sound";
// }
// console.log(car.engine());//now it will display the value of car.engine
// const tesla = Object.create(car);
// console.log(tesla.door);//it will first inherit the tesla from car then car from vechicle..so it will give the output value of vehcile value

const movie ={
    actor:"siva",
    music:"arr",
    director:"shankar",
    producer:"lyca",

};
// console.log(movie.producer);
// console.log(movie.hasOwnProperty("producer"));//checking 
//   console.log(Object.keys(movie));//it will show the keys of movie object
// /console.log(Object.values(movie));//it will show the values of movie object
// delete movie.producer;
// console.log(`Checking whether it is in object or not-${movie.hasOwnProperty("producer")}`);
// object loop
// for(let job in movie){
     // console.log(movie[job]);
//     console.log(`${job}, its value ${movie[job]}..`);
// };

//object destructuring
// const {music: myFavmusicdirector,director:myFavDire} = movie;//(linking).. in movie object the key of music value is assign to myFavmusicdirector.
// console.log(myFavmusicdirector,myFavDire);
// const {actor , music, director,producer} = movie;//use only the cpreect spelling inthe array of object movie
// console.log(actor);// it becomes variable and display the value of actor in movie objectt
// //using function
// function take({music}){return music};//when we use curley braces inthe fucntion it will take only the music key value form the movie
// console.log(take(movie));//it will pass the whole movie object to the function calling(take)



//classes
// const mypizza = {
//     size:"large",
//     spicey:"allowed",
//     bake: function (){
//         return console.log(`Bake a ${this.size} size with ${this.spicey} spiecey pizza`);

//     }

// };
// mypizza.bake();

// class Pizza {
//     constructor (typepizza,sizepizza){
//         this.type = typepizza;
//         this.size = sizepizza;
//         this.crust ="original";
//         this.topings = [];//we can also use array method to get more values

//     }
    // get toppingspizza (){
    //     return this.topings;
    // }
    // set toppingspizza(pizzatopings){
    //     this.topings =pizzatopings;
        
    // }
    //or another method of passing parameter in get and set
//     getToppings(){
//         return this.topings;
//     }
//     setToppings(pizzatopings){
//          //this.topings = pizzatopings;
//         this.topings.push(pizzatopings);//for array normal name will take the parameter value and print as overwritten ..so we use push method to add the array value
//     }
//     bake(){
//         return console.log(`Bake a ${this.size} size with ${this.crust} crust of ${this.type} with ${this.topings}.`);
//     }
//     nake(){
//         return console.log("we can create anohter funtion as like a blue print " ,`${this.type}`);
//     }
// }
// const anotherpizza = new Pizza("magical","small");
// // anotherpizza.toppingspizza="sausage";
// anotherpizza.setToppings("Sausage");
// // console.log(anotherpizza.topings);
// anotherpizza.setToppings("OOOliverss");
// anotherpizza.setToppings("Egg");
// console.log(anotherpizza.getToppings());
// anotherpizza.bake();

// console.log(anotherpizza.size); 

//  anotherpizza.nake();

//Super classes which is child and parent class
// class Pizza {
//     constructor(pizzasize){
//         this._size = pizzasize;//when we use _ this becomes const value.(private value   )
//         this.crust = "original";
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crustpizza){
//         this.crust = crustpizza;
//     }
// }
// class specialPizza extends Pizza{
//     constructor(Pizzasize){
//         super(Pizzasize);
//         this.type="Malgariam";

//     }
//     slice(){//function
//         console.log(`Our ${this.type} has a ${this.size} size pizza with 8 slices.`);

//     }

// }
// const superClass = new specialPizza("Large");
// superClass.slice();


//factory function
// function pizzafactory(pizzasize){
//     const size = pizzasize;
//     const crust = "original";
//     return{
//         bake: () => console.log(`Baking a ${size} pizza with a ${crust} crust.`),
//     }
// }
// const pizzafac = new pizzafactory("small");
// pizzafac.bake();// this is same as working of class
// console.log(pizzafac.size);//when we use this line the output will display undefined, because only class cna mention , function cannot be mention out.

//privacy value in class
class Pizza{
    crust = "original";
    #sauce = "tomato "; //when we use hastag , the variable can we use only in the class
    constructor(Pizzasize){
        this.size = Pizzasize;
    }
    getCrust(){
        return this.crust;
    }
    bake(){
        return console.log(`Baking a ${this.size} and ${this.crust} ${this.#sauce} pizza to you.`)//we used the outside of the contructor proerty in the class..
    }
    

}
const naemm = new Pizza("small");
// naemm.bake();
 //when we need curst value of the class means we should call through only get function.
// console.log(naemm.getCrust());// inthis statement when we use sauce menas it will get undefined because there is a hashtag it uses only in class.
// console.log(naemm.sauce);//undefined..\\this is  new version update


//JSON Javascript Object Notation.
//Text format
const onj = {
    name:"Akash",
    dept:"CSE",
    skills: ["js","njs","c","py","ja"],
    sub: function(){
        console.log("Here is process of Json.");
    }

};
// console.log(onj);   
// console.log(onj.name);
// onj.sub();//funciton calling.
// //👆 converting this object into JSON
// const Jsonfile = JSON.stringify(onj);//it will converted into json(which contains onnly text format);
// console.log(Jsonfile);//it will print all value as text format
// console.log(typeof onj);//it is said as object.
// console.log(typeof Jsonfile);//it is textformat so it is said as string.
// console.log(Jsonfile.name);//undefined it cannot take the value of the objenct.
// //converting json to object
// const recieveJson = JSON.parse(Jsonfile);//it will convert to object from json file.
// console.log(recieveJson);//it iwll print the onj(object vvalues).;
// console.log(typeof recieveJson);//object
// console.log(recieveJson.name);//here we can use because it is a object.



//Errors and handling.
//1.Reference error
"use strict";// <- when we use this line we should create a variable with only like const.which is called referene error.
const vadr = "Akahs";
//console.log(vadr);
//2.Syntax error -> object..create(); -> which has "." extra dot.
//3.Typeerror -> vadr = "akdfj"; -> when use same variable name .
//Try and catch
// const makeerror = ()=>{
//     try{
//         const ji= "ksk";
//         ji="hu";
//     }catch(err){
         //console.log(err.stack);//it will show the error as textformat which is like a mesg,err.stack displays the full error method.
//         // console.error(err.name);//it will show as error mesg,err.name displays the error name.
//         // console.warn(err);//it will show as warning.
//         if(err.name === "TypeError"){
//             //console.log("You mentioned the same const varible");
//         }
//     }
// };
//makeerror(); 
//Using funtion with error handling and customize errro
// const makeerror = ()=>{
//     try{
//         //throw new customererr("This is a cutom error");//using funciton.(which customize)
//         throw new Error("THis is a custom error");//this is inbuild funcition in js. but we should use any of the throw method..
        
//     }catch(err){
//         console.error(err.stack);

//     }
// };
// makeerror();
// function customererr(message){
//     this.message = message;
//     this.name = "Custom ERror";
//     this.stack = `${this.name} and ${this.message};`
//}
//using finally
// const makeerror = ()=>{
//     let i = 0;
//     while(i<=5){
//         try{
//             if(i%2!==0){
//                 throw new Error("The number is odd number");
//             }
//             console.log("👇Try Block")
//             console.log("This is Even Number")
//         }
//     catch(err){
//         console.log("👇Try Block failed so it is Catch Block")
//         console.error(err.message );
//     }finally{//it comes finaly and prints the value 
//         console.log("Finnallly...");
//         i++;

//     }
// }
// };
// makeerror();
//using my own method of if else 
const makeerror = ()=>{
    let i = 0;
    while(i<=5){
        try{
            
            if(i%2!==0){
                console.log("The number is",i);
                throw new Error("The number is odd number");
            }
            else{
                console.log("The number is",i);
                throw new Error("The number is even number");

            }
            
            
        }
    catch(err){
        
        console.error(err.message );
    }finally{//it comes finaly and prints the value 
        console.log("Finnallly...");
        i++;

    }
}
};
makeerror();
(function() {
    var a = b = 5;
  })();
  
  console.log(b);
  function StringChallenge(str) {
    function isEven(n) {
      return n % 2 === 0 && n !== 0;
    }
    
    function isOdd(n) {
      return n % 2 !== 0 && n !== 0;
    }
    
    function processChar(char, prevChar) {
      if (!isNaN(char)) {
        if (isEven(parseInt(char)) && isEven(parseInt(prevChar))) {
          return '*' + char;
        } else if (isOdd(parseInt(char)) && isOdd(parseInt(prevChar))) {
          return '-' + char;
        }
      }
      return char;
    }
    
    const challengeToken = "yl314ban8c";
    let result = [];
    let prevChar = '';
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const processedChar = processChar(char, prevChar);
      result.push(processedChar);
      prevChar = char;
    }
    
    const finalOutput = result.join('').replace(new RegExp('[' + challengeToken + ']', 'gi'), '');
    
    if (finalOutput === '') {
      return "EMPTY";
    }
    
    return finalOutput;
  }
  
  // Test cases
  console.log(StringChallenge("99946"));  // Output: 9-9-9*6
  console.log(StringChallenge("56647304"));  // Output: 56*6*7-0
  