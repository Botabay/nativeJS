// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов
//и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки
//с использованием разделителя.

const repeatString = (str, count, space) => {
  let sum = '';
  for (let i = 0; i < count - 1; i++) {
    sum += str + space;
  }
  return sum + str;

  //Array.from(obj,()=>str) filling the array is good by Nicolay
};
// console.log(repeatString('yo', 3, ' ')); // => "yo yo yo"
// console.log(repeatString('yo', 3, ',')); // => "yo,yo,yo"
// console.log(repeatString('yo', 3, ', ')); // => "yo, yo, yo"
// console.log(repeatString('yo', 0, ', ')); // => ""
// console.log(repeatString('yo', 1, ', ')); // => "yo"

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
//а возвращает true, если строка начинается с указанной подстроки, в противном
//случае - false. Регистр не учитывается.
const checkStart = (str, subStr) => {
  const regg = new RegExp(`^${subStr}`, 'i');
  console.log(regg.toString());
  return regg.test(str);
};
console.log(checkStart('Incubator', 'inc')); // => true
console.log(checkStart('Incubator', 'yo')); // => false      /////////////////

//3. Реализуйте функцию, которая принимает параметром строку и число
//(количество символов), а возвращает строку из параметров, обрезанную до
//указанного количества символов и завершает её многоточием.

const truncateString = (str, m) => {
  return str.slice(0, m) + '...';
};
// console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10)); // => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и
//возвращает самое короткое слово в предложении, если в параметрах пустая строка
//или не строка, то возвращает null.
// const getMinLengthWord = (str) => {
//   // if (typeof str!=='string' || str==='')return null;
//   // const a=str.split(' ');
//   // let min=0;
//   // for(let i=0; i<a.length;i++){
//   //   if (a[i].length>min) min=a[i];
//   // }
//   // return min
//   if (typeof str!=='string' || str==='')return null;
//   return str.split(' ').reduce((acc,cur)=>cur.length<acc?acc=cur:acc,10000)

// };
const getMinLengthWord = (str) => {
  if (typeof str!=='string' || str==='')return null;
  return str.split(' ').reduce((acc,cur)=>cur.length<acc?acc=cur:acc, str.split(' ')[0].length)
};
console.log(getMinLengthWord('Всем dd студентам инкубатора желаю удачи.')); // => "Всем"
console.log(getMinLengthWord('')); // => null
console.log(getMinLengthWord(123)); // => null
console.log(getMinLengthWord(true)); // => null
console.log(getMinLengthWord(undefined)); // => null ////

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и
//возвращает то же предложение, где все слова написаны строчными, но начинаются
//с заглавных букв.
const setUpperCase = (str) =>   
  str.toLowerCase().split(' ').map(el=>el.slice(0,1).toUpperCase()+el.slice(1)).join(' ')+'!'
// console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ')); // => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке
const isIncludes = (str,subStr) => {
  // for (let i=0)
  // for
  // every

  // const isIncludes = (str, subStr) => [...subStr.toLowerCase()].every(letter => str.toLowerCase().includes(letter))
};
isIncludes('Incubator', 'Cut'); // => true
isIncludes('Incubator', 'table'); // => false
isIncludes('Incubator', 'inbba'); // => true //*false
isIncludes('Incubator', 'inba'); // => true  //*true
isIncludes('Incubator', 'Incubatorrr'); // => true //*false
