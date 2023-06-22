// this, call | apply | bind, f constructor

// 1. Global scope
// 2. funsction, arrow f
// 3. call | apply | bind
// 4. functions constructior

// "use strict";

// console.log(this);

// function foo() {
//   const foo1 = () => {
//     console.log(this);
//   };
//   foo1();
// }

// foo();

// var maxSpeed = 180;

// const car = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//     // this
//     const foo = () => {
//       console.log(this.maxSpeed);
//     };
//     foo(); //window ????
//   },
// };

// car.showMaxSpeed();

// function foo() {
//   // console.log(this);
//   //this
//   function foo1() {
//     console.log(this);
//   }
//   foo1();
// }

// const bar = foo;

// bar();

// const car1 = {
//   maxSpeed: 180,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   },
// };

// const car2 = {
//   maxSpeed: 200,
// };

// const car3 = {
//   maxSpeed: 300,
// };

// // car1.showMaxSpeed.bind(car2)();

// const b = car1.showMaxSpeed;

// b();

// function Car(maxSpeed, color) {
//   // {}
//   this.maxSpeed = maxSpeed;
//   this.color = color;
//   // return this
// }

// Car.prototype.showMaxSpeed = function () {
//   console.log(this.maxSpeed);
// };

// const car1 = new Car(200, "red");
// const car2 = new Car(180, "black");

// car1.showMaxSpeed();

// // console.log(car1);
// // console.log(car2);

// class Car2 {
//   constructor(maxSpeed, color) {
//     this.maxSpeed = maxSpeed;
//     this.color = color;
//   }
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   }
// }

// const car3 = new Car2(300, "yellow");

// car3.showMaxSpeed();

// const car = {
//   color: "red",
//   showColor() {
//     console.log(this.color);
//   },
// };

// setTimeout(function () {
//   car.showColor();
// }, 1000);

// const car = {
//   color: "red",
//   showColor() {
//     console.log(this.color);
//   },
// };

// setTimeout(() => car.showColor(), 1000);

// const car = {
//   brand: "ferrari",
//   color: "red",
//   showColor() {
//     return `Car color ${this.color}`;
//   },
//   showBrand: () => {
//     return `Car brand ${this.brand}`;
//   },
// };
// console.log(car.showColor());
// console.log(car.showBrand());

// const car = {
//   color: "red",
//   firstShowColor() {
//     console.log("1", this.color);
//   },
//   secondShowColor: () => {
//     console.log("2", this.color);
//   },
//   thirdShowColor() {
//     //this
//     (() => {
//       console.log("3", this.color);
//     })();
//   },
// };

// car.firstShowColor();
// car.secondShowColor();
// car.thirdShowColor();

const car = { color: "red" };

function foo() {
  console.log(this.color);
}

const bindedFoo = foo.bind(car);

bindedFoo();

// function foo() {
//   console.log(this);
// }

// foo();
