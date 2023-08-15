function showTextButton(){
   let month = +prompt('Введите номер месяца');
    switch (month) {
        case 9:
        case 10:
        case 11:
            alert('Осень');        
            break;
    
        case 12:
        case 1:
        case 2:
            alert('Зима');        
            break;
    
        case 3:
        case 4:
        case 5:
            alert('Весна');        
            break;
    
        case 6:
        case 7:
        case 8:
            alert('Лето');        
            break;
    
        default:
            alert('Вы ввели некрректное значение!');
            break;
    }
}

let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

// Перемешиваем элементы массива
let shuffledWords = words.sort(function() {return Math.random() - 0.5});

// Выводим перемешанные элементы массива на экран
alert(shuffledWords);

// Запрашиваем у пользователя первый и последний элементы массива
let firstWordGuess = prompt("Чему равнялся первый элемент массива?");
let lastWordGuess = prompt("Чему равнялся последний элемент массива?");

// Проверяем угадал ли пользователь элементы
if (firstWordGuess == shuffledWords[0] && lastWordGuess == shuffledWords[shuffledWords.length - 1]) {
  alert("Поздравляю, вы угадали оба элемента!");
} else if (firstWordGuess == shuffledWords[0] || lastWordGuess == shuffledWords[shuffledWords.length - 1]) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно");
}