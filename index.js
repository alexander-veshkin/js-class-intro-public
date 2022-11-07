import { Cat } from "./classes/cat.js";
import { Mammal } from "./classes/mammal.js";
import { Dog } from "./classes/dog.js";

// cat1, cat2 ...
// dog1, dog2 ...

let mammalNew = new Mammal("PerrorName");
// console.log(mammalNew.eats());

let dog = new Dog("Boby", "Alexander", 6, "Meat");
console.log(dog);
console.log(dog.isPuppy());
dog.info();

let cat = new Cat("AliceCat", "Basic dvorovaya poroda");
cat.showInfo();
