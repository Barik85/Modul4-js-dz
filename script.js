document.writeln('Часть задач в консоли');

const alfabet = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./"

function addKeyboardLayot( alf ){
    let keyboard = [Array.from(alf.slice(0, 13)), Array.from(alf.slice(13, 24)), Array.from(alf.slice(24))];
    return(keyboard);
}

console.log( addKeyboardLayot(alfabet) );

function getRandCharInRow( raw ) {
    raw = raw - 1;
    let keyboard = addKeyboardLayot(alfabet);
    let number = keyboard[raw].length;
    let letter = keyboard[raw][randomNumber(number)];
    return(letter);
}
function randomNumber(max) {
    let rand = Math.random() * max;
    rand = Math.floor( rand );
    return(rand);
}

let userRaw = prompt('Выберете строку от 1 до 3');
userRaw = parseInt(userRaw);
if( userRaw >= 1 && userRaw <= 3) {
    alert( 'Случайный символ в строке' + userRaw + ' : ' + getRandCharInRow(userRaw) );
} else {
    alert('Вы ввели неправильное число. Обновите страницу и попробуйте еще раз');
}
console.log(getRandCharInRow(1));


function getRandCharInAlph(){
    let keyboard = addKeyboardLayot(alfabet);
    let raw = randomNumber(keyboard.length);
    let number = keyboard[raw].length;
    let letter = keyboard[raw][randomNumber(number)];
    return(letter);
}
console.log( 'Cлучайная буква на всей клавиатуре: ' + getRandCharInAlph());