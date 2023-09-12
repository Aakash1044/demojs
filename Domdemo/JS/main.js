//DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
//another method to show the view id
//const view2 = document.querySelector("#view2"); //for declaring the correct concept of id(section),we using hastag.
//console.log(view2);
//using style ,display none
// view1.style.display = "none"; //when we use dispaly as none it doesnot display in the broweser.
//\ view2.style.display = "flex"; // when we use dispaly as flex then the anss will be display in the browers
//using class name we can display the section value
// const clsview = document.getElementsByClassName("view");
//console.log(clsview); //here it will display as html list
//using queryselector with accessing a classs name so we use(.)
// const sameview = document.querySelectorAll(".view");
//console.log(sameview); //but it will display as nodelist.which is defines as taking all the elements in the html code.->like including space inthe div element.
// const divs = view1.querySelectorAll("div");
//console.log(divs); //it will printh the hoow many div elaments are there in view1 section with node list.
// const samedivs = view1.getElementsByTagName("div"); //it will display the html collections.
//console.log(samedivs);
// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); //it will display the div vlaues into even number divvalues
//console.log(evenDivs);
// evenDivs[3].style.backgroundColor = "purple";
// for (i = 0style.width = "150px";
//   evenDivs[i].style.backgroundColor = "green";
// }; i < evenDivs.length; i++) {
//   evenDivs[i].

// const navtextchanging = document.querySelector("nav h1");
// ///console.log(navtextchanging); //it will display the navigator value which we have declared inthe program.
// navtextchanging.textContent = "This is our demo page"; //it iwll change the value of navigator.
// const navBar = document.querySelector("nav");
// //console.log(navBar);
// //another method using html to change the navigator value
// navBar.innerHTML = "<h1> Demo </h1> <p>page</p>";
// //console.log(navBar);
// navBar.style.justifyContent = "space-evenly"; //it will give the space equally.
// console.log(evenDivs[0]);//it just shpw the div element of evendivs of 0 array.
// console.log(evenDivs[0].parentElement);//it displays the parent element of the evends div of 0 array.
// console.log(evenDivs[0].parentElement.children);//it disaplys the children value of div element which is how many elements were there inthe div .
// console.log(evenDivs[0].parentElement.childNodes);//node means displays all the count of text and value also taking the space.so it will pribt the count as 25.because of all spaces.
// console.log(evenDivs[0].parentElement.hasChildNodes());//this statement is used to section for finding whether the section has children or not using true or faluse
// console.log(evenDivs[0].parentElement.lastChild);//which will display the last child which is "text".
// console.log(evenDivs[0].parentElement.lastElementChild);//which displays the last element value.. inthe the html code.
// console.log(evenDivs[0].parentElement.firstElementChild);
// console.log(evenDivs[0].nextSibling);//it shows the next value in the evendivs value. which is text.
// console.log(evenDivs[0].nextElementSibling);//which display the evendivs[0] element after the element which is "3"
// console.log(evenDivs[0].nextElementSibling.nextElementSibling);//it goes after the element of after.
// console.log(evenDivs[0].previousSibling);//same as next which this executes the previous value .In this type of sibilings we have only the text whcih we have typed in the html.
// console.log(evenDivs[0].previousElementSibling);//same as next element sibllings.
// view1.style.display="none";
// view2.style.display="flex";
 //when we use the css code in javascript we should type like -"flexDirection";
// view2.style.flexDirection="row";
// view2.style.flexWrap="wrap";
// view2.style.margin="10px";
// console.log(view2.lastChild);
// console.log(view2.lastElementChild);
// //view2.lastElementChild.remove();//it wiil remove --> must use ();
// //another method.
// while(view2.lastChild){
//   view2.lastChild.remove();
// }

//creating new div in view2

// const createDiv = (parent,namee) => {
// const newdiv = document.createElement("div");
// newdiv.textContent = namee;
// newdiv.style.width = "100px";
// newdiv.style.height = "100px";
// newdiv.style.margin = "10px";
// newdiv.style.flexDirection="row";
// newdiv.style.flexWrap="wrap";
// newdiv.style.backgroundColor = "black";
// newdiv.style.color = "red";
// newdiv.style.display = "flex";
// newdiv.style.justifyContent = "center";
// newdiv.style.alignItems = "center";
// parent.append(newdiv);
// }
// createDiv(view2,"DEmz");
// for( let a=1; a<=12; a++){
// createDiv(view2, a);
// }
//view1.style.display="none";
//view2.style.display="none";


//Event Listener
const view2 = document.getElementById("view2");
//view2.style.display = "flex";
view1.style.display = "none";

//  const view = document.querySelector("#view3");
//  console.log(view);
// const div = view.querySelector("div");
// const h3 = div.querySelector("h3");
// console.log(h3);
// console.log(div);

 //Syntax
 //.addEventListener(event, function, useCapture)


