interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using credit card`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal`);
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;
  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  pay(amount: number) {
    this.strategy.pay(amount);
  }
}

const paymentContext = new PaymentProcessor(new CreditCardPayment());
paymentContext.pay(100);
paymentContext.setStrategy(new PayPalPayment());
paymentContext.pay(200);