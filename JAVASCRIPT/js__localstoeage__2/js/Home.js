// ======= Header Start ======= // 
const Header__Logout__Btn = document.querySelector("[Header__Logout__Btn]");
const Btn__User__Icon = document.querySelector("[Btn__User__Icon]");
// ======= Header End ======= //

// ======= Nav Start ======= // 
const Nav__Container = document.querySelector("[Nav__Container]");
const Nav__Overlay = document.querySelector("[Nav__Overlay]");
const Btn__NavClose = document.querySelector("[Btn__NavClose]");
const Nav__Title = document.querySelector("[Nav__Title]");
const Btn__NavSetting = document.querySelector("[Btn__NavSetting]");
const Nav__UserContent = document.querySelectorAll("[Nav__UserContent]");
const Nav__UserProfileWrapper = document.querySelector("[Nav__UserProfileWrapper]");
// Nav Input
const Email__Input = document.querySelector("[Nav__Forgot__Email__Input]");
const SecretKey__Input = document.querySelector("[Nav__Forgot__SecretKey__Input]");
const NewPassword__input = document.querySelector("[Nav__NewPassword__input]");
const Confirm__NewPassword__input = document.querySelector("[Nav__Confirm__NewPassword__input]");
// Nav Action Buttons
const Nav__Button__Wrapper = document.querySelector("[Nav__Button__Wrapper]");
const Nav__Btn__Logout = document.querySelector("[Nav__Btn__Logout]");
const Nav__Create__NewAccount = document.querySelector("[Nav__Create__NewAccount]");
const Nav__Btn__ChangePassword = document.querySelector("[Nav__Btn__ChangePassword]");

const err__text = document.querySelector("[err__text]");
// ======= Nav End ======= //

// ======= Main Start ======= //
const Select__SortBy = document.querySelector("[Select__SortBy]");
const People__Item__Wrapper = document.querySelector("[People__Item__Wrapper]");
// ======= Aside Start ======= //
const Aside__Container = document.querySelector("[Aside__Container]");
const Aside__Overlay = document.querySelector("[Aside__Overlay]");
const User__Profile__Content = document.querySelector("[User__Profile__Content]");
// ======= Aside End ======= //
// ======= Main End ======= //

// User Array
let All__User__Arr = JSON.parse(localStorage.getItem("User")) || [];
let Ovner__User = JSON.parse(localStorage.getItem("Logged__User")) || [];
let Logged = JSON.parse(localStorage.getItem("Logged")) || "felse";
let New__All__User__Arr = All__User__Arr;

// ======= Eventlistener Start ======= //
Btn__User__Icon.addEventListener('click', OpanClose__Nav__Container);
Btn__NavClose.addEventListener('click', OpanClose__Nav__Container);
Nav__Overlay.addEventListener('click', OpanClose__Nav__Container);

Header__Logout__Btn.addEventListener('click', Loguot__Ovner__User);
Nav__Btn__Logout.addEventListener('click', Loguot__Ovner__User);
Nav__Create__NewAccount.addEventListener('click', Loguot__Ovner__User);
Nav__Btn__ChangePassword.addEventListener('click', ResetPassword__Valid);
Btn__NavSetting.addEventListener('click', Toggle__Nav__UserContent);

Select__SortBy.addEventListener('change', Get__SortBy__Value);

Aside__Overlay.addEventListener('click', () => {
  Aside__Container.classList.remove('active');
});

// ======= Eventlistener End ======= //


// ======= Function Start ======= //

window.addEventListener('load', () => {
  if (All__User__Arr == "" || Logged == "" || Logged == "felse") {
    window.location = "/JAVASCRIPT/js__localstoeage__2/Form.html";
  }
});

