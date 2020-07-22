const killMoles = document.getElementById('dead');
const nonHole = document.getElementById('lost');

// const hasMole = document.querySelector('.hole_has-mole');
// const emptyHole = document.querySelector('.hole');


// hasMole.onclik = function() {
//     if (hasMole.classList.contains('hole_has-mole')) {
//         return killMoles.textContent++;
//     }
// }
// emptyHole.onclik = function() {
//     if (hasMole.classList.contains('hole')) {
//         return nonHole.textContent++;
//     }
// }

getHole = index => document.getElementById(`hole${index}`);
// for (index = 1; index < 9; index++ )
getHole.onclick = function() {
    if (getHole.classList.contains('hole_has-mole')) {
        return killMoles.textContent++;
    } else {
        return nonHole.textContent++;
    }
}