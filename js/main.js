//? task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду

// вывод:
// 1
// 12
// 123

// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

//? task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let arr = "";
// for (let i = 1; i <= 7; i++) {
//   arr += "#";
//   console.log(arr);
// }

//? task 3
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

//? task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}],
//  задача, отфильтровать массив, оставив только строки и числа

let arr = [
  1,
  10,
  true,
  "hello",
  "JS",
  null,
  false,
  0,
  { title: "Samsung", price: 1000 },
];

//? task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
//  вывести в консоль символы у которых четный индекс

//? task 6
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ['Helen', 'Tom'],
//     ['Jack', 'Peter']
//   ],
//   [
//     ['Jessica', 'Bob'],
//     ['Jimm', 'John']
//   ],
//   [
//     ['Alexa', 'Jessy'],
//     ['David', 'Paul']
//   ]
// ], задача: вывести в консоль только те имена, длинна которых больше 4-х символов

const names = [
  [
    ["Helen", "Tom"],
    ["Jack", "Peter"],
  ],
  [
    ["Jessica", "Bob"],
    ["Jimm", "John"],
  ],
  [
    ["Alexa", "Jessy"],
    ["David", "Paul"],
  ],
];
let count = "";
for (let i of names) {
  for (let g of i) {
    for (let v of g) {
      if (v < 4) {
        count++;
      }
    }
  }
}
console.log(count);

// [1,"2","3",4,5] --> false
// [1,2,3,4,5] --> true
// Проверьте все ли элементы в массиве number
//? task 7

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i <= arr.length; i++) {
//   if (i == Number) {
//     console.log(true);
//   }
// }

// let newarr = [1, "2", "3", 4, 5];
// for (let i of newarr) {
//   if (i === Number) {
//     console.log(false);
//   }
// }

//? task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]

//? task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

//? task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.

//? let n = 3
// let str "hello"
// вывод:
// "hellohellohello"

// let str = "hello";
// let n = 3;
// let res = "";
// for (let i = 1; i <= n; i++) {
//   res += str;
// }
// console.log(res);

//? task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10
// 1-2-3-4-5-6-7-8-9-10

//? task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for

// let res = [];
// for (let i = 1; i <= 10; i++) {
//   res.push(i);
// }
// console.log(res);

//? task 13
// Найдите самый длинный элемент массива и выведите в консоль
// "Hello my name is John"

//? task 14
// Так же найдите самый короткий элемент этого же массива
