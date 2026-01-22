let obj = {
  name: "Akshith",
  age: 24,
  job: "Software Engineer",
};

let obj2 = {
  name: "Anu",
};

function greet() {
  console.log(`Hi this is ${this.name}`);
}

greet.call(obj);
greet.call(obj2);
