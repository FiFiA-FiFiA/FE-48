// User Class
class Users {
  constructor(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.Birthday = Birthday;
    this.Gender = Gender;
    this.Image = Image;
    this.Bio = Bio;
    this.SecretKey = SecretKey;
    this.Password = Password;
    this.FollowerUser = [];
    this.FollowingUser = [];
    this.Block = false;
  }
}

// SignUp Input
const Form__Wrapper = document.querySelector("[Form__Wrapper]");
const FirstName__Input = document.querySelector("[FirstName__Input]");
const LastName__Input = document.querySelector("[LastName__Input]");
const Email__Input = document.querySelector("[Email__Input]");
const File__Input = document.querySelector("[File__Input]");
const Data__Input = document.querySelector("[Data__Input]");
const Gender__Select = document.querySelector("[Gender__Select]");
const Bio__Input = document.querySelector("[Bio__Input]");
const SecretKey__Input = document.querySelector("[SecretKey__Input]");
const Password__input = document.querySelector("[Password__input]");
const Confirm__Password__input = document.querySelector("[Confirm__Password__input]");
// SignUp Buttons
const Btn__Continue = document.querySelector("[Btn__Continue]");
const Delete__Users = document.querySelector("[Delete__Users]");
const Btn__Login = document.querySelectorAll("[Btn__Login]");

// SignIn Input 
const SignIn__Email__Input = document.querySelector("[SignIn__Email__Input]");
const SignIn__Password__Input = document.querySelector("[SignIn__Password__Input]");
// SignIn Buttons
const Btn__Forgot__Password = document.querySelector("[Btn__Forgot__Password]");
const Btn__Submit = document.querySelector("[Btn__Submit]");
const Btn__SignUp = document.querySelector("[Btn__SignUp]");

// SignPass Input 
const Forgot__Email__Input = document.querySelector("[Forgot__Email__Input]");
const Forgot__SecretKey__Input = document.querySelector("[Forgot__SecretKey__Input]");
const NewPassword__input = document.querySelector("[NewPassword__input]");
const Confirm__NewPassword__input = document.querySelector("[Confirm__NewPassword__input]");
// SignPass Buttons 
const Btn__Next = document.querySelector("[Btn__Next]");
const Btn__Back = document.querySelector("[Btn__Back]");
const Btn__ChangePassword = document.querySelector("[Btn__ChangePassword]");

// Text
const err__text = document.querySelector("[err__text]");
const header__text = document.querySelector("[header__text]");

// User Array
let User__Arr = JSON.parse(localStorage.getItem("_User")) || [];
let Form__Url = "/JAVASCRIPT/js__localstoeage__3/Form.html";
let Home__Url = "/JAVASCRIPT/js__localstoeage__3/Home.html";


// Data select
let Current__Data = new Date().toLocaleDateString();
let Filter__Current__Data = `${Current__Data.slice(6, 10)}-${Current__Data.slice(0, 2)}-${Current__Data.slice(3, 5)}`;
Data__Input.setAttribute('max', Filter__Current__Data);

// ======= Eventlistener Start ======= //
Delete__Users.addEventListener('click', Delete__All__Users);

Btn__Continue.addEventListener('click', SignUp__Valid__Input);
Btn__Submit.addEventListener('click', SignIn__Valid__Input);

Btn__Back.addEventListener('click', Opan__Forgot__Container);
Btn__Next.addEventListener('click', Form__Next);

Btn__SignUp.addEventListener('click', Opan__SignUp__Container);
Btn__Forgot__Password.addEventListener('click', Opan__Forgot__Container);
Btn__Login.forEach(btn => { btn.addEventListener('click', Opan__SignIn__Container) });

File__Input.addEventListener('change', () => {
  if (File__Input.value != "") {
    document.querySelector('[File__Label]').textContent = File__Input.files[0].name;
  } else {
    document.querySelector('[File__Label]').textContent = "Choose Image";
  }
});
// ======= Eventlistener End ======= //

// ======= Function Start ======= //
function Delete__All__Users() {
  localStorage.clear();
  window.location = Form__Url;
}

