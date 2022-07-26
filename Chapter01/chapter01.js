//returning object from function/////////////////////////////////////////////////////////////////////////////////
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName
});
console.log(person("Flad", "Hanson"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//this scope
const tahoe1 = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function (delay = 1000) {
    setTimeout(function () {
      console.log(this.mountains.join(", "));
    }, delay);
  }
};
tahoe1.print(); // undefined, this = Window {}

const tahoe2 = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: function (delay = 1000) {
    // print belongs to the window {}, SUPER, NICE!!!
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  }
};
tahoe2.print(); // Freel, Rose, Tallac, Rubicon, Silver

const tahoe3 = {
  mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
  print: (delay = 1000) => {
    setTimeout(() => {
      console.log(this.mountains.join(", "));
    }, delay);
  }
};
tahoe3.print(); // ‘join’ is undefined

//Babel - transpiler
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//destructuring
const lordify1 = (regularPerson) => {
  console.log(`${regularPerson.firstname} of Canterbury`);
};
const regularPerson1 = {
  firstname: "Bill",
  lastname: "Wilson"
};
lordify1(regularPerson1); // Bill of Canterbury

//destructuring
const lordify2 = ({ firstname }) => {
  console.log(`${firstname} of Canterbury`);
};
const regularPerson2 = {
  firstname: "Bill",
  lastname: "Wilson"
};
lordify2(regularPerson2); // Bill of Canterbury

const regularPerson3 = {
  firstname: "Bill",
  lastname: "Wilson",
  spouse: {
    firstname: "Phil",
    lastname: "Wilson"
  }
};
const lordify3 = ({ spouse: { firstname } }) => {
  console.log(`${firstname} of Canterbury`);
};
lordify3(regularPerson3); // Phil of Canterbury

const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
console.log(thirdAnimal); // Cat

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Расширение объектного литерала(?expansion - ?extension)?
const name1 = "Tallac";
const elevation1 = 9738;
const funHike1 = { name1, elevation1 };
console.log(funHike1); // {name: "Tallac", elevation: 9738}

const name2 = "Tallac";
const elevation2 = 9738;
const print = function () {
  console.log(`Mt. ${this.name2} is ${this.elevation2} feet tall`);
};
const funHike2 = { name2, elevation2, print };
funHike2.print(); // Mt. Tallac is 9738 feet tall

////
const peaks4 = ["Tallac", "Ralston", "Rose"];
const canyons4 = ["Ward", "Blackwood"];
const tahoe4 = [...peaks4, ...canyons4];
console.log(tahoe4.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood

const peaks5 = ["Tallac", "Ralston", "Rose"];
const [last5] = peaks5.reverse();
console.log(last5); // Rose
console.log(peaks5.join(", ")); // Rose, Ralston, Tallac

//with copy
const peaks6 = ["Tallac", "Ralston", "Rose"];
const [last6] = [...peaks6].reverse();
console.log(last6); // Rose
console.log(peaks6.join(", ")); // Tallac, Ralston, Rose

////
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade

function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner
};
console.log(backpackingMeals);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const header = document.getElementById("heading");
header.innerHTML = "Hey!";

//mixins and fetch()
fetch("https://api.randomuser.me/?nat=US&results=1")
  .then((res) => res.json())
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);

//async
const getFakePerson = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
getFakePerson();

//promise
const getPeople = (count) =>
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : reject(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });
getPeople(5)
  .then((members) => console.log(members))
  .catch((error) => console.error(`getPeople failed: ${error.message}`));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//classes
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }
}
const trip = new Vacation("Santiago, Chile", 7);
trip.print(); // Chile will take 7 days.

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}
const trip2 = new Expedition("Mt. Whitney", 3, [
  "sunglasses",
  "prayer flags",
  "camera"
]);
trip2.print();
// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera
