class FireBase {
  FireBaseRef;
  constructor() {
    this.FireBaseRef = firebase.firestore();
    this.FireBaseDataRef = firebase.database();
  }

  async Add__User(User__Item) {
    try {
      let Users__Json = JSON.stringify(User__Item);
      await this.FireBaseRef.collection("Users").add(JSON.parse(Users__Json));
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

  async Get__AllUsers() {
    let Users__Arr = [];
    let Users = await this.FireBaseRef.collection("Users").get();

    Users.forEach(user => {
      let Temp = user.data();
      Temp.Id = user.id;
      Users__Arr.push(Temp);
    });
  }

  async Update__UserPassById(Id, Pass) {
    await this.FireBaseRef.collection("Users").doc(Id).update({
      Password: Pass,
    });
  }

  async Update__User__FollowInfo__ById(Id, Follower, Following) {
    await this.FireBaseRef.collection("Users").doc(Id).update({
      FollowerUser: Follower,
      FollowingUser: Following,
    });
  }

  async Delete__UsersById(Id) {
    await this.FireBaseRef.collection("Users").doc(Id).delete();
  }
}

const FBW = new FireBase();


const Header = document.querySelector("header");
const Main = document.querySelector("main");
let Last__Scorll__Top = 0;

window.onscroll = () => {
  let Scroll__Top = window.pageYOffset || document.documentElement.scrollTop;

  if (Scroll__Top > Last__Scorll__Top) {
    Header.style.top = `-${Header.clientHeight}px`;
  } else {
    Header.style.top = `0px`;
  }

  if (Scroll__Top > Header.clientHeight) {
    Header.classList.add("Sticky");
  } else {
    Header.classList.remove("Sticky");
  }

  Last__Scorll__Top = Scroll__Top;
}