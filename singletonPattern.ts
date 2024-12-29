class Singleton {
  private static instance: Singleton;
  private data = {};
  private constructor() {}
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData() {
    return this.data;
  }

  public setData(data: object) {
    this.data = data;
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.setData({ name: "mohamed" });
console.log(singleton1.getData());
console.log(singleton2.getData());
