/* eslint-disable no-console */
import Person from "./Person";

export default class Student extends Person {
  constructor(name, className) {
    super(name);
    this.className = className;
    this.study = this.study.bind(this);
  }

  study() {
    console.log(super.move());
    console.log(`${this.name} is studying in ${this.className}`);
  }
}
