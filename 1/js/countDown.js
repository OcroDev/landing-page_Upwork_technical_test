const d = document;

export function countDown(id, minutes, finalMessage, button) {
  const $countdownElement = d.getElementById(id);
  const $submitElement = d.getElementById(button);
  let seconds = 60;
  minutes = minutes - 1;
  let intervalCounter = setInterval(() => {
    seconds--;
    //console.log(minutos);
    //console.log(segundos);

    if (minutes < 10 && seconds < 10) {
      $countdownElement.innerHTML = `<p class="p-counter"> 0${minutes}</p> <p class="p-counter"> 0${seconds}</p>`;
    } else if (minutes < 10) {
      $countdownElement.innerHTML = `<p class="p-counter"> 0${minutes}</p> <p class="p-counter"> ${seconds}</p>`;
    } else if (minutes >= 10) {
      $countdownElement.innerHTML = `<p class="p-counter"> ${minutes}</p> <p class="p-counter"> ${seconds}</p>`;
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalCounter);
      $countdownElement.innerHTML = `<p>${finalMessage}</p>`;
      $submitElement.disabled = true;
    } else if (seconds === 0) {
      minutes--;
      seconds = 60;
    }
  }, 1000);
}
