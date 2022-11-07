import { Mammal } from "./mammal.js";

export class Dog extends Mammal {
  constructor(name, owner, age, food) {
    super();
    this.name = name;
    this.owner = owner;
    this.age = age;
    this.food = food;
  }

  eats() {
    return `${this.owner}'s dog whos name is ${this.name} eats ${this.food}`;
  }

  isPuppy() {
    if (this.age < 7) {
      return true;
    }
    return false;
  }

  info() {
    return console.log(
      `Owner: ${this.owner}, Dog's name: ${this.name}, isPuppy: ${this.isPuppy(
        this.age
      )}`
    );
  }
}
