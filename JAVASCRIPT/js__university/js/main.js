"use strict";
class Students {
  constructor(First__Name, Last__Name, Age, Gender, University, Course, Faculty) {
    this.First__Name = First__Name;
    this.Last__Name = Last__Name;
    this.Age = Age;
    this.Gender = Gender;
    this.University = University;
    this.Course = Course;
    this.Faculty = Faculty;
    this.Score__1 = Math.floor(Math.random() * 100);
    this.Score__2 = Math.floor(Math.random() * 100);
    this.Score__3 = Math.floor(Math.random() * 100);
    this.Average = (Math.floor((this.Score__1 + this.Score__2 + this.Score__3) / 3));
  }
}
class University {
  constructor(university, course, faculty) {
    this.university = university;
    this.course = course;
    this.faculty = faculty;
  }
}

let STUDENT__DATA = [
  new Students("Jacques", "Hickman", 19, "Female", "Massachusetts", "Biological sciences", "Faculty of Natural Sciences"),
  new Students("Daron", "Munoz", 20, "Male", "Cambridge", "Criminology", "Faculty of Philosophy"),
  new Students("Karla", "Middleton", 22, "Female", "Stanford", "Game design", "Faculty of Education"),
  new Students("Ricardo", "Glass", 21, "Male", "Oxford", "Art and design", "Faculty of Arts"),
];

let UNIVERSITY__DATA = [
  new University("Massachusetts", "1 Biological sciences", "1 Faculty of Natural Sciences"),
  new University("Massachusetts", "2 Biological sciences", "2 Faculty of Natural Sciences"),
  new University("Massachusetts", "3 Biological sciences", "3 Faculty of Natural Sciences"),
  new University("Massachusetts", "4 Biological sciences", "4 Faculty of Natural Sciences"),
  new University("Cambridge", "1 Criminology", "1 Faculty of Philosophy"),
  new University("Cambridge", "2 Criminology", "2 Faculty of Philosophy"),
  new University("Cambridge", "3 Criminology", "3 Faculty of Philosophy"),
  new University("Cambridge", "4 Criminology", "4 Faculty of Philosophy"),
  new University("Stanford", "1 Game design", "1 Faculty of Education"),
  new University("Stanford", "2 Game design", "2 Faculty of Education"),
  new University("Stanford", "3 Game design", "3 Faculty of Education"),
  new University("Stanford", "4 Game design", "4 Faculty of Education"),
  new University("Oxford", "1 Art and design", "1 Faculty of Education"),
  new University("Oxford", "2 Art and design", "2 Faculty of Education"),
  new University("Oxford", "3 Art and design", "3 Faculty of Education"),
  new University("Oxford", "4 Art and design", "4 Faculty of Education"),
  new University("Harvard", "1 Computer science", "1 Faculty of Education"),
  new University("Harvard", "2 Computer science", "2 Faculty of Education"),
  new University("Harvard", "3 Computer science", "3 Faculty of Education"),
  new University("Harvard", "4 Computer science", "4 Faculty of Education"),
  new University("Pennsylvania", "1 Mechanical engineering", "1 Faculty of Arts"),
  new University("Pennsylvania", "2 Mechanical engineering", "2 Faculty of Arts"),
  new University("Pennsylvania", "3 Mechanical engineering", "3 Faculty of Arts"),
  new University("Pennsylvania", "4 Mechanical engineering", "4 Faculty of Arts"),
];

let Nav__SingUp__Btn = document.querySelector("[Nav__SingUp__Btn]");
let Student__SignUp__Container = document.querySelector("[Student__SignUp__Container]");
let Student__SignUp__Overlay = document.querySelector("[Student__SignUp__Overlay]");
let Students__Item__Wrapper = document.querySelector("[Students__Item__Wrapper]");
let Input__First__Name = document.querySelector("[Input__First__Name]");
let Input__Last__Name = document.querySelector("[Input__Last__Name]");
let Input__Age = document.querySelector("[Input__Age]");
let Select__Gender = document.querySelector("[Select__Gender]");
let Select__University = document.querySelector("[Select__University]");
let Select__Course = document.querySelector("[Select__Course]");
let Select__Faculty = document.querySelector("[Select__Faculty]");
let Select__SortBy = document.querySelector("[Select__SortBy]");

let error__text__wrapper = document.querySelector("[error__text__wrapper]");
let error__text = document.querySelector("[error__text]");

