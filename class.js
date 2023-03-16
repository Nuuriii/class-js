class animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }
}

let animalWild = new animal("Singa", "Karnivora", "Baby");

class car {
  constructor(nama, tahun) {
    this.name = nama;
    this.year = tahun;
  }
  umur() {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear;

let mobilSaya = new car("Pajero", 2005);
alert("Mobil saya " + mobilSaya.umur() + " tahun");

class hero {
  constructor(name, weapon, spesies, color, type) {
    this.name = name;
    this.weapon = weapon;
    this.spesies = spesies;
    this.color = color;
    this.type = type;
  }
  hp() {
    console.log(`HP ${this.name} tidaklah tebal`);
  }

  heroType() {
    console.log(`${this.name} adalah hero bertype ${this.type}`);
  }
}

let alucard = new hero("Alucard", "Sword", "Human", "Sky Blue", "Fighter/Assasin");
let lancelot = new hero("Lancelot", "Sword", "Human", "Metal", "Assasin");
console.log(alucard.heroType());
console.log(lancelot.heroType());
console.log(alucard.hp());
console.log(lancelot.hp());

class user {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  welcome() {
    console.log(`Hello ${this.name}, How are you?`);
  }

  birtday() {
    console.log(`congrats on your age ${this.age}`);
  }

  yourGender() {
    console.log(`your gender is ${this.gender} right?`);
  }
}

let rara = new user("Rara", 17, "Female");
console.log(rara.welcome());
console.log(rara.birtday());
console.log(rara.yourGender());

class user2 {
  constructor(name, age, ismarried) {
    this.name = name;
    this.age = age;
    this.ismarried = ismarried;
    this.id = `${name}-${Math.floor(Math.random() * 10000) + 1}`;
  }
}

let reza = new user2("Reza", 28, true);
let dimas = new user2("Dimas", 18, false);
let lala = new user2("Reza", 16, false);

console.log(reza);
console.log(dimas);
console.log(lala);
