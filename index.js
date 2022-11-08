import { Cat } from "./classes/cat.js";
import { Mammal } from "./classes/mammal.js";
import { Dog } from "./classes/dog.js";
import { Parrot } from "./classes/parrot.js";
import { Bear } from "./classes/bear.js";

const bear = new Bear("Мишка", 10, "Южный полюс");
console.log(bear);

const btn = document.createElement("button");
btn.innerText = "Свойства медведя";
btn.className = "btn_color";

const btnMethods = document.createElement("button");
btnMethods.innerText = "Методы";
btnMethods.className = "btn_color";

document.body.appendChild(btn);

//свойства
btn.addEventListener("click", () => {
  var p = document.createElement("p");

  document.body.appendChild(p);
  document.body.appendChild(btnMethods);

  for (let key in bear) {
    p.innerText += key + " : " + bear[key] + "\n";
  }
});

//очистить
const btnClear = document.createElement("button");
btnClear.textContent = "Clear";
btnClear.className = "btn_color";
document.body.appendChild(btnClear);

btnClear.addEventListener("click", () => {
  document.querySelectorAll("p").forEach((el) => {
    el.remove();
    if (document.getElementsByClassName("mtDiv")) {
      let c = document.querySelectorAll(".methodsBtn");
      for (let btn of c) {
        btn.remove();
      }
    }
    if (document.getElementsByTagName("img")) {
      let c = document.querySelectorAll("img");
      for (let img of c) {
        img.remove();
      }
    }
  });
  btnMethods.remove();
  p.innerText = "";
});

//методы
let mtDiv = document.createElement("div");
btnMethods.addEventListener("click", () => {
  let p = document.createElement("p");
  mtDiv.className = "mtDiv";
  document.body.appendChild(mtDiv);
  Object.getOwnPropertyNames(Bear.prototype).forEach((el) => {
    //не показывать конструктор
    if (el !== "constructor") {
      p.innerText += el + "\n";
      var methods = document.createElement("button");
      methods.className = "methods";
      methods.innerText = el;
      methods.className = "methodsBtn";
      // не дублировать
      if (
        document.querySelectorAll(".methodsBtn").length <
        Object.getOwnPropertyNames(Bear.prototype).length - 1
      ) {
        mtDiv.appendChild(methods);
      }
      methods.addEventListener("click", () => {
        switch (event.target.textContent) {
          case "arrr":
            let p = document.createElement("p");
            p.textContent = bear.arrr();
            document.body.appendChild(p);
            break;
          case "show":
            bear.show();
            let img = document.createElement("img");
            img.src = bear.show();
            img.alt = "bear.jpg";
            img.style = "width: 500px; height: 300px";
            document.body.appendChild(img);

            break;
        }
      });
    }
  });
});

// let mammalNew = new Mammal("PerrorName");
// console.log(mammalNew.eats());

// let dog = new Dog("Boby", "Alexander", 6, "Meat");
// console.log(dog);
// console.log(dog.isPuppy());
// dog.info();

// let cat = new Cat("AliceCat", "Basic dvorovaya poroda");
// console.log(cat);
// cat.showInfo();

// let parrot = new Parrot("Попугай", 5, "может говорить");

// console.log(parrot.speak() + " <<<<<<");

// for (let key1 in cat) {
//   console.log(`${key1} in cat is ${cat[key1]}\n`);
// }

// for (let key in dog) {
//   console.log(key + " = " + dog[key]);
// }

// console.log(Object.getOwnPropertyNames(Dog.prototype));

// console.log(Object.getOwnPropertyNames(Cat.prototype));

// console.log(Object.getOwnPropertyNames(Parrot.prototype));

// const bear = new Bear("Vasya", 7)
// // console.log(bear);
// bear.arrr()
