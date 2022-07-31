let text = document.querySelector(".text");
let input = document.querySelector(".input");

const WEEK = [
  { day: "monday", working__day: true },
  { day: "tuesday", working__day: true },
  { day: "wednesday", working__day: true },
  { day: "thursday", working__day: true },
  { day: "friday", working__day: true },
  { day: "saturday", working__day: false },
  { day: "sunday", working__day: false },
];

function submit() {
  let value = input.value.toLowerCase().trim();
  if (!value == "") {
    for (let week of WEEK) {
      
      if (value == week.day.toLowerCase() && !week.working__day == false) {
        text.textContent = `${value + " is working day "}`;
      } else if (value == week.day.toLowerCase() && !week.working__day == true) {
        text.textContent = `${value + " is not working day "}`;
      }

      if (WEEK[0].day != value && WEEK[1].day != value && WEEK[2].day != value && WEEK[3].day != value && WEEK[4].day != value && WEEK[5].day != value && WEEK[6].day != value && value != "") {
        text.textContent = `${" sory! - " + value + " - is not exist day or not found! "}`;
      }

    }
  } else {
    text.textContent = `${" sory! try again!"}`;
  }
}