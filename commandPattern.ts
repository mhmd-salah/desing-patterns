interface Command {
  execute(): void;
}

class AddToCartCommand implements Command {
  constructor(private item: string, private cart: string[]) {}

  execute(): void {
    this.cart.push(this.item);
    console.log(`${this.item} added to cart`);
  }
}

class RemoveItemFromCart implements Command {
  constructor(private item: string, private cart: string[]) {}

  execute(): void {
    const index = this.cart.indexOf(this.item);

    if (index > -1) {
      this.cart.splice(index, 1);
      console.log(`${this.item} removed form cart`);
    }
  }
}

class CartInvoker {
  executeCommand(command: Command): void {
    command.execute();
  }
}

const cart: string[] = [];

const invoker = new CartInvoker();

const addToCart = new AddToCartCommand("item 1", cart);
invoker.executeCommand(addToCart);

console.log(cart);

const removedCart = new RemoveItemFromCart("item 1", cart);
invoker.executeCommand(removedCart);
