import { changeColor } from "./changeColor.js";
import { countDown } from "./countDown.js";

const $d = document;

$d.addEventListener("DOMContentLoaded", (e) => {
  countDown("countdown", "6", "Time's up!", "submit");
});

$d.addEventListener("click", (e) => {
  if (e.target.matches("#blue")) {
    changeColor("blue");
  }
  if (e.target.matches("#pink")) {
    changeColor("pink");
  }
  if (e.target.matches("#green")) {
    changeColor("green");
  }
  if (e.target.matches("#gray")) {
    changeColor("gray");
  }
  if (e.target.matches("#black")) {
    changeColor("black");
  }
});