// const dosomething = () =>{
//   alert("Do something");
// };

// h3.addEventListener("click", dosomething,false);//if u doesnt mention capture it will take it as false(default)
// h3.removeEventListener("click",dosomething,false);//it will remove that event listener before we register.
// h3.addEventListener("click", (event)=>{
//     console.log(event.target);
     // eventtarget = h3.textContent= "Marked as 3rd view page";
//     event.target.textContent = "Marked as 3rd view page";

// })

//eventListener with readystatechange
// document.addEventListener("readystatechange",(event)=>{// it is said as setting ready for server load .
//     if(event.target.readyState === "complete"){
//         console.log("Completed");
//         initApp();
//     }
// })

// const initApp = () =>{
//     const view = document.querySelector("#view3");
//  console.log(view);
// const div = view.querySelector("div");
// const h3 = div.querySelector("h3");
// console.log(h3);

// console.log(div); 
// view.addEventListener("click",(event)=>{
//     // event.stopPropagation();//when use this stop propagation in this event ..when we click the h3 event it will the only thiw event and then goes to stop 
//     // event.target.style.backgroundColor = "grey";
//     // view.classList.add("pink");
//     // view.classList.remove("darkblue");//becasue we mention the background clour as darkblue in css from html so after we remove this,then the grey will appear when we click the view page.
//     view.classList.toggle("pink");
//     view.classList.toggle("darkblue");//when use for both toggle means it will return to both mentoioned colour which we have called the function in css.

// },)
// div.addEventListener("click",(event)=>{
//     // event.stopPropagation();
//     div.classList.toggle("grey");
//     div.classList.toggle("black");
//     // div.style.backgroundColor = "red";
// },  )
// h3.addEventListener("click",(event)=>{
//     // event.stopPropagation();    
//     //.target.textContent = "Created different type of addlist";
//     const mytext = event.target.textContent;
//     mytext === "3rdview" ? (event.target.textContent = "Created 3rd view page") : (event.target.textContent = "3rdview");


// },)//when we use usecapture:true it will bobble as top to down. when we use default as false ..it will bobble as from down(which we were lick into the h3) to up
// const nav = document.querySelector("nav");
// nav.addEventListener("mouseover",(event)=>{
//     nav.classList.add("heigth100");
// })
// nav.addEventListener("mouseout",(event)=>{
//     nav.classList.remove("height100px");
// })
// view.style.display="none";
// };

const view3 = document.querySelector("#view3");
view3.style.display= "none";

// const initApp = ()=>{

//     const view4 = document.querySelector("#view4");
//     const myForm = view4.querySelector("#myForm");
//     myForm.addEventListener("submit",(event)=>{
//         event.preventDefault();//this will wont be take automatic to refresh the page.
//         console.log("Sumbit event");//it will refresh the page when we enter the value. so we have to use👆
//     })
// }



//Web Storage API;Application Programing Interface
// view4.style.display = "none";
 view3.style.display= "flex";
// document.addEventListener("readystatechange",(event)=>{// it is said as setting ready for server load .
//         if(event.target.readyState === "complete"){
//             console.log("Completed");
//             initApp();
//         }
//     })
//     const initApp = ()=>{
//         const myar = ["Code","Practice","Develop"];
//         const myobj = {
//             name: "Ajs",
//             myar: ["Code","Practice","Develop"],
//             logname: function(){
//                 console.log(this.name);
//             }
//         };
//         //or we can use normal session storage //
//          window.sessionStorage.setItem("mysessionstorage",JSON.stringify(myobj));
//         localStorage.setItem("local storage",JSON.stringify(myobj));
//         const key = localStorage.key(0);
//         console.log(key);
//         const mysessiondata = JSON.parse(sessionStorage.getItem("mysessionstorage"));
//         console.log(mysessiondata);
    
//     };




// import akash from "./anoth.js";//calling another anoth.js function
// import { belg as b,gleb } from "./anoth.js";
// console.log(akash());
// console.log(b());
// console.log(gleb());
//another method to impporrt
// import * as another from "./anoth.js";
// console.log(another.default());
// console.log(another.belg());
// console.log(another.gleb());


//importing class
import truk from "./anoth.js";

const me = new truk("Akash");
// console.log(me.emailliine());




//Higher Order Function - in function we calling the paramaeter as function
import { posts } from "./phol.js";
// posts.forEach((post)=>{
//      console.log(post);
// });

const filterpost = posts.filter((post)=>{
     return post.userId === 5;
});
console.log(filterpost);
//mapping the filter psot
const mappingpost = filterpost.map((post)=>{//it will take the id in the filterpost which we have showned by userid==5
     return post.id;
});
console.log(mappingpost);


