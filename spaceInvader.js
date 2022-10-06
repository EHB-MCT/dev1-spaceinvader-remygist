"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawInvader();

function drawInvader() {
  //achtergrond
  context.beginPath();
  context.strokeStyle = "red";
  context.rect(50, 50, 300, 300);
  context.fill();

  //deel boven
  context.beginPath();
  context.fillStyle = "#66FF00";
  context.rect(75, 125, 50, 50);
  context.rect(125, 75, 50, 50);
  context.rect(225, 75, 50, 50);
  context.rect(275, 125, 50, 50);

  //deel midden
  context.rect(175, 125, 50, 150);

  //deel onder
  context.rect(125, 275, 50, 50);
  context.rect(225, 275, 50, 50);
  context.fill();
}
