// Задача 2:
// Напишіть функцію, яка змінює колір фону та колір тексту, присвоюючи до нових кольорів значення з this.color, this.background. Також додає елемент h1 з текстом "I know how binding works in JS"
// 1.1 Ф-я приймає один аргумент, другий потрапляє до нього через метод .call(obj)
// 1.2 Ф-я не приймає жодних аргументів, а необхідні налаштування повністю передаються через bind
// 1.3 Ф-я приймає фразу для заголовка, об'єкт із налаштуваннями передаємо через .apply();
// */
   // let colors = {
        // background: 'purple',
        // color: 'white'
 // }
// fucntion myCall (color) {
      // document.body.style.background = this.background;
      // document.body.style.color = color;
 // }
   // myCall.call (colors, 'red');