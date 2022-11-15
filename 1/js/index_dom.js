import { countDown } from "./cuenta_regresiva.js";

const $d = document;

$d.addEventListener("DOMContentLoaded", (e) => {
  countDown("countdown", "3", "Time's up!", "submit");
});
