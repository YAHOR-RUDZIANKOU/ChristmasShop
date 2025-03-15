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
  {
    imgClass: "gifts__img-first",
    titleClass: "gifts__inform-first",
    title: "For work",
    subtitle: "Console.log Guru",
    role: "Uses console.log like a crystal ball to find any issue.",
    live: 5,
    create: 5,
    love: 2,
    dream: 4,
  },
  {
    imgClass: "gifts__img-first",
    titleClass: "gifts__inform-first",
    title: "For work",
    subtitle: "Bug Magnet",
    role: "Bugs stick like a fluffy cat to a warm laptop.",
    live: 5,
    create: 4,
    love: 4,
    dream: 2,
  },
  {
    imgClass: "gifts__img-first",
    titleClass: "gifts__inform-first",
    title: "For work",
    subtitle: "Shortcut Cheater",
    role: "Presses keyboard shortcuts faster than he talks out loud.",
    live: 3,
    create: 4,
    love: 5,
    dream: 5,
  },
  {
    imgClass: "gifts__img-first",
    titleClass: "gifts__inform-first",
    title: "For work",
    subtitle: "Merge Master",
    role: "Runs a git like a conductor runs an orchestra.",
    live: 4,
    create: 2,
    love: 2,
    dream: 5,
  },
];

const forHealth = [
  {
    imgClass: "gifts__img-second",
    titleClass: "gifts__inform-second",
    title: "For health",
    subtitle: "Step Master",
    role: "Gets 10,000 steps a day even while sitting at the computer.",
    live: 2,
    create: 2,
    love: 3,
    dream: 4,
  },
  {
    imgClass: "gifts__img-second",
    titleClass: "gifts__inform-second",
    title: "For health",
    subtitle: "Posture Levitation",
    role: "Keeps his back straight, as if he is being supported by an invisible force.",
    live: 4,
    create: 4,
    love: 5,
    dream: 1,
  },
  {
    imgClass: "gifts__img-second",
    titleClass: "gifts__inform-second",
    title: "For health",
    subtitle: "Snack Resister",
    role: "Has the willpower to conquer even the most delicious snacks.",
    live: 4,
    create: 5,
    love: 3,
    dream: 4,
  },
  {
    imgClass: "gifts__img-second",
    titleClass: "gifts__inform-second",
    title: "For health",
    subtitle: "Hydration Bot",
    role: "Reminds you to drink water more often than a clock reminds you of the time.",
    live: 5,
    create: 5,
    love: 2,
    dream: 2,
  },
];

