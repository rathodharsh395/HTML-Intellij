var element;

//element = document.getElementById("header").innerHTML;
//console.log(element)

//document.querySelector("#header").innerHTML = "<h1>Wow</h1>";

//document.getElementById("header").setAttribute("style","border:10px dotted yellow;");
//document.getElementById("header").attributes[1].value = "xyz";

//document.getElementById("header").removeAttribute("style");
//document.getElementById("header").removeAttribute("id");

//document.querySelector("#header").style.backgroundColor = "tan";
//document.querySelector("#header").style.color = "blue";

//document.querySelector("#header").classList.add("xyz","efg");
//document.querySelector("#header").classList.remove("xyz");

//element = document.querySelector("#header").classList;
//element = document.getElementsByClassName("list");

//console.log(element)

//document.getElementById("header").onmouseenter = abc;
//document.getElementById("header").addEventListener("mouseleave",abc)
/*document.getElementById("header").addEventListener("click",function(){
         this.style.border = "5px solid yellow";
         });
*/
//document.getElementById("header").addEventListener("click",xyz);
/*function xyz(){
        document.getElementById("header").removeEventListener('mouseleave',abc);
  }
*/
/*function abc(){
  document.getElementById("header").style.background = "pink"
  }
*/

document.getElementById("header").addEventListener("click",abc);

function abc(){
// document.getElementById("header").classList.add("xyz","efg");
 //  document.getElementById("header").classList.remove("xyz");
 //var a = document.getElementById("header").classList.length;
// document.getElementById("header").classList.toggle("xyz");

// var a = document.getElementById("header").classList.item(0);
 var a = document.getElementById("header").classList.contains("pqr");
 console.log(a);
 }

