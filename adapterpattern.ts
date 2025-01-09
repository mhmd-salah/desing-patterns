interface IRectangle{
  width:number;
  height:number;
  calculateArea():number;
}


class CircleO {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class CircleToRectangleAdapter {
  private circle:CircleO

  constructor(circle:CircleO){
    this.circle = circle
  }

  getWidth():number{
    return this.circle.radius * 2
  }
  getHeight():number{
    return this.circle.radius * 2
  }
  calculateArea(): number {
    return this.circle.calculateArea()
  }
}
class RectangleClient {
  static printArea(rectangle: IRectangle) {
    console.log(`Area: ${rectangle.calculateArea()}`);
  }
}

// const circle = new CircleO(5);
// const adapter = new CircleToRectangleAdapter(circle);

// RectangleClient.printArea(adapter);
// Output:
// Area: 78.53981633974483
