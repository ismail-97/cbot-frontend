import { tasks } from "./database.js";

// for changing dropdown-menu text
let items = document.querySelectorAll(".dropdown-menu li a");
function changeText() {
  this.parentNode.parentNode.parentNode.childNodes[1].textContent = this.text;
}

items.forEach((item) => item.addEventListener("click", changeText));

// calculate the info about the current cbot in the slider
let sliderBtns = document.querySelectorAll(".carousel button");
let dataSpans = document.querySelectorAll(".data div span");

showInfo();

function calcInfo(name) {
  let timeByMinutes = 0;
  let timeUsedByMinutes = 0;
  let roomsDisinfected = 0;
  let tasksCount = 0;
  let completedTasks = 0;
  for (let task of tasks) {
    if (task[7] === name) {
      timeByMinutes += task[4];
      tasksCount++;
      if (task[9] === true) {
        timeUsedByMinutes += task[4];
        roomsDisinfected++;
        completedTasks++;
      }
    }
  }
  return [
    Math.floor(timeByMinutes / 60) +
      " hours " +
      (timeByMinutes % 60) +
      " minutes",
    Math.floor(timeUsedByMinutes / 60) +
      " hours " +
      (timeUsedByMinutes % 60) +
      " minutes",
    roomsDisinfected,
    ((completedTasks * 100) / tasksCount).toFixed(2) + "%",
  ];
}

function assignCBotDataToSpans(CBotData) {
  for (let i = 0; i < dataSpans.length; i++) {
    dataSpans[i].textContent = CBotData[i];
  }
}

function getCurrentBot() {
  return document.querySelector(".carousel-inner .active p").textContent;
}
function showInfo() {
  setTimeout(() => {
    let currentBot = getCurrentBot();
    let CBotData = calcInfo(currentBot);
    assignCBotDataToSpans(CBotData);
  }, 605);
}

sliderBtns.forEach((sliderBtn) => {
  sliderBtn.addEventListener("click", showInfo);
});

// display the the info about the current cbot in the card
