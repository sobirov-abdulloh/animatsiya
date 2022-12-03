"use strict";
let submitBtn = document.querySelector(".btn");
let nameInput = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#pasvord");
let ismText = document.querySelector("#ism");
let textDv = document.querySelector("#text");
let emailText = document.querySelector("#emailText");
let check = document.querySelector(".form-check-input");
let body = document.querySelector("body");
let forum = document.querySelector("form");
let selectedBG = document.getElementById("bgchoice");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let selectedBGColor = selectedBG.value;
  if (nameInput.value === "") {
    alert("Ism kiritin");
  } else if (email.value === "") {
    alert("Email kiritin");
  } else if (selectedBGColor === "") {
    alert("Rang kiritin");
  } else {
    forum.classList = "box1";
    textDv.classList = "box2";
    ismText.textContent = nameInput.value;
    emailText.textContent = email.value;
    if (selectedBGColor === "1") {
      ismText.classList.add("svet1");
      emailText.classList.add("svet1");
      textDv.classList.add("border1");
    } else if (selectedBGColor === "2") {
      textDv.classList.add("border2");
      emailText.classList.add("svet2");
      ismText.style.animation = "flicker 1.5s infinite alternate";
      emailText.style.animation = "flicker 1.5s infinite alternate";
    } else if (selectedBGColor === "3") {
      textDv.classList.add("border3");
      emailText.classList.add("svet3");
      ismText.style.animation = "pulsate 1.5s infinite alternate";
      emailText.style.animation = "pulsate 1.5s infinite alternate";
    }
  }
});

selectedBG.addEventListener("click", function () {
  let selectedBGColor = selectedBG.value;
  if (selectedBGColor === "1") {
    selectedBG.style.backgroundColor = "rgb(47, 0, 255)";
  } else if (selectedBGColor === "2") {
    selectedBG.style.backgroundColor = "#0fa";
  } else if (selectedBGColor === "3") {
    selectedBG.style.backgroundColor = "#bc13fe";
  }
});