function Opan__SignIn__Container() {
  Form__Wrapper.classList.replace("Sign-Up", "Sign-In");
  Form__Wrapper.classList.replace("Sign-Pass", "Sign-In");
  header__text.textContent = "Login";

  if (localStorage.getItem('_Logged') == "true") {
    window.location = Home__Url;
  }
}

function Opan__SignUp__Container() {
  Form__Wrapper.classList.replace("Sign-In", "Sign-Up");
  header__text.textContent = "Create an account";
}

function Opan__Forgot__Container() {
  Form__Wrapper.classList.replace("Sign-In", "Sign-Pass");
  Form__Wrapper.classList.replace("Sign-Up", "Sign-Pass");
  Form__Wrapper.classList.replace("Next", "Prev");
  Form__Wrapper.classList.add("Prev");
  header__text.textContent = "Forgot Password";
}

function SignUp__Valid__Input() {
  let Sign__FirstName__Value = FirstName__Input.value
  let Sign__LastName__Value = LastName__Input.value
  let Sign__Email__Value = Email__Input.value
  let Sign__Birthday__Value = Data__Input.value
  let Sign__Gender__Value = Gender__Select.value
  let Sign__Bio__Value = Bio__Input.value
  let Sign__SecretKey__Value = SecretKey__Input.value
  let Sign__Password__Value = Password__input.value
  let Sign__Confirm__Password__Value = Confirm__Password__input.value
  let Image__Url = "";

  if (Sign__FirstName__Value != "" && Sign__LastName__Value != "") {
    if (Sign__FirstName__Value.length <= 10 && Sign__LastName__Value.length <= 10) {
      if (Sign__Gender__Value != "") {
        if (Sign__Email__Value != "") {
          if (File__Input.value != "") {
            if ((File__Input.files[0].size / 1024 / 1024) <= 0.5) {
              if (Sign__Birthday__Value != "") {
                if (Sign__Bio__Value.trim() != "" && Sign__Bio__Value.trim().length <= 150) {
                  if (Sign__SecretKey__Value != "") {
                    if (Sign__Password__Value != "" && Sign__Confirm__Password__Value != "") {
                      if (Sign__Password__Value.length >= 8 && Sign__Confirm__Password__Value.length >= 8) {
                        if (Sign__Password__Value == Sign__Confirm__Password__Value && Sign__Password__Value.toLowerCase() != Sign__Confirm__Password__Value) {
                          let Image__Reader = new FileReader();
                          Image__Reader.readAsDataURL(File__Input.files[0]);
                          Image__Reader.onload = () => {
                            Image__Url = Image__Reader.result;
                            Check__SignUp__User(Sign__FirstName__Value, Sign__LastName__Value, Sign__Gender__Value, Sign__Email__Value, Image__Url, Sign__Birthday__Value, Sign__Bio__Value, Sign__SecretKey__Value, Sign__Password__Value);
                          }
                        } else {
                          Show__Error("Password not Matched! or no capital letter is used!", 2000);
                        }
                      } else {
                        Show__Error("Password should be minimum 8 characters!", 2000);
                      }
                    } else {
                      Show__Error("Password can't be empty!", 2000);
                    }
                  } else {
                    Show__Error("Secret key can't be empty!", 3000);
                  }
                } else {
                  Show__Error("Bio can't be empty and more than 150 words", 3000);
                }
              } else {
                Show__Error("Birthday can't be empty!", 3000);
              }
            } else {
              Show__Error("Image size sould not exceed 0.5Mb!", 3000);
            }
          } else {
            Show__Error("Image can't be empty!", 3000);
          }
        } else {
          Show__Error("Email can't be empty!", 3000);
        }
      } else {
        Show__Error("Gender can't be empty!", 3000);
      }
    } else {
      Show__Error("First and Last name can't be more than 10!", 3000);
    }
  } else {
    Show__Error("First or Last name are empty!", 3000);
  }
}

