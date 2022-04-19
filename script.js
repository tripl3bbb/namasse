function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


///////
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


///////
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}


///////
var i = 0;
var txt = 'The number of hours they sleep will always be the same no matter what, but it differs from protagonist to protagonist. Michael sleeps for six hours in-game. By comparison, Franklin sleeps for eight hours, and Trevor sleeps for 12 hours in GTA 5.'; /* The text */
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// 
// const texts = ["GTA 5"];
// let count = 0;
// let index= 0;
// let currentText = "";
// let letter = "";
//
// (function type(){
//   if(count === texts.length){
//     count = 0;
//   }
//   currentText = texts[count];
//   letter = currentText.slice(0, ++index);
//
//   document.querySelector(".typing").textContent = letter;
//   if(letter.length === currentText.length){
//     count++;
//     index = 0;
//   }
//   setTimeout(type, 1000);
// })();
// //
