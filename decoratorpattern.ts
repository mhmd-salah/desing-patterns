// interface Coffee {
//   getCost(): number;
//   getDescription(): string;
// }

// class SimpleCoffee implements Coffee {
//   getCost(): number {
//     return 10;
//   }
//   getDescription(): string {
//     return "Simple Coffee";
//   }
// }

// class MilkDecorator implements Coffee {
//   private coffee: Coffee;

//   constructor(coffee: Coffee) {
//     this.coffee = coffee;
//   }

//   getCost(): number {
//     return this.coffee.getCost() + 2;
//   }
//   getDescription(): string {
//     return this.coffee.getDescription() + " + Milk";
//   }
// }

// class SugarDecorator implements Coffee {
//   private coffee: Coffee;

//   constructor(coffee: Coffee) {
//     this.coffee = coffee;
//   }

//   getCost(): number {
//     return coffee.getCost() + 5;
//   }
//   getDescription(): string {
//     return this.coffee.getDescription() + " + Sugar";
//   }
// }

// const coffee = new SimpleCoffee();
// console.log(coffee.getCost());

// const coffeeWithMilk = new MilkDecorator(coffee);
// console.log(coffeeWithMilk.getCost());

// const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
// console.log(coffeeWithMilkAndSugar.getCost());
