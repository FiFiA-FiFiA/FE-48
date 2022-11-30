"use strict";
// User Class
class Users {
  constructor(Id, Email, Password) {
    this.Id = Id;
    this.Email = Email;
    this.Password = Password;
    this.Favorite__List = [];
  }
}
// Product Class
class Products {
  constructor(Id, Name, Brend, Category, Price, Currency, DescriptionList, Images) {
    this.Id = Id;
    this.Name = Name;
    this.Brend = Brend;
    this.Category = Category;
    this.Price = Price;
    this.Currency = Currency;
    this.DescriptionList = DescriptionList;
    this.Images = Images;
  }
}
// FireBase Class
class FireBase {
  FireBaseRef;
  constructor() {
    this.FireBaseRef = firebase.firestore();
    this.FireBaseDataRef = firebase.database();
    this.FireBaseAuthRef = firebase.auth();
  }

  async Add__User(User__Item) {
    try {
      let Users__Json = JSON.stringify(User__Item);
      await this.FireBaseRef.collection("Users").add(JSON.parse(Users__Json));
    } catch (error) {
      alert("Error ->" + error);
    }
  }

  async Add__Product(Product__Item) {
    try {
      let Product__Json = JSON.stringify(Product__Item);
      await this.FireBaseRef.collection("Products").add(JSON.parse(Product__Json));
    } catch (error) {
      alert("Error ->" + error);
    }
  }

  async Get__UsersById(Id) {
    let Users = await this.FireBaseRef.collection("Users").doc(Id).get();
    if (Users.exists) {
      let Temp = Users.data();
      Temp = Users.Id;
    }
  }

  async Get__ProductsById(Id) {
    let Products = await this.FireBaseRef.collection("Products").doc(Id).get();
    if (Products.exists) {
      let Temp = Products.data();
      Temp = Products.Id;
    }
  }

  async Get__AllUsers() {
    let Users__Arr = [];
    let Users = await this.FireBaseRef.collection("Users").get();

    Users.forEach(user => {
      let Temp = user.data();
      Temp.Id = user.id;
      Users__Arr.push(Temp);
    });

    Get__AllUsers__Data(Users__Arr);
  }

  async Get__AllProducts() {
    let Products__Arr = [];
    let Products = await this.FireBaseRef.collection("Products").get();

    Products.forEach(Product => {
      let Temp = Product.data();
      Temp.Id = Product.id;
      Products__Arr.push(Temp);
    });

    Get__AllProducts__Data(Products__Arr);
  }

  async Update__UserPassById(Id, Pass) {
    await this.FireBaseRef.collection("Users").doc(Id).update({
      Password: Pass,
    });
  }

  async Update__ProductsById(Id) {
    await this.FireBaseRef.collection("Products").doc(Id).update({

    });
  }

  async Delete__UsersById(Id) {
    await this.FireBaseRef.collection("Users").doc(Id).delete();
  }

  async Delete__ProductsById(Id) {
    await this.FireBaseRef.collection("Products").doc(Id).delete();
  }
}

let FBW = new FireBase();

// * Aside
const Aside = document.querySelector("[Aside]");
// * Aside Buttons
const Btn__Aside__OpanClose = document.querySelector("[Btn-Aside__OpanClose]");
const Btn__LogOut = document.querySelector("[Btn-LogOut]");
// const Btn__Toggle__Theme = document.querySelectorAll("[Btn-Toggle__Theme]");
const Section__Title = document.querySelector("[Section__Title]");

// * Aside TabButton
const Nav__Tab = document.querySelectorAll("[Nav__Tab]");

// * Header Middle
const Header__Middle = document.querySelector("[Header__Middle]");
const Btn__Search = document.querySelector("[Header__Middle]");
// * Search Overlay
const Search__Overlay = document.querySelector("[Search__Overlay]");
// * Header Buttons
const Btn__Search__Open = document.querySelector("[Btn-Search__Open]");
const Btn__Profile = document.querySelector("[Btn-Profile]");
const Profile__Dropdown__Menu = document.querySelector("[Profile__Dropdown__Menu]");
const Profile__Menu__Overlay = document.querySelector("[Profile__Menu__Overlay]");

// * Section Wrapper
const Section__Wrapper = document.querySelector("[Section__Wrapper]");
// * Section Products * //
const Section__Products = document.querySelector("[Section__Products]");
// * Section Products Buttons* //
const Btn__Create__Product = document.querySelectorAll("[Btn-Create__Product]");
const Btn__Cancel__Product = document.querySelectorAll("[Btn-Cancel__Product]");
const Btn__Add__Product = document.querySelector("[Btn-Add__Product]");
const Input__Description__Wrapper = document.querySelector("[Input__Description__Wrapper]");
const Btn__Add__Description__Input = document.querySelector("[Btn-Add__Description__Input]");
const Btn__Remove__Description__Input = document.querySelector("[Btn-Remove__Description__Input]");

// *  Event Listener Start *  //

