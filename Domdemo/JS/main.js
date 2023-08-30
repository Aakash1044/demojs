//DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
//another method to show the view id
const view2 = document.querySelector("#view2");//for declaring the correct concept of id(section),we using hastag.
console.log(view2); 
//using style ,display none
// view1.style.display = "none"; //when we use dispaly as none it doesnot display in the broweser.
//\ view2.style.display = "flex"; // when we use dispaly as flex then the anss will be display in the browers
//using class name we can display the section value
const clsview = document.getElementsByClassName("view");
console.log(clsview);//here it will display as html list
//using queryselector with accessing a classs name so we use(.)
const sameview = document.querySelectorAll(".view");
console.log(sameview);//but it will display as nodelist.which is defines as taking all the elements in the html code.->like including space inthe div element.
const divs = view1.querySelectorAll("div");
console.log(divs);//it will printh the hoow many div elaments are there in view1 section with node list.
const samedivs = view1.getElementsByTagName("div");//it will display the html collections.
console.log(samedivs);
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");//it will display the div vlaues into even number divvalues
console.log(evenDivs);
evenDivs[3].style.backgroundColor ="purple";
for(i=0;i<evenDivs.length;i++){
    evenDivs[i].style.width="150px";
    evenDivs[i].style.backgroundColor="green";
}

const navtextchanging = document.querySelector("nav h1");
console.log(navtextchanging);//it will display the navigator value which we have declared inthe program.
navtextchanging.textContent = "This is our demo page";//it iwll change the value of navigator.
const navBar = document.querySelector("nav");
console.log(navBar);
//another method using html to change the navigator value
navBar.innerHTML = '<h1> Demo </h1> <p>page</p>';
console.log(navBar);
navBar.style.justifyContent = "space-evenly";//it will give the space equally.