function Check__SignUp__User(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password) {
  if (User__Arr != "") {
    let new__arr = User__Arr.filter(i => i.Email == Email);

    if (new__arr != "") {
      for (const arr of new__arr) {
        if (arr.Email == Email) {
          Show__Error("User already exists", 2000);
        } else {
          SignUp__User(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password);
          Show__Error("User is registred", 2000);
        }
      }
    } else {
      SignUp__User(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password);
      Show__Error("User is registred", 2000);
    }
  } else {
    SignUp__User(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password);
  }
}

function SignUp__User(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password) {
  document.querySelector('[File__Label]').textContent = "Choose Image";

  User__Arr.push(new Users(FirstName, LastName, Gender, Email, Image, Birthday, Bio, SecretKey, Password));
  localStorage.setItem("_User", JSON.stringify(User__Arr));

  Form__Wrapper.classList.replace("Sign-Up", "Sign-In");
  Form__Wrapper.classList.replace("Sign-Pass", "Sign-In");
  header__text.textContent = "Login";

  FirstName__Input.value = "";
  LastName__Input.value = "";
  Gender__Select.value = "";
  Email__Input.value = "";
  Data__Input.value = "";
  Bio__Input.value = "";
  SecretKey__Input.value = "";
  Password__input.value = "";
  Confirm__Password__input.value = "";
  File__Input.value = "";
}

function SignIn__Valid__Input() {
  let Email__Value = SignIn__Email__Input.value;
  let Password__Value = SignIn__Password__Input.value;

  if (Email__Value != "") {
    if (Password__Value != "") {
      if (Password__Value.length >= 8) {
        Check__SignIn__User(Email__Value, Password__Value);
      } else {
        Show__Error("Password should be minimum 8 characters!", 3000);
      }
    } else {
      Show__Error("password can't be empty!", 3000);
    }
  } else {
    Show__Error("Email can't be empty!", 3000);
  }
}

function Check__SignIn__User(Email, Password) {
  if (User__Arr != "") {
    let new__arr = User__Arr.filter(i => i.Email == Email && i.Password == Password);
    let Index = User__Arr.findIndex(i => i.Email == Email && i.Password == Password);
    if (new__arr != "") {
      Login__User(new__arr, Index);
    } else {
      Show__Error("User not found!", 2000);
    }
  } else {
    Show__Error("User doesn't exist!", 2000);
  }
}

function Login__User(Logged__User, Index) {
  localStorage.setItem('_Logged', "true");
  localStorage.removeItem('_Logged__User__Index');
  localStorage.setItem('_Logged__User__Index', JSON.stringify(Index));
  window.location = Home__Url;
}

function Form__Next() {
  ResetPassword__Valid();
}

function ResetPassword__Valid() {
  let Forgot__Email__Value = Forgot__Email__Input.value;
  let Forgot__SecretKey__Value = Forgot__SecretKey__Input.value;

  let User = User__Arr.findIndex(i => i.Email == Forgot__Email__Value && i.SecretKey == Forgot__SecretKey__Value);

  if (Forgot__Email__Value != "") {
    if (Forgot__SecretKey__Value != "") {
      if (User >= 0) {
        Check__New__Password(User);
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

function Check__New__Password(i) {
  Form__Wrapper.classList.replace("Prev", "Next");
  header__text.textContent = "Change Password";
  let index = i;

  Btn__ChangePassword.addEventListener('click', () => {
    let NewPassword__Value = NewPassword__input.value;
    let Confirm__NewPassword__Value = Confirm__NewPassword__input.value;

    if (NewPassword__Value != "" && Confirm__NewPassword__Value != "") {
      if (NewPassword__Value.length >= 8 && Confirm__NewPassword__Value.length >= 8) {
        if (NewPassword__Value == Confirm__NewPassword__Value) {
          if (NewPassword__Value.toLowerCase() != Confirm__NewPassword__Value) {
            NewPassword__input.value = "";
            Confirm__NewPassword__input.value = "";

            User__Arr[index].Password = NewPassword__Value;
            localStorage.setItem("_User", JSON.stringify(User__Arr));
            Login__User(User__Arr[index], index);
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
  })
}

function Show__Error(err, duration) {
  err__text.classList.add("active");
  err__text.innerText = err;
  setTimeout(() => {
    err__text.classList.remove("active");
  }, duration);
}

// ======= Function End ======= //