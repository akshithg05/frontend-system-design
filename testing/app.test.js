const { sortingByAge } = require("./app");

test("Check if the function will sort the array", () => {
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
  const sortedData = sortingByAge(users);

  expect(sortedData[0]?.name).toBe("Anushka");
  expect(sortedData[sortedData.length - 1]?.name).toBe("Virat");
});

test("Sorted data not to be undefined", () => {
  const users = [
    {
      name: "Akshith",
      age: 24,
    },
    {
      name: "Anushka",
      age: 18,
    },
  ];
  const sortedData = sortingByAge(users);

  expect(sortedData).not.toBe(undefined);
});
