const ALL = document.querySelector(".navigation__item-all");
const WORK = document.querySelector(".navigation__item-work");
const HEALTH = document.querySelector(".navigation__item-health");
const HARMONY = document.querySelector(".navigation__item-harmony");
const cardsWrapper = document.querySelector(".gifts__cards");

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
});

document.addEventListener("DOMContentLoaded", () => {
  let shuffleResult = shuffle([...repeatCards]);
  toggleCards(shuffleResult);
  addStyles(ALL);
});

WORK.addEventListener("click", () => {
  let workArray = repeatCards.slice(0, 12);
  toggleCards(shuffle(workArray));
  addStyles(WORK);
});

HEALTH.addEventListener("click", () => {
  let workArray = repeatCards.slice(12, 24);
  toggleCards(shuffle(workArray));
  addStyles(HEALTH);
});

HARMONY.addEventListener("click", () => {
  let workArray = repeatCards.slice(24, 36);
  toggleCards(shuffle(workArray));
  addStyles(HARMONY);
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
  allButtons.forEach((value)=>{
    removeStyles(value);
  })
  button.disabled = true;
  button.classList.add("btn__bg");
}

function removeStyles(button) {
  button.disabled = false;
  button.classList.remove("btn__bg");
}
