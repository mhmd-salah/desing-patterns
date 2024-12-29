// factory pattern

// 1. create a shape interface
interface Shape {
  draw(): void;
}

// 2. create concrete classes implementing the same interface.
class Circle implements Shape {
  draw(): void {
    console.log("drawing circle");
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log("draw rectangle");
  }
}

// 3. create a factory to generate object of concrete class based on given information.
class ShapeFactory {
  public getShape(shapeType: string): Shape | null {
    if (shapeType == "CIRCLE") {
      return new Circle();
    } else if (shapeType == "RECTANGLE") {
      return new Rectangle();
    } else {
      console.log("invalid shape type");
      return null;
    }
  }
}

const factory = new ShapeFactory();

const circle = factory.getShape("CIRCLE");
circle?.draw();

const rectangle = factory.getShape("RECTANGLE");
rectangle?.draw();