let Btn__SignUp = document.querySelector("[Btn__SignUp]");
Btn__SignUp.addEventListener('click', SignUp__Student);

let info__btn = document.querySelector("[info__btn]");
let info__wrapper = document.querySelector("[info__wrapper]");
info__btn.addEventListener('click', () => {
  info__wrapper.classList.toggle('active');
});

Nav__SingUp__Btn.addEventListener('click', OpenClose__SingUp__Container);
Student__SignUp__Overlay.addEventListener('click', OpenClose__SingUp__Container);

Select__SortBy.addEventListener('change', Get__SortBy__Value);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
})

function OpenClose__SingUp__Container() {
  Student__SignUp__Container.classList.toggle('active');
  if (Student__SignUp__Container.classList.contains('active')) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingInlineEnd = `${0.3}rem`;
  } else {
    document.body.style.paddingInlineEnd = `${0}rem`;
    document.body.style.overflow = "auto";
  }
}

function Error__Text(Err__text, Duration) {
  error__text__wrapper.classList.add('active');
  error__text.innerText = `${Err__text}`;
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    error__text__wrapper.classList.remove('active');
    error__text.innerText = ``;
    document.body.style.overflow = "auto";
  }, Duration);
}

function SignUp__Student() {
  let First__Name__Value = Input__First__Name.value;
  let Last__Name__Value = Input__Last__Name.value;
  let Age__Value = Input__Age.value;
  let Gender__Value = Select__Gender.value;
  let University__Value = Select__University.value;
  let Course__Value = Select__Course.value;
  let Faculty__Value = Select__Faculty.value;

  if (First__Name__Value == "") {
    Error__Text("First Name can't be empty", 2000);
  } else if (Last__Name__Value == "") {
    Error__Text("Last Name can't be empty", 2000);
  } else if (Age__Value == "") {
    Error__Text("Age can't be empty", 2000);
  } else if (Gender__Value == "") {
    Error__Text("Gender can't be empty", 2000);
  } else if (University__Value == "") {
    Error__Text("University can't be empty", 2000);
  } else if (Course__Value == "") {
    Error__Text("Course can't be empty", 2000);
  } else if (Faculty__Value == "") {
    Error__Text("Faculty can't be empty", 2000);
  } else {
    STUDENT__DATA.unshift(new Students(First__Name__Value, Last__Name__Value, Age__Value, Gender__Value, University__Value, Course__Value, Faculty__Value));
    Error__Text("Student added successfully", 1000);
    OpenClose__SingUp__Container();
    Get__Student__Data(STUDENT__DATA);
  }
}

function Create__University__Option() {
  let temp = [];

  for (const University of UNIVERSITY__DATA) {
    temp.push(University.university);
  }

  temp = [...new Set(temp)];

  for (const tem of temp) {
    const University__Option = document.createElement("option");
    University__Option.setAttribute("value", tem);
    University__Option.innerText = tem;

    Select__University.appendChild(University__Option);
  }

  Select__University.addEventListener('change', Create__Course__Option);
}

Create__University__Option();

function Create__Course__Option() {
  if (Select__University.value != "") {
    Select__Course.innerHTML = "";
    Select__Course.classList.remove("disabled");

    let Course__Option = document.createElement("option");
    Course__Option.setAttribute("value", "");
    Course__Option.innerText = "Select Course";

    Select__Course.prepend(Course__Option)

    let temp = [];
    let temp__Arr = UNIVERSITY__DATA.filter(i => i.university == Select__University.value);

    for (const Course of temp__Arr) {
      temp.push(Course.course);
    }

    temp = [...new Set(temp)];

    for (const tem of temp) {
      const Course__Option = document.createElement("option");
      Course__Option.setAttribute("value", tem);
      Course__Option.innerText = tem;

      Select__Course.appendChild(Course__Option);
    }
  } else {
    Select__Course.classList.add("disabled");

  }
  Select__Course.addEventListener('change', Create__Faculty__Option);
  Create__Faculty__Option();
}

Create__Course__Option();

