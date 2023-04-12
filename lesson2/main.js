//                    node ./main.js
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
  ];


  // const f=(a)=>{
//     console.log(a);
// }
// console.log(3);

  //array.push - analogy
  const f=(arr,...rest)=>{

    for (let i=0; i<rest.length; i++){
        arr[arr.length]=rest[i]
    }
        //arr[arr.length]=rest[i]
    return arr;
  }
  //f([0,2,4],3,4,5,8)
console.log(f([0,2,4],3,4,5,8));