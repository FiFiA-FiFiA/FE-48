// let text = document.querySelector(".text");
// let input = document.querySelector(".input");

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

// let NUM__ARAY = [54, 2, 65, 87, 35, 43, 2, -5, -5, 79, 46, 87, 23, 79, -5, 100, 100];
// let Max = NUM__ARAY[0];
// let Min = NUM__ARAY[0];
// let max__repeat = 0;
// let min__repeat = 0;

// for (array in NUM__ARAY) {
//   if (NUM__ARAY[array] < Min) {
//     Min = NUM__ARAY[array];
//   } else if (NUM__ARAY[array] > Max) {
//     Max = NUM__ARAY[array];
//   }
// }

// for (array in NUM__ARAY) {
//   if (NUM__ARAY[array] == Max) {
//     max__repeat++;
//   } else if (NUM__ARAY[array] == Min) {
//     min__repeat++;
//   }
// }

// let Difference = Max - Min;
// console.log(Difference + " - Difference");
// console.log(min__repeat + " - min repeat");
// console.log(max__repeat + " - max repeat");

// ორივე დავალების პასუხი აქ არის მოცემული

// let NUM__ARAY = [23, 43, 25, 16, 58];
// let t = 0;

// for (let i in NUM__ARAY) {
//   for (let n in NUM__ARAY) {
//     if (NUM__ARAY[i] < NUM__ARAY[n]) {
//       t = NUM__ARAY[n];
//       NUM__ARAY[n] = NUM__ARAY[i];
//       NUM__ARAY[i] = t;
//     }
//   }
// }
// console.log(NUM__ARAY);

// let Num__Array = [7567, 236, -87688, 134, 568, 98659, 13524, 745, 85684, 23542, 134, 767, 23452];
// let Three__digits = [];
// let five__digits = [];

// for (let i in Num__Array) {
//   if (Num__Array[i].toString().length == 3) {
//     if (Num__Array[i] % 2 !== 0) {
//       Three__digits.push(Num__Array[i]);
//     }
//   } else if (Num__Array[i].toString().length == 5) {
//     if (Num__Array[i].toString().slice(-1) == Num__Array[i].toString()[0]) {
//       five__digits.push(Num__Array[i]);
//     }
//   }
// }

// console.log(Three__digits); // პირველის დავალების პასუხი
// console.log(five__digits); // მეორე დასვალების პასსუხი

// function p(a=0, b=0, c=0) {
//   if (a < b + c && b < a + c && c < b + a && a > 0 && b > 0 && c > 0) {
//     return a + b + c;
//   } else {
//     return "cannot tringle";
//   }
// }

// console.log(p(26, 43, 34));

// function array(arr) {
//   let max__string = arr[0];
//   for (let i of arr) {
//     if (i.length > max__string.length) {
//       max__string = i;
//     }
//   }
//   return max__string;
// }

// console.log(array(["4155", "hello", "bye", "hello world", "23566"]));

// const Str = ['hello', 'world'];
// let vowel = [];

// for (let i of Str) {
//   if (Str[i] == 'a' || Str[i] == 'e' || Str[i] == 'i' || Str[i] == 'o' || Str[i] == 'u') {
//     vowel.push(Str[i]);
//   }
// }
// console.log(vowel);

// function vowels__count(str) {
//   let s = [];
//   let vowels = ["a", "e", "i", "o", "u"];

//   for (let i of str.toLowerCase()) {
//     for (let v of vowels) {
//       if (i === v) {
//         s.push(vowels[v]);
//       }
//     }
//   }
//   return s;
// }

// let txt = ["Hi I am a developer", "Hi I am", "I am", "I am a developer"];
// console.log(vowels__count(txt))

// function array(arr) {

//   let vowels = "AEIOU".toLowerCase();
//   let consonat = "B C D F G J K L M N P Q S T V X Z H R W Y".toLowerCase();
//   let Vstring = [];
//   let Cstring = [];
//   let res = [];

//   for (let i of arr) {
//     for (let s of i) {
//       for (let v of vowels) {
//         if (s === v) {
//           Vstring.push(s)
//         }
//       }
//     }
//   }

//   for (let i of arr) {
//     for (let s of i) {
//       for (let c of consonat) {
//         if (s === c) {
//           Cstring.push(s)
//         }
//       }
//     }
//   }

//   for (let i of arr) {
//     if (Vstring.length > Cstring.length) {
//       res.push(i)
//     }
//   }
//   return [Vstring, Cstring, res];
// }
// console.log(array(["world", "hello", "wooorld"]));

// function string(arr) {
//   let new__arr = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let s = 0; s < arr.length; s++) {
//       if (arr[i].length < arr[s].length) {
//         let S = new__arr[s];
//         new__arr[s] = new__arr[i];
//         new__arr[i] = S;
//       }
//     }
//   }
//   return new__arr;
// }

// let arr = ['hello', 'world', 'developer'];
// console.log(string(arr));

// function user(user__arr, search__value) {
//   let new__user__arr = [];
//   search__value = 'n'.toLowerCase();

//   for (let i of user__arr) {
//     if (i[0].toLowerCase() == search__value) {
//       new__user__arr.push(i)
//     } else {
//       console.log("user name not defind");
//     }
//   }
//   return new__user__arr;
// }

