const firebaseConfig = {
  apiKey: "AIzaSyBA9SOD0xFQsWpyyR4i3idtpXALvdWAXTY",
  authDomain: "fe-50-87e53.firebaseapp.com",
  projectId: "fe-50-87e53",
  storageBucket: "fe-50-87e53.appspot.com",
  messagingSenderId: "643514280227",
  appId: "1:643514280227:web:64aefe20db92f69e6f0496",
  measurementId: "G-30HKPKYTTH"
};

firebase.initializeApp(firebaseConfig);











class Animal {
  constructor(id, name, age, owner) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.owner = owner;
  }
}
class FireBaseWorker {
  firebaseRef;
  constructor() {
    this.firebaseRef = firebase.firestore()
  }
  async addAnimal(animalItem) {
    try {
      var json = JSON.stringify(animalItem)
      var result = await this.firebaseRef.collection("animals").add(JSON.parse(json))
      console.log(result)
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getAnimalById(id) {
    var result = await this.firebaseRef.collection("animals").doc(id).get()
    if (result.exists) {
      var tmp = result.data()
      tmp.id = result.id
      console.log(tmp)
    }
  }
  async getAllAnimals() {
    var arr = []
    var result = await this.firebaseRef.collection("animals").get()
    result.forEach(i => {
      var tmp = i.data()
      tmp.id = i.id
      arr.push(tmp)
    })
    console.log(arr)
  }
  async deleteAnimalsById(id) {
    var result = await this.firebaseRef.collection("animals").doc(id).delete()
    console.log("deleted")
  }
}

var fbw = new FireBaseWorker()
  //var animal1 = new Animal("","Rock",7,"Beka")
  //var animal1 = new Animal("","arch",4,"gio")
  //fbw.addAnimal(animal1)
  // fbw.getAnimalById("VqGgWGGIwyYKzqMlxWzJ")
  // fbw.deleteAnimalsById("VqGgWGGIwyYKzqMlxWzJ")
fbw.getAllAnimals()