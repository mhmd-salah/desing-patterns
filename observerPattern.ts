interface Observer {
  update(state: string): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

class StateManager implements Subject {
  private observers: Observer[] = [];

  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    this.observers.filter((o) => o !== observer);
  }
  notifyObservers(): void {
    for (let o of this.observers) {
      o.update(this.state);
    }
  }

  setState(state: string): void {
    this.state = state;
    this.notifyObservers();
  }
}

class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(state: string | number): void {
    console.log(`new state is ${state}`);
  }
}


const stateManager = new StateManager("initial state")

const concreteObsOne = new ConcreteObserver("one")
const concreteObsTwo = new ConcreteObserver("two")

stateManager.addObserver(concreteObsOne)
stateManager.addObserver(concreteObsTwo)

stateManager.setState("create header")
stateManager.setState("create footer")
