switch (document.location.pathname) {
  case "/index.html":
    setInterval(function changeBgColor() {
      document.body.style.backgroundColor = getRandomColor();
    }, 1000);
    break;
  case "/submit.html":
    document.body.style.backgroundColor = "white";
    break;
}
//otvoriti preko live servera ili slicno, jer inace nece biti pathname isti i dzaba sam krecila :)

function getRandomColor() {
  let hexadecimal = "0123456789ABCDEF"; //jer nam trebaju vrednosti za red, green and blue izmedju 00 i ff
  let color = "#";
  for (var i = 0; i < 6; i++) {
    //boja sadrzi kombinaciju 6 znakova
    color += hexadecimal[Math.floor(Math.random() * 16)]; //Math.random daje random broj od 0 do 1(ukljucuje 0 ali ne ukljucuje 1)
  }
  return color;
}

function welcomeMsg() {
  alert("Welcome");
}

function changeTxt() {
  document.getElementById("change-this-text").innerHTML = "Text has changed";
  document.getElementById("change-this-text").style.fontSize = "30px";
  document.getElementById("change-this-text").style.background = "white";
}

function changeImg() {
  document.getElementById("change-this-image").src = "images/css.gif";
}

function getGender() {
  let gender = document.getElementsByName("gender");

  if (gender[0].checked) {
    document.getElementById("selected-gender").innerHTML = "Male";
  } else if (gender[1].checked) {
    document.getElementById("selected-gender").innerHTML = "Female";
  } else {
    document.getElementById("selected-gender").innerHTML =
      "You have to select one option!";
  }
}

function submitLocation() {
  window.location.assign("submit.html");
}

function goBack() {
  window.history.back();
}

function showInput() {
  let input = document.getElementsByClassName("input-field");
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += input[i].value + "<br>";
  }
  document.getElementById("input-result").innerHTML = output;
}
