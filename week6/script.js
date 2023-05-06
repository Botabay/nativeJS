const students = [
  {
      id: 1,
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85,
      // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
  },
  {
      id: 2,
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
  },
  {
      id: 3,
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
  },
  {
      id: 4,
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
  },
  {
      id: 5,
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
  },
  {
      id: 6,
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
  },
];

const user = {
  name: "Bob",
  age: 23,
  friends: ["Alex", "Nick", "John"]
}

const superUser = {
  name: "Bob",
  age: 23,
  friends: [
      {
          id: 1,
          name: "Ann",
          age: 22,
          isMarried: true,
          scores: 85
      },
      {
          id: 2,
          name: "Alex",
          age: 21,
          isMarried: true,
          scores: 90,
      },
      {
          id: 4,
          name: "John",
          age: 19,
          isMarried: false,
          scores: 100
      }
  ]
}

let deepCopyUser={...user}//1 for in
console.log(deepCopyUser==user)

const deepCopyStudents=students.map(el=>({...el}));//2
console.log(deepCopyStudents==user)

const deepCopySuperUser = {...superUser,friends:superUser.friends.map(el=>({...el}))}//3
console.log(deepCopySuperUser)
let sortedByScores=students.map(el=>({...el})).sort((a,b)=>a.scores>b.scores?-1:1)//4
console.log('4',sortedByScores);
//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents=students.filter(el=>el.scores>=100)//5
console.log(bestStudents)
//6. Сформируйте массив имён студентов (map)
let studentsNames=students.map(el=>el.name)//6
console.log(studentsNames)

//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents=students.map(el=>({...el,isStudent:true}))//7;
console.log(trueStudents)

//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
let studentsWithMarriedNick=students.map(el=>el.name==='Nick'?{...el,isMarried:true}:el)//7;;
console.log(studentsWithMarriedNick)

// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
let superUserCorrect1={...superUser,friends:superUser.friends.filter(el=>el.id!==1)};
console.log(superUserCorrect1)

//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
let superUserCorrect2={...superUser,friends:superUser.friends.map(el=>el.id===2?{...el,name:'donald'}:el)};
console.log(superUserCorrect2);

//11. добавьте в список друзей нового друга
const newFriend = {
  id: 5,
  name: "Nick",
  age: 27,
  isMarried: false,
  scores: 99
}
let superUserCorrect3={...superUser,friends:[...superUser.friends,newFriend]};
console.log(superUserCorrect3);

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()*
function m(arr){
  let max=0,ind=0;
  for (let i=0;i<arr.length;i++){
    if(arr[i].scores>max) {max=arr[i].scores;ind=i}
  }
  return arr[ind]
}
let bestStudent=m(students);
console.log(bestStudent.name)

//13. Найдите сумму баллов всех студентов (reduce)*
let scoresSum=students.reduce((acc,cur)=>acc+cur.scores,0);
console.log(scoresSum)

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
  return students.map(el=>({...el,friends:students.map(ell=>ell.name).filter(ell=>ell!==el.name)}))
}
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

const getBestStudents=(students,n) => {
  // for (let i=0;i<n-students.length;i++){students.push(null)}
//  let arr=students.sort((a,b)=>a.scores>b.scores?-1:1).filter((el,ind)=>ind<3);
//  arr.length=n
function m(arr){
  let max=0,ind=0;
  for (let i=0;i<arr.length;i++){
    if(arr[i].scores>max) {max=arr[i].scores;ind=i}
  }
  return arr[ind]
}
if (n===undefined) {return m(students)}
 if(n<=students.length){
  return students.sort((a,b)=>a.scores>b.scores?-1:1).filter((el,ind)=>ind<n)
 }else {
  let arr=students.sort((a,b)=>a.scores>b.scores?-1:1).filter((el,ind)=>ind<3);
 arr.length=n
 return arr;
}
}
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
console.log(getBestStudents(students,3))
console.log(getBestStudents(students,10))
console.log(getBestStudents(students))