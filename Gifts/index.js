// --------------------Create cards----------------

const ALL = document.querySelector(".navigation__item-all");
const WORK = document.querySelector(".navigation__item-work");
const HEALTH = document.querySelector(".navigation__item-health");
const HARMONY = document.querySelector(".navigation__item-harmony");
const cardsWrapper = document.querySelector(".gifts__cards");
let heightCardWrapper = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const forWork = [
  { imgClass: "gifts__img-first", titleClass: "gifts__inform-first", title: "For work", subtitle: "Console.log Guru" },
  { imgClass: "gifts__img-first", titleClass: "gifts__inform-first", title: "For work", subtitle: "Bug Magnet" },
  { imgClass: "gifts__img-first", titleClass: "gifts__inform-first", title: "For work", subtitle: "Shortcut Cheater" },
  { imgClass: "gifts__img-first", titleClass: "gifts__inform-first", title: "For work", subtitle: "Merge Master" },
];

const forHealth = [
  { imgClass: "gifts__img-second", titleClass: "gifts__inform-second", title: "For health", subtitle: "Step Master" },
  { imgClass: "gifts__img-second", titleClass: "gifts__inform-second", title: "For health", subtitle: "Posture Levitation" },
  { imgClass: "gifts__img-second", titleClass: "gifts__inform-second", title: "For health", subtitle: "Snack Resister" },
  { imgClass: "gifts__img-second", titleClass: "gifts__inform-second", title: "For health", subtitle: "Hydration Bot" },
];

const forHarmony = [
  { imgClass: "gifts__img-third", titleClass: "gifts__inform-four", title: "For harmony", subtitle: "Bug Acceptance Guru" },
  { imgClass: "gifts__img-third", titleClass: "gifts__inform-four", title: "For harmony", subtitle: "Error Laugher" },
  { imgClass: "gifts__img-third", titleClass: "gifts__inform-four", title: "For harmony", subtitle: "Joy Charger" },
  { imgClass: "gifts__img-third", titleClass: "gifts__inform-four", title: "For harmony", subtitle: "Spontaneous Coding Philosopher" },
];

let repeatCards = [forWork, forHealth, forHarmony].map((arr) => Array(3).fill(arr).flat()).flat();

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

ALL.addEventListener("click", () => {
  let shuffleResult = shuffle([...repeatCards]);
  toggleCards(shuffleResult);
  addStyles(ALL);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

document.addEventListener("DOMContentLoaded", () => {
  let shuffleResult = shuffle([...repeatCards]);
  toggleCards(shuffleResult);
  addStyles(ALL);
  checkWidth();
});

WORK.addEventListener("click", () => {
  let workArray = repeatCards.slice(0, 12);
  toggleCards(shuffle(workArray));
  addStyles(WORK);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

HEALTH.addEventListener("click", () => {
  let workArray = repeatCards.slice(12, 24);
  toggleCards(shuffle(workArray));
  addStyles(HEALTH);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

HARMONY.addEventListener("click", () => {
  let workArray = repeatCards.slice(24, 36);
  toggleCards(shuffle(workArray));
  addStyles(HARMONY);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

function toggleCards(currentArray) {
  cardsWrapper.innerHTML = "";
  currentArray.forEach((obj) => {
    let card = createCards(obj);
    cardsWrapper.appendChild(card);
  });
}

function addStyles(button) {
  let allButtons = Array.from(document.querySelectorAll(".navigation__item"));
  allButtons.forEach((value) => {
    removeStyles(value);
  });
  button.disabled = true;
  button.classList.add("btn__bg");
}

function removeStyles(button) {
  button.disabled = false;
  button.classList.remove("btn__bg");
}

// ---------Button Scroll-to-Top---------------

window.addEventListener("resize", checkWidth);
const buttonTop = document.querySelector(".scroll__top-wrapper");

buttonTop.addEventListener("click", () => {
  checkWidth();
  buttonTop.classList.add("scroll__top-none");
});

function checkWidth() {
  if (window.innerWidth <= 768) {
    window.addEventListener("scroll", checkTop);
    heightCardWrapper = showHeightBlock();
    // console.log(heightCardWrapper)
  } else {
    window.removeEventListener("scroll", checkTop);
    buttonTop.classList.add("scroll__top-none");
  }
}

function checkTop() {
  const isHidden = buttonTop.classList.contains("scroll__top-none");
  if (window.scrollY >= 900 && window.scrollY <= heightCardWrapper) {
    if (isHidden) {
      buttonTop.classList.remove("scroll__top-none");
    }
  } else {
    if (!isHidden) {
      buttonTop.classList.add("scroll__top-none");
    }
  }
}

function showHeightBlock() {
  let height = cardsWrapper.offsetHeight;
  return height;
}
