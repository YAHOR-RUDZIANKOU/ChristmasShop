// -------------------Slider Start-----------------------
let leftButton = document.querySelector(".button__left");
let rightButton = document.querySelector(".button__right");
let slider = document.querySelector(".slider__inside");
let currentOffset = 0;
let count = 0;
let obj = {};

document.addEventListener("DOMContentLoaded", () => {
  obj = showDistanse();
  leftButton.disabled = true;

  dayWrapper.innerHTML = " ";
  hoursWrapper.innerHTML = " ";
  minutesWrapper.innerHTML = " ";
  secondsWrapper.innerHTML = " ";
});

function showDistanse() {
  const fullWidth = 1993;
  let width = window.innerWidth;
  let visibleArea;
  let result;
  if (width > 1440) {
    visibleArea = 1358;
    result = Math.floor((fullWidth - visibleArea) / 3);
    return {
      result: result,
      times: 3,
    };
  } else if (width >= 769) {
    visibleArea = width - 82;
    result = Math.floor((fullWidth - visibleArea) / 3);
    return {
      result: result,
      times: 3,
    };
  }
}

function changeDistanse() {
  obj = showDistanse();
  currentOffset = 0;
  slider.style.transform = `translateX(${currentOffset}px)`;
  makeInActiveBtn("pathLeft", leftButton);
  if (count === obj.times) {
    makeActiveBtn("pathRight", rightButton);
  }
  count = 0;
}

window.addEventListener("resize", changeDistanse);

rightButton.addEventListener("click", handleRightButtonClick);

function handleRightButtonClick() {
  count += 1;
  // console.log(count);
  if (count !== 0) {
    makeActiveBtn("pathLeft", leftButton);
  }
  if (obj.times === count) {
    makeInActiveBtn("pathRight", rightButton);
  }
  currentOffset -= obj.result;
  slider.style.transform = `translateX(${currentOffset}px)`;

  leftButton.removeEventListener("click", handleLeftButtonClick);
  rightButton.removeEventListener("click", handleRightButtonClick);
}

leftButton.addEventListener("click", handleLeftButtonClick);

function handleLeftButtonClick() {
  count -= 1;
  // console.log(count);
  if (count === 0) {
    makeInActiveBtn("pathLeft", leftButton);
  }
  if (obj.times > count) {
    makeActiveBtn("pathRight", rightButton);
  }
  currentOffset += obj.result;
  slider.style.transform = `translateX(${currentOffset}px)`;

  leftButton.removeEventListener("click", handleLeftButtonClick);
  rightButton.removeEventListener("click", handleRightButtonClick);
}

slider.addEventListener("transitionend", () => {
  leftButton.addEventListener("click", handleLeftButtonClick);
  rightButton.addEventListener("click", handleRightButtonClick);
});

function makeActiveBtn(arrow, button) {
  document.getElementById(arrow).setAttribute("stroke-opacity", "1");
  button.classList.remove("button__opacity");
  button.disabled = false;
}

function makeInActiveBtn(arrow, button) {
  document.getElementById(arrow).setAttribute("stroke-opacity", "0.4");
  button.classList.add("button__opacity");
  button.disabled = true;
}

// -------------------Timer Start-----------------------

const dayWrapper = document.querySelector(".timer__days");
const hoursWrapper = document.querySelector(".timer__hours");
const minutesWrapper = document.querySelector(".timer__minutes");
const secondsWrapper = document.querySelector(".timer__seconds");

function showResultTime() {
  let currentTime = new Date().getTime();
  let newYearTime = new Date();
  newYearTime.setFullYear(2026, 0, 1);
  newYearTime.setHours(0, 0, 0, 0);
  let resultTimeMilli = newYearTime.getTime() - currentTime;

  let days = Math.floor(resultTimeMilli / 86400000);
  let ostMilli = resultTimeMilli % 86400000;
  let hours = Math.floor(ostMilli / 3600000);
  ostMilli = ostMilli % 3600000;
  let minutes = Math.floor(ostMilli / 60000);
  ostMilli = ostMilli % 60000;
  let seconds = Math.floor(ostMilli / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function modifyTimer() {
  let obj = showResultTime();
  dayWrapper.innerHTML = obj.days;
  hoursWrapper.innerHTML = obj.hours;
  minutesWrapper.innerHTML = obj.minutes;
  secondsWrapper.innerHTML = obj.seconds;
}

setInterval(modifyTimer, 1000);

// ------------Random four cards section(best gifts)------------------
const cardsWrapper = document.querySelector(".gifts__cards");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const cards = [
  { imgClass: "gifts__img-first", titleClass: "gifts__inform-first", title: "For work", subtitle: "Console.log Guru" },
  { imgClass: "gifts__img-second", titleClass: "gifts__inform-second", title: "For health", subtitle: "Hydration Bot" },
  { imgClass: "gifts__img-first", titleClass: "gifts__inform-first", title: "For work", subtitle: "Merge Master" },
  { imgClass: "gifts__img-third", titleClass: "gifts__inform-four", title: "For harmony", subtitle: "Spontaneous Coding Philosopher" },
];

let copyCards=cards.slice();
let shuffleCards = shuffle(copyCards);

function createCards(obj) {
  let card = document.createElement("div");
  card.classList.add("gifts__card");

  let imgDiv = document.createElement("div");
  imgDiv.classList.add(obj.imgClass, "gifts__img-general");

  let informDiv = document.createElement("div");
  informDiv.classList.add("gifts__inform");

  let titleDiv = document.createElement("div");
  titleDiv.classList.add(obj.titleClass, "generation__inform-title");
  titleDiv.textContent = obj.title;

  let subtitleDiv = document.createElement("div");
  subtitleDiv.classList.add("gifts__inform-subtitle");
  subtitleDiv.textContent = obj.subtitle;

  informDiv.appendChild(titleDiv);
  informDiv.appendChild(subtitleDiv);
  card.appendChild(imgDiv);
  card.appendChild(informDiv);

  return card;
}

shuffleCards.forEach((obj) => {
  let card = createCards(obj);
  cardsWrapper.appendChild(card);
});
