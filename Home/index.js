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
// ----------Slider End---------------------------


