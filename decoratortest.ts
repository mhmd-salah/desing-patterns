
interface Coffee {
  getCost():number;
  getDescription():string;
}

class SimpleCoffee implements Coffee{
  getCost():number{
    return 10;
  }

  getDescription():string{
    return "coffee"
  }
}

class MilkCoffee implements Coffee {
  private coffee:Coffee;

  constructor(coffee:Coffee){
    this.coffee = coffee
  }
  getCost():number{
    return this.coffee.getCost() + 2;
  }
  getDescription():string{
    return this.coffee.getDescription() + " + milk"
  }
}

const coffee = new SimpleCoffee()
console.log(coffee.getDescription())


const coffeeWithMilk = new MilkCoffee(coffee)
console.log(coffeeWithMilk.getDescription())
console.log(coffeeWithMilk.getCost());