function Get__AllUsers__Data(All__User__Arr) {
  People__Item__Wrapper.innerHTML = "";
  for (const All__User of All__User__Arr) {
    let People__Item = document.createElement("div");
    People__Item.classList.add("People__Item");

    People__Item.innerHTML = `
    <div class="Profile__Image ${All__User.Gender == "Male" ?  All__User.Age >= 18 ? "Img__Man" : "Img__Boy" : All__User.Age >= 18 ? "Img__Woman" : "Img__Girl"}"></div>
    <h3>${All__User.FirstName} ${All__User.LastName}</h3>
    <span>${All__User.Age} years old</span>`;

    People__Item__Wrapper.appendChild(People__Item);
  }

  document.querySelectorAll(".People__Item").forEach((item, i) => {
    item.addEventListener('click', () => {
      OpanClose__PeopleInfo(i);
    });
  });

  function OpanClose__PeopleInfo(i) {
    Aside__Container.classList.toggle('active');

    if (Aside__Container.classList.contains('active')) {
      User__Profile__Content.innerHTML = `
      <div class="User__Profile__Top">
        <div class="User__Image ${All__User__Arr[i].Gender == "Male" ? All__User__Arr[i].Age >= 18 ? "Img__Man" : "Img__Boy" : All__User__Arr[i].Age >= 18 ? "Img__Woman" : "Img__Girl"}"></div>
        <h2 class="User__Name">${All__User__Arr[i].FirstName} ${All__User__Arr[i].LastName}</h2>
      </div>
  
      <div class="User__Profile__Bottom">
        <div class="User__Bio">
          <h3>Bio</h3>
          <p>${All__User__Arr[i].Bio}</p>
        </div>
        <div class="User__Info">
          <h4>Age:</h4>
          <h4>${All__User__Arr[i].Age} Years old</h4>
        </div>
        <div class="User__Info">
          <h4>Gender:</h4>
          <h4>${All__User__Arr[i].Gender}</h4>
        </div>
      </div>`;
    }
  }
}

Get__AllUsers__Data(All__User__Arr);

function Get__OvnerUser__Data() {
  if (Ovner__User != []) {
    let new__Ovner__User = [];
    new__Ovner__User.push(Ovner__User);
    new__Ovner__User = new__Ovner__User.flatMap(i => i);

    for (const Ovner of new__Ovner__User) {
      let Nav__UserProfile = document.createElement('div');
      Nav__UserProfile.setAttribute('Nav__UserProfile', '');
      Nav__UserProfile.classList.add("User__Profile__Content");

      Nav__UserProfile.innerHTML = `
    <div class="User__Profile__Top">
      <div class="User__Image ${Ovner.Gender == "Male" ? Ovner.Age >= 18 ? "Img__Man" : "Img__Boy" : Ovner.Age >= 18 ? "Img__Woman" : "Img__Girl"}"></div>
      <h2 class="User__Name">${Ovner.FirstName} ${Ovner.LastName}</h2>
    </div>

    <div class="User__Profile__Bottom">
      <div class="User__Bio">
        <h3>Bio</h3>
        <p>${Ovner.Bio}</p>
      </div>
      <div class="User__Info">
        <h4>Age:</h4>
        <h4>${Ovner.Age} Years old</h4>
      </div>
      <div class="User__Info">
        <h4>Gender:</h4>
        <h4>${Ovner.Gender}</h4>
      </div>
    </div>`;

      Nav__UserProfileWrapper.appendChild(Nav__UserProfile);

      Btn__User__Icon.classList.add(`${Ovner.Gender == "Male" ? Ovner.Age >= 18 ? "Img__Man" : "Img__Boy" : Ovner.Age >= 18 ? "Img__Woman" : "Img__Girl"}`);
    }
  } else {
    console.log("Empty");
  }
}

Get__OvnerUser__Data()

