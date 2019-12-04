var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageLocation1 = "images/dice" + randomNumber1 + ".png";
var imageLocation2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageLocation1);
document.querySelectorAll("img")[1].setAttribute("src", imageLocation2);
if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins🎈🎈🎆🎆";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins🎈🎈🎆🎆";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
