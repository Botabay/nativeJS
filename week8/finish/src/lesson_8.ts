// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    //console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, cur) => acc + cur, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    let arr: number[] = [a, b, c];
    arr.sort((aa, bb) => aa - bb);

    if (arr[0] === arr[1] && arr[1] === arr[2]) return '10';
    if (arr[0] === arr[1] || arr[1] === arr[2]) return '01';
    // console.log(arr, +arr[2] < +arr[0] + +arr[1])
    if ((arr[2] - (+arr[0] + +arr[1])) < 0) return '11'; else return '00'
    return ''
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return number.toString().split('').reduce((acc, cur) => acc + +cur, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // // В return стоит "заглушка", чтоб typescript не ругался
    // return arr.reduce((acc, cur, ind) => ind % 2 === 0 ? acc + cur : acc, 0) >
    //     arr.reduce((acc, cur, ind) => ind % 2 === 0 ? acc : acc + cur, 0)
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
        res = -res;
    }
    return arr.length % 2 === 0 ? res > 0 : res < 0;
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el => el > 0 && el % 1 === 0).map(el => el * el)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return (1 + N) / 2 * N;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let result = []
    let k = 0;
    //цикл выбора стартовой банкноты
    while (k <= banknotes.length) {
        if (amountOfMoney - banknotes[k] < 0) { k = k + 1 } else { break };
    }
    //формирование итогового массива
    while (amountOfMoney > 0) {
        amountOfMoney = amountOfMoney - banknotes[k];
        if (amountOfMoney >= 0) {
            result.push(banknotes[k]);
        } else { amountOfMoney = amountOfMoney + banknotes[k]; k = k + 1 };
    }
    return result
}