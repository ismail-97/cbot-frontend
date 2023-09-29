import { tasks } from "./database.js";

function calcTaskPerUnit() {
  let units = {
    0: "Surgery",
    1: "Emergency",
    2: "Pharmacy",
    3: "Orthopedic",
    4: "Xray",

    Surgery: 0,
    Emergency: 0,
    Pharmacy: 0,
    Orthopedic: 0,
    Xray: 0,
  };

  for (let task of tasks) {
    units[task[6]] += 1;
  }
  console.log(units);
  for (let i = 0; i < 5; i++) {
    horizontalByUnitBar[i].style.height = `${units[units[i]] * 15}px`;
  }
  assignDataToBarsByUnit(units);
}
function assignDataToBarsByUnit(units) {
  for (let i = 0; i < 5; i++) {
    let mydiv = document.createElement("span");
    mydiv.className = "columns-data";
    mydiv.textContent = parseInt(horizontalByUnitBar[i].style.height) / 3;

    horizontalByUnitBar[i].appendChild(mydiv);
  }
}

function assignDataToBarsByDay(weekDays) {
  for (let i = 0; i < 7; i++) {
    let mydiv = document.createElement("span");
    mydiv.className = "columns-data";
    mydiv.textContent = parseInt(horizontalByDayBar[i].style.height) / 3;

    horizontalByDayBar[i].appendChild(mydiv);
  }
}
function calcHowManyDays() {
  let weekDays = {
    0: "Saturday",
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    Saturday: 0,
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
  };
  for (let task of tasks) {
    weekDays[task[1]] += 1;
  }

  for (let i = 0; i < 7; i++) {
    horizontalByDayBar[i].style.height = `${weekDays[weekDays[i]] * 15}px`;
  }

  assignDataToBarsByDay(weekDays);
}

function showInfo() {
  for (let i = 0; i < 7; i++) {
    // unit column
    let unitDiv = document.createElement("div");
    let unitSpan = document.createElement("span");
    unitSpan.className = "h6 text-mainColor2 capitalize";
    unitSpan.textContent = tasks[i][6];
    unitDiv.appendChild(unitSpan);
    dataColumns[0].appendChild(unitDiv);

    // floor column
    let floorDiv = document.createElement("div");
    let floorSpan = document.createElement("span");
    floorSpan.className = "h6 text-mainColor2 capitalize";
    floorSpan.textContent = tasks[i][5];
    floorDiv.appendChild(floorSpan);
    dataColumns[1].appendChild(floorDiv);

    // duration column
    let durationDiv = document.createElement("div");
    let durationSpan = document.createElement("span");
    durationSpan.className = "h6 text-mainColor2 capitalize";
    durationSpan.textContent = tasks[i][4] + ":00";
    durationDiv.appendChild(durationSpan);
    dataColumns[2].appendChild(durationDiv);

    // time column
    let timeDiv = document.createElement("div");
    let timeSpan = document.createElement("span");
    timeSpan.className = "h6 text-mainColor2 capitalize";
    timeSpan.textContent = tasks[i][2] + " " + tasks[i][3];
    timeDiv.appendChild(timeSpan);
    dataColumns[3].appendChild(timeDiv);
  }
}

let dataColumns = document.querySelectorAll(".last-tasks .columns-part .col");
showInfo();

let horizontalByDayBar = document.querySelectorAll(".horizontal-bar-byday div");
calcHowManyDays();

let horizontalByUnitBar = document.querySelectorAll(
  ".horizontal-bar-byunit div"
);
calcTaskPerUnit();
