/*
Задание No1. Скрыть элемент по нажатию кнопки
Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
*/
document.querySelector('#hider').addEventListener('click', function () {
    document.querySelector('#text').style.display = 'none';
});