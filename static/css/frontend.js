/*for(let i = 0; i < 10; i++){
  var button = document.createElement("button");
}*/

var buttonContainer = document.getElementById("button-container");


document.addEventListener("DOMContentLoaded", function() {
var button = document.getElementById("button"); //RECORDS THE PROPERTIES OF THE BUTTON FROM THE HTML FILE
document.addEventListener("click", function() { //LISTENS FOR SOMEONE TO CLICK THE BUTTON
  var randoButton = split();
  buttonContainer.appendChild(randoButton);
  button.style.width = button.offsetWidth*1.05 +"px"; //STYLE THE BUTTON SO THAT THE BUTTON'S WIDTH IS 2 TIMES WHAT IT USED TO BE
  button.style.height = button.offsetHeight*1.05 +"px";
  button.style.backgroundColor = getRandoColor();
  randoButton.style.backgroundColor = getRandoColor();
  randoButton.style.width = button.offsetWidth*1.05 +"px"; //STYLE THE BUTTON SO THAT THE BUTTON'S WIDTH IS 2 TIMES WHAT IT USED TO BE
  randoButton.style.height = button.offsetHeight*1.05 +"px";
});
});



function getRandoColor(){
  var letters = "0123456789ABCDEF";
  var color = "#";
  for(var i =0; i < 6; i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}
function split(){
 var dupButton = document.createElement("button");
 dupButton.textContent = "DONT CLICK ME";
 dupButton.id = "button";
 //dupButton.style.width = button.width;
 //dupButton.style.height = button.height;
  return dupButton;
}
