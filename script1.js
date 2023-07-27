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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  shuffleArray(fruits);
  
  const firstElementGuess = prompt("Чему равнялся первый элемент массива?");
  const lastElementGuess = prompt("Чему равнялся последний элемент массива?");
  
  const firstElement = fruits[0];
  const lastElement = fruits[fruits.length - 1];
  
  if (firstElementGuess === firstElement && lastElementGuess === lastElement) {
    alert("Поздравляем, вы угадали оба элемента!");
  } else if (firstElementGuess === firstElement || lastElementGuess === lastElement) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно.");
  }