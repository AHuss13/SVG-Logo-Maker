const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

async function makeLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter desired text. Choose up to 3 characters:",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter text color keyword or hexadecimal:",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color keyword or hexadecimal:",
      },
    ]);

    let shape;
    switch (userInput.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
      default:
        throw new Error("Invalid shape selection");
    }

    shape.setColor(userInput.shapeColor);

    const svgString = `
      <svg xmlns= width="300" height="200">
        ${shape.render()}
        <text x="150" y="150" font-size="30" fill="${
          userInput.textColor
        }" text-anchor="middle">${userInput.text}</text>
      </svg>
    `.trim();

    fs.writeFileSync("logo.svg", svgString);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

makeLogo();
