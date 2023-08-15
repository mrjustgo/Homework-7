//Задание 1
let str = "js";
let upperStr = str.toUpperCase();
console.log(upperStr);
//Задание 2
function findStrings(arr, str) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  //Задание 3
  let number = 32.58884;

let roundedDown = Math.floor(number); // округление до меньшего целого
let roundedUp = Math.ceil(number); // округление до большего целого
let rounded = Math.round(number); // округление до ближайшего целого

console.log(roundedDown); // выводит 32
console.log(roundedUp); // выводит 33
console.log(rounded); // выводит 33
//Задание 4
const numbers = 52,53, 49, 77, 21, 32;
const smallestNumber = Math.min(...numbers);
const largestNumber = Math.max(...numbers);
console.log("Наименьшее число: " + smallestNumber);
console.log("Наибольшее число: " + largestNumber);
//Задание 5 
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
  }
  
  getRandomNumber();
  //Задание 6
  function generateRandomArray(n) {
    let arr = [];
    for (let i = 0; i < n / 2; i++) {
      arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arr;
  }
  //Задание 7
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //Задание 8
  const date = new Date();
    console.log(date);
    //Задание 9
    let currentDate = new Date(); // создаем переменную и сохраняем в нее текущую дату
    currentDate.setDate(currentDate.getDate() + 73); // находим дату, которая будет через 73 дня
    console.log(currentDate); // выводим дату, которая наступит через 73 дня после текущей.
    //Задание 10 Переделал немного
    function formatDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
      const formattedDate = date.toLocaleDateString('ru-RU', options);
      const time = date.toLocaleTimeString('ru-RU');
      return Дата: ${formattedDate} - это ${date.toLocaleDateString("ru-RU", { weekday: "long" })}\nВремя: ${time};
    }
    const currentDate = new Date();
    console.log(formatDate(currentDate));