import { Mammal } from "./mammal.js";

export class Cat extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  showInfo() {
    return console.log(`Порода: ${this.breed}. Имя: ${this.name}`);
  }
}
