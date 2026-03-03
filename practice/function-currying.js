// Function currying - process of splitting a function with many arguments into a sequence of functions with single argument and applying
// the result partially.

function add(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

const add1 = add(1);
const add2 = add1(2);
const res = add2(3);

console.log(res);

// Partial application of funcitons - fixing a few arguments of the function so that we can use other atttributes easily without problems to partially use function

function addp(a, b) {
  return a + b;
}

const add5 = addp.bind(null, 5);

const result2 = add5(10);
console.log(result2);

function addp2(a, b, c) {
  return a + b + c;
}

const add15 = addp2.bind(null, 5, 10);

const result3 = add15(1);
console.log(result3);
