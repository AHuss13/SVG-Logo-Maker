const { Triangle, Circle, Square } = require("./shapes");

test("Triangle render method should return correct SVG string", () => {
  const triangle = new Triangle();
  triangle.setColor("blue");
  expect(triangle.render()).toEqual(
    '<polygon points="150,18 244,182 56,182" fill="blue" />'
  );
});

test("Circle render method should return correct SVG string", () => {
  const circle = new Circle();
  circle.setColor("green");
  expect(circle.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="green" />'
  );
});

test("Square render method should return correct SVG string", () => {
  const square = new Square();
  square.setColor("red");
  expect(square.render()).toEqual(
    '<rect x="40" y="40" width="220" height="220" fill="red" />'
  );
});
