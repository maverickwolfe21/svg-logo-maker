// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
      },
      {
        type: "input",
        message: "Enter text color (keyword or hexadecimal):",
        name: "text-color",
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
        name: "shape-color",
      },
    ])

    .then((response) => {
      writeToFile("logo.svg", "content");
    });
}

// Function call to initialize app
init();
