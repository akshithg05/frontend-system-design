let obj = {
  name: "Akshith",
  age: 24,
  job: "Software Engineer",
};

let obj2 = {
  name: "Anu",
};

function greet(city) {
  console.log(`Hi this is ${this.name}. I come from ${city}`);
}

greet.call(obj, "Bengaluru");
greet.call(obj2, "Bangalore");

const greet2 = greet.bind(obj, "Bengaluru");

greet2();

class MyCar {
  constructor(company, model, variant) {
    this.company = company;
    this.model = model;
    this.variant = variant;
  }

  getWheels() {
    return 4;
  }

  getCompany() {
    console.log(this.company);
    return this.company;
  }
}

const myCar = new MyCar("Tata", "Safari", "Adventure Persona");

myCar.getCompany();

console.log(this);