const forHarmony = [
  {
    imgClass: "gifts__img-third",
    titleClass: "gifts__inform-four",
    title: "For harmony",
    subtitle: "Bug Acceptance Guru",
    role: "Perceives every bug as a lesson, not a problem.",
    live: 2,
    create: 5,
    love: 5,
    dream: 4,
  },
  {
    imgClass: "gifts__img-third",
    titleClass: "gifts__inform-four",
    title: "For harmony",
    subtitle: "Error Laugher",
    role: "Laughs at code errors like they’re jokes instead of getting angry.",
    live: 4,
    create: 4,
    love: 4,
    dream: 4,
  },
  {
    imgClass: "gifts__img-third",
    titleClass: "gifts__inform-four",
    title: "For harmony",
    subtitle: "Joy Charger",
    role: "Charges you with positivity faster than a quick smartphone charge.",
    live: 1,
    create: 4,
    love: 4,
    dream: 3,
  },
  {
    imgClass: "gifts__img-third",
    titleClass: "gifts__inform-four",
    title: "For harmony",
    subtitle: "Spontaneous Coding Philosopher",
    role: "Ponders programming as deeply as the meaning of life.",
    live: 5,
    create: 5,
    love: 5,
    dream: 3,
  },
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
  findAllCards();
  addStyles(ALL);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

document.addEventListener("DOMContentLoaded", () => {
  let shuffleResult = shuffle([...repeatCards]);
  toggleCards(shuffleResult);
  findAllCards();
  addStyles(ALL);
  checkWidth();
});

WORK.addEventListener("click", () => {
  let workArray = repeatCards.slice(0, 12);
  toggleCards(shuffle(workArray));
  findAllCards();
  addStyles(WORK);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

HEALTH.addEventListener("click", () => {
  let workArray = repeatCards.slice(12, 24);
  toggleCards(shuffle(workArray));
  findAllCards();
  addStyles(HEALTH);
  heightCardWrapper = showHeightBlock();
  // console.log(heightCardWrapper)
});

HARMONY.addEventListener("click", () => {
  let workArray = repeatCards.slice(24, 36);
  toggleCards(shuffle(workArray));
  findAllCards();
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

// --------------Implementation of the Modal for selected gift on both pages-----------

function findAllCards() {
  const allCards = Array.from(document.querySelectorAll(".gifts__card"));
  showWindowCard(allCards);
}

function createGiftCard(data) {
  const darkenWrapper = document.createElement("div");
  darkenWrapper.classList.add("show__darken-windows");

  const wrapper = document.createElement("div");
  wrapper.classList.add("show__cards-wrapper");

  const inner = document.createElement("div");
  inner.classList.add("show__inner");

  const closeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  closeIcon.classList.add("show__cards-close");
  closeIcon.setAttribute("width", "40");
  closeIcon.setAttribute("height", "40");
  closeIcon.setAttribute("viewBox", "0 0 40 40");

  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M30 10L10 30");
  path1.setAttribute("stroke", "#181C29");
  path1.setAttribute("stroke-width", "2");
  path1.setAttribute("stroke-linecap", "round");
  path1.setAttribute("stroke-linejoin", "round");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M10 10L30 30");
  path2.setAttribute("stroke", "#181C29");
  path2.setAttribute("stroke-width", "2");
  path2.setAttribute("stroke-linecap", "round");
  path2.setAttribute("stroke-linejoin", "round");

  closeIcon.appendChild(path1);
  closeIcon.appendChild(path2);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add(data.imgClass, "gifts__img-general");

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("gifts__inform");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add(data.titleClass, "generation__inform-title");
  titleDiv.textContent = data.title;

  const subtitleDiv = document.createElement("div");
  subtitleDiv.classList.add("gifts__inform-subtitle");
  subtitleDiv.textContent = data.subtitle;

  const textDiv = document.createElement("div");
  textDiv.classList.add("show__text");
  textDiv.textContent = data.role;

  const superWrapper = document.createElement("div");
  superWrapper.classList.add("gifts__super-wrapper");

  const superTitle = document.createElement("div");
  superTitle.classList.add("gifts__super-title");
  superTitle.textContent = "Adds superpowers to:";

  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("gifts__wrapper");

  const categories = ["live", "create", "love", "dream"];

  categories.forEach((category) => {
    const row = document.createElement("div");
    row.classList.add("gifts__row");

    const text = document.createElement("div");
    text.classList.add("gifts__row-text", "gifts__row-general");
    text.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    const number = document.createElement("div");
    number.classList.add("gifts__row-number", "gifts__row-general");
    number.textContent = `+${data[category] * 100}`;

    const imagesDiv = document.createElement("div");
    imagesDiv.classList.add("gifts__row-imges");

    for (let i = 0; i < 5; i++) {
      const img = document.createElement("img");
      img.src = i < data[category] ? "/images/realItem.png" : "/images/fakeItem.png";
      img.alt = "snow";
      imagesDiv.appendChild(img);
    }

    row.appendChild(text);
    row.appendChild(number);
    row.appendChild(imagesDiv);
    wrapperDiv.appendChild(row);
  });

  superWrapper.appendChild(superTitle);
  superWrapper.appendChild(wrapperDiv);
  infoDiv.appendChild(titleDiv);
  infoDiv.appendChild(subtitleDiv);
  infoDiv.appendChild(textDiv);
  infoDiv.appendChild(superWrapper);
  inner.appendChild(closeIcon);
  inner.appendChild(imgDiv);
  inner.appendChild(infoDiv);
  wrapper.appendChild(inner);
  darkenWrapper.appendChild(wrapper);

  return darkenWrapper;
}

function showWindowCard(allCardsPar) {
  allCardsPar.forEach((card) => {
    card.addEventListener("click", () => {
      let targetSubtitles = card.querySelector(".gifts__inform-subtitle").innerHTML;
      const checkSubtitle = repeatCards.find((obj) => {
        if (obj.subtitle === targetSubtitles) {
          return obj;
        }
      });
      let modalWindows = createGiftCard(checkSubtitle);
      document.body.appendChild(modalWindows);
      document.documentElement.classList.add('no-scroll')

      function clickHandler(event){
        deleteCard(event, modalWindows,clickHandler)
      }
      document.addEventListener('click',clickHandler,true);
    });
  });
}

function deleteCard(event,modalWindows,clickHandler){
  console.log('1');
  if (!(event.target.closest('.show__inner'))) {
    document.body.removeChild(modalWindows);
    document.removeEventListener('click',clickHandler,true);
    document.documentElement.classList.remove('no-scroll')
  }
}