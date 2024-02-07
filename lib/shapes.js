// define shapes class and extend with specific children

//create the parent class
class Shape {
  constructor(color) {
    this.color = color;
  }

  // render method is required for children
  render() {
    throw new Error("The render method is required for child classes.");
  }
}

//create the child 'circle' class that extends its parent
class Circle extends Shape {
  render() {
    //return SVG circle generated based on inputed color
    return `<circle cx="151" cy="101" r="80" fill="${this.color}" />`;
  }
}

//create the child 'triangle' class that extends its parent
class Triangle extends Shape {
  render() {
    //return SVG triangle generated based on inputed color
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

//create the child 'square' class that extends its parent
class Square extends Shape {
  render() {
    //return SVG square generated based on inputed color
    return `<rect x="56" y="18" width="188" height="164" fill="${this.color}" />`;
  }
}

//export the use of triangle, circle and sqaure classes
module.exports = { Circle, Triangle, Square };