Btn__Aside__OpanClose.addEventListener("click", OpenClose__Aside);
Btn__Search__Open.addEventListener("click", OpenClose__Main__Search);
Search__Overlay.addEventListener("click", OpenClose__Main__Search);
Nav__Tab.forEach(Tab => Tab.addEventListener("click", () => Show__Curent__Section(Tab)));
// Btn__Toggle__Theme.forEach(Btn => Btn.addEventListener("click", Set__Theme));
Btn__Create__Product.forEach(Tab => Tab.addEventListener("click", () => Show__Curent__Product__Box(Tab)));
Btn__Cancel__Product.forEach(Tab => Tab.addEventListener("click", () => Show__Curent__Product__Box(Tab)));
Btn__Profile.addEventListener("click", OpenClose__Profile__Dropdown__Menu);
Profile__Menu__Overlay.addEventListener("click", (e) => OpenClose__Profile__Dropdown__Menu(e));
Btn__Add__Description__Input.addEventListener("click", Add__Description__Input);
Btn__Remove__Description__Input.addEventListener("click", Remove__Description__Input);

// *  Event Listener End *  //

// function Get__Theme() {
//   Theme = localStorage.getItem("Theme");
//   if (Theme == "Dark") {
//     Html.classList.add("Dark__Theme");
//     Btn__Toggle__Theme.forEach(Btn => Btn.children.item(i => i).classList.replace("fa-moon", "fa-brightness"));
//   } else {
//     Html.classList.remove("Dark__Theme");
//     Btn__Toggle__Theme.forEach(Btn => Btn.children.item(i => i).classList.replace("fa-brightness", "fa-moon"));
//   }
// }

// Get__Theme();

function Set__Theme() {
  Theme = localStorage.getItem("Theme");

  if (Theme != "Dark") {
    localStorage.setItem("Theme", "Dark");
  } else {
    localStorage.setItem("Theme", "");
  }

  Get__Theme();
}

function OpenClose__Main__Search() {
  Header__Middle.classList.toggle("active");
}

function Show__Curent__Section(Tab) {
  let TabName = Tab.getAttribute("TabName");
  Section__Wrapper.setAttribute("Section", TabName);
  Nav__Tab.forEach(Tabs => Tabs.classList.remove("active"));
  Section__Title.textContent = TabName;
  Tab.classList.add("active");
}

function Show__Curent__Product__Box(Tab) {
  let TabName = Tab.getAttribute("Product__TabBtn__Name");
  Section__Products.setAttribute("product__activetab__name", TabName);
}

function OpenClose__Aside() {
  Aside.classList.toggle("Open")
  if (Aside.classList.contains("Open")) {
    Btn__Aside__OpanClose.classList.replace("fa-bars", "fa-bars-sort");
  } else {
    Btn__Aside__OpanClose.classList.replace("fa-bars-sort", "fa-bars");
  }
};

function OpenClose__Profile__Dropdown__Menu(e) {
  e.stopPropagation();
  Profile__Dropdown__Menu.classList.toggle("active");
  if (Profile__Dropdown__Menu.classList.contains("active")) {
    Profile__Menu__Overlay.classList.add("active");
  } else {
    Profile__Menu__Overlay.classList.remove("active");
  }
};

function Add__Description__Input() {
  let Input__Row = document.createElement("div");
  Input__Row.classList.add("Input__Row");
  Input__Row.innerHTML = `                    
  <label>
    <span class="Title">Description Title</span>
    <input type="text" class="Prduct__Input" id="Prduct__Input" Input__Product__Description__Title>
  </label>

  <label>
    <span class="Title">Description</span>
    <input type="text" class="Prduct__Input" id="Prduct__Input" Input__Product__Description>
  </label>`;
  Input__Description__Wrapper.appendChild(Input__Row);

  let Input__Description = document.querySelectorAll("[Input__Description__Wrapper] .Input__Row");
  if (Input__Description.length > 0) {
    Btn__Remove__Description__Input.removeAttribute("hidden");
  } else {
    Btn__Remove__Description__Input.setAttribute("hidden", "");
  }
}

function Remove__Description__Input() {
  let Input__Description__Wrapper = document.querySelectorAll("[Input__Description__Wrapper] .Input__Row");
  [...Input__Description__Wrapper].pop().remove();
  if (Input__Description__Wrapper.length > 1) {
    Btn__Remove__Description__Input.removeAttribute("hidden");
  } else {
    Btn__Remove__Description__Input.setAttribute("hidden", "");
  }
}

//  *  Create New Product - Fields  *  //

const Input__Prduct__Title = document.querySelector("[Input__Prduct__Title]");
const Input__Prduct__Brend = document.querySelector("[Input__Prduct__Brend]");
const Input__Prduct__Category = document.querySelector("[Input__Prduct__Category]");
const Input__Prduct__Price = document.querySelector("[Input__Prduct__Price]");
const Input__Prduct__Currency = document.querySelector("[Input__Prduct__Currency]");

async function Get__AllUsers__Data() {}
async function Get__AllProducts__Data() {}