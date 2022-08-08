let text = document.querySelector(".text");
let input = document.querySelector(".input");

// const DAYS = [
//   { day: "monday", working__day: true },
//   { day: "tuesday", working__day: true },
//   { day: "wednesday", working__day: true },
//   { day: "thursday", working__day: true },
//   { day: "friday", working__day: true },
//   { day: "saturday", working__day: false },
//   { day: "sunday", working__day: false },
// ];

// function submit() {
//   let value = input.value.toLowerCase().trim();
//   if (!value == "") {
//     for (let day of DAYS) {

//       if (value == day.day.toLowerCase() && !day.working__day == false) {
//         text.textContent = `${value + " is working day "}`;
//       } else if (value == day.day.toLowerCase() && !day.working__day == true) {
//         text.textContent = `${value + " is not working day "}`;
//       }

//       if (DAYS[0].day != value && DAYS[1].day != value && DAYS[2].day != value && DAYS[3].day != value && DAYS[4].day != value && DAYS[5].day != value && DAYS[6].day != value && value != "") {
//         text.textContent = `${" sory! - " + value + " - is not exist day or not found! "}`;
//       }

//     }
//   } else {
//     text.textContent = `${" sory! try again!"}`;
//   }
// }

// let NUM__LENGHT = NUM__ARAY.length;

// console.log(NUM__ARAY[Math.floor(NUM__LENGHT / 2)]);
// console.log(NUM__ARAY[Math.floor(NUM__LENGHT / 2) - 1], NUM__ARAY[Math.floor(NUM__LENGHT / 2)]);

// for (let i of NUM__ARAY) {
//   console.log(i);
// }

// let INITIALVALUE = 0;
// let SUM__VALUE = NUM__ARAY.reduce((PREVVALUE, CURENTVALUE) => PREVVALUE + CURENTVALUE, INITIALVALUE);
// console.log(SUM__VALUE,INITIALVALUE);

// let NUM__ARAY = [12, 54, 65, 87, 35, 43, 79, 46, 23,79];
// let even;
// let odd;

// let SUM = NUM__ARAY.reduce((a,b)=> a + b);
// console.log(SUM); // 523 - ჯამი

// for (let i of NUM__ARAY) {
//   if (i % 2 == 0) {
//     even = i;
//     console.log(even + ' even'); // 12, 54, 46 - ყველა ლუწი
//   } else {
//     odd = i;
//     console.log(odd + ' odd'); // 65, 87, 35, 43, 79, 23, 79 - ყველა კენტი
//   }
// }

// for (let i = 0; i < 5; i++){
//   console.log(NUM__ARAY[i]);
// }

function submit() {
  let NUM__ARAY = [
    54, 2, 65, 87, 35, 43, 2, -5, -5, 79, 46, 87, 23, 79, -5, 100, 100,
  ];
  let Max = NUM__ARAY[0];
  let Min = NUM__ARAY[0];
  let max__repeat = 0;
  let min__repeat = 0;

  let value = input.value;
  NUM__ARAY.push(Number(value));
  console.log(NUM__ARAY);

  for (array in NUM__ARAY) {
    if (NUM__ARAY[array] < Min) {
      Min = NUM__ARAY[array];
    } else if (NUM__ARAY[array] > Max) {
      Max = NUM__ARAY[array];
    }
  }

  for (array in NUM__ARAY) {
    if (NUM__ARAY[array] == Max) {
      max__repeat++;
    } else if (NUM__ARAY[array] == Min) {
      min__repeat++;
    }
  }

  let Difference = Max - Min;
  console.log(Difference + " - Difference");
  console.log(min__repeat + " - min repeat");
  console.log(max__repeat + " - max repeat");
}
// ორივე დავალების პასუხი აქ არის მოცემული