function ResetPassword__Valid() {
  let Email__Value = Email__Input.value;
  let SecretKey__Value = SecretKey__Input.value;
  let NewPassword__Value = NewPassword__input.value;
  let Confirm__NewPassword__Value = Confirm__NewPassword__input.value;

  let new__Ovner__User = [];
  new__Ovner__User.push(All__User__Arr);
  new__Ovner__User = new__Ovner__User.flatMap(i => i);

  let findIndex = All__User__Arr.findIndex(i => i.Email == Email__Value && i.SecretKey == SecretKey__Value);
  let index = findIndex;

  if (Email__Value != "") {
    if (SecretKey__Value != "") {
      if (findIndex >= 0) {
        if (NewPassword__Value != "" && Confirm__NewPassword__Value != "") {
          if (NewPassword__Value.length >= 8 && Confirm__NewPassword__Value.length >= 8) {
            if (NewPassword__Value == Confirm__NewPassword__Value) {
              if (NewPassword__Value.toLowerCase() != Confirm__NewPassword__Value) {

                All__User__Arr[index].Password = NewPassword__Value;
                localStorage.setItem("User", JSON.stringify(All__User__Arr));
                localStorage.removeItem('Logged__User');
                localStorage.setItem('Logged__User', JSON.stringify(All__User__Arr[index]));

                Email__Input.value = "";
                SecretKey__Input.value = "";
                NewPassword__input.value = "";
                Confirm__NewPassword__input.value = "";

                Show__Error("Password has been changed!", 2000);
              } else {
                Show__Error("Password must contain at least one upperacase character!", 2000);
              }
            } else {
              Show__Error("Password does not matches!", 2000);
            }
          } else {
            Show__Error("Password should be minimum 8 characters!", 2000);
          }
        } else {
          Show__Error("Password can't be empty!", 2000);
        }
      } else {
        Show__Error("Email or Secret key doesn't match!", 2000);
      }
    } else {
      Show__Error("Secret key can't be Empty!", 2000);
    }
  } else {
    Show__Error("Email can't be Empty!", 2000);
  }
}

function OpanClose__Nav__Container() {
  Nav__Container.classList.toggle('active');
}

function Loguot__Ovner__User() {
  localStorage.setItem("Logged", "felse");
  if (localStorage.getItem("Logged") == "felse") {
    localStorage.removeItem("Logged__User");
    window.location = "/JAVASCRIPT/js__localstoeage__2/Form.html";
  }
}

function Get__SortBy__Value() {
  let SortBy__Value = Select__SortBy.value;

  if (SortBy__Value == "") {
    New__All__User__Arr = All__User__Arr;
    Get__AllUsers__Data(New__All__User__Arr);
  }

  if (SortBy__Value == "Defult") {
    New__All__User__Arr = All__User__Arr;
    Get__AllUsers__Data(All__User__Arr);
  }

  if (SortBy__Value == "Age") {
    New__All__User__Arr = All__User__Arr;
    New__All__User__Arr = New__All__User__Arr.sort((a, b) => {
      if (a.Age < b.Age) {
        return 1
      } else {
        return -1
      }
    });

    Get__AllUsers__Data(New__All__User__Arr);
  }

  if (SortBy__Value == "Name") {
    New__All__User__Arr = All__User__Arr;
    New__All__User__Arr = New__All__User__Arr.sort((a, b) => {
      a = a.FirstName.toLowerCase();
      b = b.FirstName.toLowerCase();
      if (a < b) {
        return -1
      } else {
        return 1
      }
    });
    Get__AllUsers__Data(New__All__User__Arr);
  }

  if (SortBy__Value == "Female") {
    New__All__User__Arr = All__User__Arr;
    New__All__User__Arr = New__All__User__Arr.filter(i => i.Gender == SortBy__Value);

    Get__AllUsers__Data(New__All__User__Arr);
  }

  if (SortBy__Value == "Male") {
    New__All__User__Arr = All__User__Arr;
    New__All__User__Arr = New__All__User__Arr.filter(i => i.Gender == SortBy__Value);

    Get__AllUsers__Data(New__All__User__Arr);
  }

  Get__AllUsers__Data(New__All__User__Arr);
}

function Toggle__Nav__UserContent() {
  Nav__UserContent.forEach(content => {
    content.classList.toggle('active');
    if (Nav__UserContent[1].classList.contains('active')) {
      Btn__NavSetting.classList.add('active');
      Nav__Title.classList.add('active');
      Nav__Button__Wrapper.classList.add('active');
    } else {
      Btn__NavSetting.classList.remove('active');
      Nav__Button__Wrapper.classList.remove('active');
      Nav__Title.classList.remove('active');
    }
  });
}

function Show__Error(err, duration) {
  err__text.classList.add("active");
  err__text.innerText = err;
  setTimeout(() => {
    err__text.classList.remove("active");
  }, duration);
}
// ======= Function End ======= //