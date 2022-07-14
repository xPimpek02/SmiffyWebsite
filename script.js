var i = 0;
var txt = 'SmiffyBot.';
var speed = 200;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("span-text").style.visibility = "visible";
    buttons = document.getElementsByClassName("buttons-demo");
    if (buttons) {
      for (var x = 0; x < buttons.length; x++) {
        buttons[x].style.visibility = "visible";
      }
    }
  }
}
typeWriter();