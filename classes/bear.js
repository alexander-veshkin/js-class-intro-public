import { Mammal } from "./mammal.js";

export class Bear extends Mammal {
  constructor(
    name,
    age,
    placeToLeave = "Южный полюс",
    color,
    phrase = "Погоди, чет спрошу!"
  ) {
    super(name);
    this.age = age;
    this.placeToLeave = placeToLeave;
    this.phrase = phrase;
    placeToLeave === "Северный полюс"
      ? (this.color = "Белый")
      : (this.color = "Бурый");
  }

  arrr() {
    let arr;
    if (this.age > 5) {
      arr = "ARRRRR !!!";
    } else {
      arr = "arr !";
    }
    return arr;
  }

  show() {
    return "img.jpeg";
  }
}