function Create__Faculty__Option() {
  if (Select__Course.value != "") {
    Select__Faculty.innerHTML = "";
    Select__Faculty.classList.remove("disabled");

    let Faculty__Option = document.createElement("option");
    Faculty__Option.setAttribute("value", "");
    Faculty__Option.innerText = "Select Faculty";

    Select__Faculty.prepend(Faculty__Option)

    let temp = [];
    let temp__Arr = UNIVERSITY__DATA.filter(i => i.course == Select__Course.value);

    for (const Faculty of temp__Arr) {
      temp.push(Faculty.faculty);
    }

    temp = [...new Set(temp)];

    for (const tem of temp) {
      const Faculty__Option = document.createElement("option");
      Faculty__Option.setAttribute("value", tem);
      Faculty__Option.innerText = tem;

      Select__Faculty.appendChild(Faculty__Option);
    }
  } else {
    Select__Faculty.classList.add("disabled");
  }
}

Create__Faculty__Option();

let STUDENT__NEW__DATA = STUDENT__DATA;

function Get__SortBy__Value() {
  let SortBy__Value = Select__SortBy.value;
  if (SortBy__Value == "") { STUDENT__NEW__DATA = STUDENT__DATA }

  if (SortBy__Value == "Rating") {
    STUDENT__NEW__DATA = STUDENT__DATA;
    STUDENT__NEW__DATA = STUDENT__NEW__DATA.sort((a, b) => {
      if (a.Average < b.Average) {
        return 1
      } else {
        return -1
      }
    });

    Get__Student__Data(STUDENT__NEW__DATA);
  }
  if (SortBy__Value == "Neme") {
    STUDENT__NEW__DATA = STUDENT__DATA;
    STUDENT__NEW__DATA = STUDENT__NEW__DATA.sort((a, b) => {
      a = a.First__Name.toLowerCase();
      b = b.First__Name.toLowerCase();
      if (a < b) {
        return -1
      } else {
        return 1
      }
    });
    Get__Student__Data(STUDENT__NEW__DATA);
  }
  Get__Student__Data(STUDENT__DATA);
}

Get__Student__Data(STUDENT__DATA);

function Get__Student__Data(DATA) {
  Students__Item__Wrapper.innerHTML = "";
  for (const Student of DATA) {

    let Student__item = document.createElement("div");
    Student__item.classList.add("Student__item");

    Student__item.innerHTML = `
    <div class="front__wrapper">
      <h3 class="Student__title">Student</h3>
    <div class="front__details__Wrapper">
      <div class="Student__image ${Student.Gender == "Female" ? "female" : "male"}"></div>
      <div class="Student__FullName">${Student.First__Name} ${Student.Last__Name}</div>
      <div class="details">Age: ${Student.Age}</div>
      <div class="details">Course: ${Student.Course}</div>
      <div class="details">Average Score: ${Student.Average}</div>
    </div>
  </div>
  <div class="back__wrapper">
    <h3 class="Student__title">Student Information</h3>
    <div class="back__details__Wrapper">
      <div class="details__item">
        <span class="title__name">First Name:</span>
        <span class="value">${Student.First__Name}</span>
      </div>

      <div class="details__item">
        <span class="title__name">Last Name:</span>
        <span class="value">${Student.Last__Name}</span>
      </div>

      <div class="details__item">
        <span class="title__name">Age:</span>
        <span class="value">${Student.Age} Years old</span>
      </div>

      <div class="details__item">
        <span class="title__name">Gender:</span>
        <span class="value">${Student.Gender}</span>
      </div>

      <div class="details__item">
        <span class="title__name">University:</span>
        <span class="value">${Student.University}</span>
      </div>

      <div class="details__item">
        <span class="title__name">Course:</span>
        <span class="value">${Student.Course}</span>
      </div>

      <div class="details__item">
        <span class="title__name">Faculty:</span>
        <span class="value">${Student.Faculty}</span>
      </div>

      <div class="details__item">
        <span class="title__name">Average Score:</span>
        <span class="value">${Student.Average}</span>
      </div>

    </div>
  </div>`

    Students__Item__Wrapper.appendChild(Student__item);
  }

  let Students__Item = document.querySelectorAll("[Students__Item__Wrapper] .Student__item");

  Students__Item.forEach(item => {
    item.addEventListener("click", Show__Student__Details);
  });

  function Show__Student__Details() {
    Students__Item.forEach(item => {
      item.addEventListener("click", () => {
        if (this.classList.contains('show__details')) {
          this.classList.remove('show__details');
        } else {
          Students__Item.forEach(i => { i.classList.remove('show__details') });
          this.classList.add('show__details');
        }
      });
    });
  }
}