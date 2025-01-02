interface Observer {
  update(state: string): void;
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// create a class managing the state and notifying observers
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
  // notify observers when the state changes
  notifyObservers(): void {
    for (let o of this.observers) {
      o.update(this.state);
    }
  }

  setState(state: string): void {
    this.state = state;
    // notify observers when the state changes
    this.notifyObservers();
  }
}

// create concrete observer class
class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  // update method is called when the state changes
  update(state: string | number): void {
    console.log(`new state is ${state}`);
  }
}


const stateManager = new StateManager("initial state")

// create concrete observers
const concreteObsOne = new ConcreteObserver("one")
const concreteObsTwo = new ConcreteObserver("two")

// add observers to the state manager
stateManager.addObserver(concreteObsOne)
stateManager.addObserver(concreteObsTwo)

// change the state
stateManager.setState("create header")
stateManager.setState("create footer")
