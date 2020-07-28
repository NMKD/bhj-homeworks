const killMoles = document.getElementById('dead');
const nonHole = document.getElementById('lost');

//почему все таки мы используем цикл а внутри него функция getHole,а не на оборот
getHole = index => document.getElementById(`hole${index}`);
for (index = 1; index < 9; index++) {
    this.onclick = function() {
        if (getHole(index).classList.contains('hole_has-mole')) {
            killMoles.textContent++;
        } else {
            nonHole.textContent++;
        }
    }
}
//не срабатывает обнуление
// if (killMoles.textContent === 10 || nonHole.textContent === 10) {
//     killMoles.textConten = 0;
//     nonHole.textContent = 0;
// }

//кстати не синхронно с картинкой класс становится на нужный нам div