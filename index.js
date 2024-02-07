// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Triangle, Square } = require("./lib/shapes"); //import shapes class

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Success!")));
}

// TODO: Create a function to initialize app
function init() {
  //prompts and save user input for required parameters (text, text color, shape, shape color)
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter text (3 characters max):",
        name: "text",
        validate: (input) => /^[A-Za-z0-9]{1,3}$/.test(input), // regex for validation
      },
      {
        type: "input",
        message: "Enter text color (keyword or hexadecimal):",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter shape color (keyword or hexadecimal):",
        name: "shapeColor",
      },
    ])

    .then((response) => {
      //define height and width of svg
      const sHeight = 200;
      const sWidth = 300;

      // create shape from user input
      let shape;

      if (response.shape === "Circle") {
        shape = new Circle(response.shapeColor);
      } else if (response.shape === "Triangle") {
        shape = new Triangle(response.shapeColor);
      } else {
        shape = new Square(response.shapeColor);
      }

      // create SVG based on specified height and width for the shape (w3 schools reference)
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="${sHeight}" width="${sWidth}">
    ${shape.render()} <!-- Render the selected shape -->
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${
        response.text
      }</text> <!-- Add the text and set the color -->
  </svg>`;

      // create actual svg file
      writeToFile("examples/logo.svg", svg);
    });
}

// Function call to initialize app
init();
