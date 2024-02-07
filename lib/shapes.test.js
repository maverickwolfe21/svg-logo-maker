//import the shape file
const { Circle, Triangle, Square } = require("../lib/shapes.js");

// test for Circle object
test("Test 1: Create a blue circle", () => {
  const shape = new Circle("blue");

  // make sure shape is in fact a blue circle
  expect(shape.render()).toEqual('<circle cx="151" cy="101" r="80" fill="blue" />');
});

// test for triangle object
test("Test 2: Create a green triangle", () => {
  const shape = new Triangle("green");

  // make sure shape is in fact a green triangle
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});

// test for Square object
test("Test 3: Create a purple square", () => {
  const shape = new Square("purple");

  // make sure shape is in fact a purple square
  expect(shape.render()).toEqual('<rect x="56" y="18" width="188" height="164" fill="purple" />');
});
