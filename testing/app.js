const users = [
  {
    name: "Akshith",
    age: 24,
  },
  {
    name: "Anushka",
    age: 18,
  },
  {
    name: "Virat",
    age: 37,
  },
  {
    name: "Kylian",
    age: 27,
  },
];

// Sort these users according to age
// This function is a small unit of our code
// We will write test cases for this function

function sortingByAge(data) {
  return data.sort((a, b) => a.age - b.age);
}
console.log("Before sorting - ", users);

sortingByAge(users);

console.log("After sorting - ", users);

module.exports = { sortingByAge };
