// publisher/subscriber

// store.subscribe(function subscriber(){}) // изменение стора
// button.addEventListener('click', function subscriber(){}) // клик произошёл
// promise.then(function subscriber(){}) // промис зарезолвился
// setTimeout(function subscriber(){}, 1000) // прошла секунда

// app.post('/books', function subscriber(){}) //произошел запрос

// // subscriber === handler === listener === watcher

// const button = {
//   _subscribers: {
//     'click': [], // [sb1, sb2]
//     'focus': [], // [sb3, sb4]
//   },
//   click() {
//     this._subscribers['click'].forEach((sub) => sub())
//   },
//   focus() {
//     this._subscribers['focus'].forEach((sub) => sub())
//   },
//   addEventListener(event, subscriber) {
//     this._subscribers[event].push(subscriber)
//   },
//   removeEventListener(event, subscriber) {
//     this._subscribers[event] = this._subscribers[event].filter(sub => sub !=  subscriber)
//   }
// }

// findLast(), findLastIdex(), toReversed(), toSorted(), toSpliced(), with()

// const cars = [
//   { id: 1, brand: "bmw" },
//   { id: 2, brand: "opel" },
//   { id: 3, brand: "audi" },
//   { id: 4, brand: "toyota" },
//   { id: 5, brand: "mers" },
//   { id: 6, brand: "honda" },
//   { id: 7, brand: "mers" },
// ];

// const car = cars.find((car) => car.brand === "mers");

// console.log(car);

// // const carFromEnd = [...cars].reverse().find((car) => car.brand === "mers");

// const carFromEnd = cars.findLast((car) => car.brand === "mers");
// console.log(carFromEnd);

// const cars = [
//   { id: 1, brand: "bmw" },
//   { id: 2, brand: "opel" },
//   { id: 3, brand: "audi" },
//   { id: 4, brand: "toyota" },
//   { id: 5, brand: "mers" },
//   { id: 6, brand: "honda" },
//   { id: 7, brand: "mers" },
// ];

// const a = [1, 2, 3];
// const revArr = a.toReversed();

// console.log(a);
// console.log(revArr);

// const cars = [
//   { id: 1, brand: "bmw" },
//   { id: 2, brand: "opel" },
//   { id: 3, brand: "audi" },
//   { id: 4, brand: "toyota" },
//   { id: 5, brand: "mers" },
//   { id: 6, brand: "honda" },
//   { id: 7, brand: "mers" },
// ];

// const sortedCars = cars.toSorted((current, next) =>
//   current.brand < next.brand ? 1 : -1
// );

// console.log(cars);
// console.log(sortedCars);

const brands = ["bmw", "opel", "audi", "toyota"];

// const splicedBrands = brands.splice(2, 1, "mers");

// console.log(brands);
// console.log(splicedBrands);

const splicedBrands = brands.toSpliced(2, 1, "mers");

console.log(brands);
console.log(splicedBrands);

const newBrands = brands.with(2, "mers");

console.log(newBrands);