// let user__arr = ["gabrieli", "mariami", "nino", "natia", "megi", "giorgi", "dato", "nika"];
// console.log(user(user__arr)); //  ['nino', 'natia', 'nika']

// function Percent(NUM__ARAY) {

//   let Max = NUM__ARAY[0];
//   let Min = NUM__ARAY[0];
//   let percent = 0;

//   for (let array in NUM__ARAY) {
//     if (NUM__ARAY[array] < Min) {
//       Min = NUM__ARAY[array];
//     } else if (NUM__ARAY[array] > Max) {
//       Max = NUM__ARAY[array];
//     }
//   }

//   percent = (Max / Min) * 100;

//   return [percent];
// }

// let NUM__ARAY = [54, 2, 65, 87, 35, 43];
// console.log("Diference " + Percent(NUM__ARAY) + "%"); // Diference 4350%

// let NUM__ARAY = [12, 54, 65, 87, 35, 43, 79, 46, 23,79];
// let even__text = document.querySelector('[even]');
// let odd__text = document.querySelector('[odd]');
// let even = [];
// let odd = [];
// let index = 1;

// function clicked() {
//   index++;
//   for (let i = 0; i < index; i++) {
//     if (NUM__ARAY[i] % 2 == 0) {
//       even += NUM__ARAY[i];
//       even__text.classList.add('even');
//       even__text.innerText = even;
//     } else {
//       odd += NUM__ARAY[i];
//       odd__text.classList.add('odd');
//       odd__text.innerText = odd;
//     }
//   }
// }

// let first__password = document.querySelector("[Password]");
// let second__password = document.querySelector("[Repeat__Password]");
// let text = document.querySelector("[text]");

// function clicked() {
//     let f_p = first__password.value;
//     let s_p = second__password.value;

//     if (f_p != "" && s_p != "") {
//         if (f_p === s_p) {
//             text.innerText = "password matches";
//             text.style.color = "#0F0";
//         } else {
//             text.innerText = "password does not match!";
//             text.style.color = "#F00";
//         }
//     } else {
//         text.innerText = "Please fill all the fields!";
//         text.style.color = "#F00";
//     }
// }
// ეს რათქმა უნდა არ არის სწორი. ნუ არ გამომივიდა ისეთი როგორიც უნდა იყოს
// შენს ახსნილს მოვუსმენ თორე ლოგიკას ვერადა ვერ მივხვდი


// function submit() {
//     let input = document.querySelector("[input]");
//     let value = input.value;
//     let lowercase = 0;
//     let uppercase = 0;

//     for (let val of value) {
//         if (val == val.toLowerCase()) {
//             lowercase++
//         } else {
//             uppercase++
//         }
//     }
//     console.log(lowercase, uppercase);
// }

// function Search() {
//     const users = ["mariami", "gabrieli", "nino", "mariami", "natia", "nino", "gabrieli", "natia", "nino", "megi", "giorgi"];
//     let input = document.querySelector("[input]");
//     let value = input.value;
//     let counter = 0;

//     for (let user of users) {
//         if (user.toLowerCase() == value.toLowerCase()) {
//             counter++;
//         }
//     }

//     if (counter == 0) {
//         console.log("user not found");
//     } else {
//         console.log(counter)
//     }
// }

let input = document.querySelector("[input]");
let text = document.querySelector("[text]");
let submit__btn = document.querySelector("[submit]");
let random__number = Math.floor(Math.random() * 20);
let counter = 0;

function reset() {
  random__number = Math.floor(Math.random() * 20);
  console.log(random__number);
  counter = 0;
  text.innerText = ``;
  input.value = "";
  input.removeAttribute("disabled");
  input.classList.remove("disabled");
  submit__btn.removeAttribute("disabled");
  submit__btn.classList.remove("disabled");
}

function submit() {
  let value = input.value;

  if (value.length <= 20 && value <= 20) {

    if (random__number == value) {
      text.innerText = `You Win number of attempts ( ${counter} )`;
      text.style.color = "#10ba01";
      input.setAttribute("disabled", "");
      submit__btn.setAttribute("disabled", "");
      submit__btn.classList.add("disabled");
      input.classList.add("disabled");
    } else {
      text.innerText = `Opps`;
      text.style.color = "#f00";
      input.removeAttribute("disabled");
      input.classList.remove("disabled");
      submit__btn.removeAttribute("disabled");
      submit__btn.classList.remove("disabled");

      setTimeout(() => {
        input.value = "";
        text.innerText = ``;
      }, 2000);
    }

    if (counter <= 2 && random__number == value) {
      text.innerText = `cool you win number of attempts ( ${counter} )`;
      text.style.color = "#10ba01";
    }


  } else {
    text.innerText = `cannot be more than 20`;
    text.style.color = "#fd0";

    setTimeout(() => {
      input.value = "";
      text.innerText = ``;
    }, 2000);
  }


  if (value.length == 0) {
    text.innerText = `input cannot be empty`;

    setTimeout(() => {
      input.value = "";
      text.innerText = ``;
    }, 2000);
  }

  counter++;
}

console.log(random__number);