const d = document;

const PINK = "pink",
  BLUE = "blue",
  BLACK = "black",
  GREEN = "green",
  GRAY = "gray";

export const changeColor = (id) => {
  const $elementsToChange = d.getElementsByTagName("div");
  const $ipadImageToChange = d.getElementById("ipad");
  const $airImageToChange = d.getElementById("air");
  // console.log($elementsToChange);
  //console.log($buttonElement);

  for (let i = 0; i < $elementsToChange.length; i++) {
    if ($elementsToChange[i].classList.contains(BLUE)) {
      $elementsToChange[i].className = "";
      $elementsToChange[i].className = id;
    }
    if ($elementsToChange[i].classList.contains(PINK)) {
      $elementsToChange[i].className = "";
      $elementsToChange[i].className = id;
    }
    if ($elementsToChange[i].classList.contains(BLACK)) {
      $elementsToChange[i].className = "";
      $elementsToChange[i].className = id;
    }
    if ($elementsToChange[i].classList.contains(GREEN)) {
      $elementsToChange[i].className = "";
      $elementsToChange[i].className = id;
    }

    if ($elementsToChange[i].classList.contains(GRAY)) {
      $elementsToChange[i].className = "";
      $elementsToChange[i].className = id;
    }
  }

  $ipadImageToChange.src = `./assets/picture/ipad_${id}.png`;
  $airImageToChange.src = `./assets/picture/air_${id}.png`;
};
