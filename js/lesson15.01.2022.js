// do {
// 	const userValue = Number(prompt("Calculate 2+2*2"));
// } while (userValue !== 6);

// alert('You are right!');

//вывести все высокостные годы (нацело делиться на 4)
//из заданого дипазона(for, do..while)

//начало и конец диапазона
//* таблица умножения

// let BegNow = Number(prompt("Начало диапазона"));
// const EndNow = Number(prompt("Конец диапазона"));

// for (BegNow; EndNow >= BegNow; BegNow++) {
// 	if (BegNow % 4 == 0) {
// 		console.log(BegNow, "Высокостный год");
// 	}
// }
// let BegNow1 = Number(prompt("Начало диапазона"));
// const EndNow2 = Number(prompt("Конец диапазона"));
// do {
// 	if (BegNow1 % 4 == 0) {
// 		console.log(BegNow1, "Высокостный год");
// 	}
// 	BegNow1++;
// } while (BegNow1 <= EndNow2);

let number1 = Number(prompt("Введите число. которое умножаем"));

// for (let i = 1; i <= 9; i++) {
// 	let number1 = Number(prompt("Введите число. которое умножаем"));
// 	console.group("Таблица умножена для " + i);
// 	for (let j = 1; j <= 9; j++) {
// 		const sum = i * j;
// 		console.log(sum, i + "*" + j);
// 	}
// }

//переменные, объявленные вне любого блока -- глобальные, видны всем блокам(Scope - Script)
//Переменнные, объявленные внутри бока, т.е. в {} -- локлаьные, видны только внутри блока(Scope - Block)
//пользователь имеет 3 попытки ввести пароль
//если паль верен, то вывести "Пароль верен"
//Иначе пароль неверен
// let TRY_LIMIT = 3;
// const password = "qwerty";
// let currentTry = 1;
// let isPasswordCorrect = false;

// do {
// 	const userInputPassword = prompt("Input password");
//     if(userInputPassword = PASSWORD){
//         console.log("right password")
//         break;
//     }
// } while (++currentTry <= TRY_LIMIT);
// if(isPasswordCorrect){
//     console.log("Пароль верен")
// }else{
//     console.log("Пароль неверен")
// };
// const passwType = isPasswordCorrect ? 'верен' : 'неверен'
// console.log(`Пароль` ${isPasswordCorrect ? 'верен' : 'неверен'});
//  const sumAB = sum (1,2);

//  function sum(a, b){
//      const sumOfAB = a+b;
//      return sumOfAB;
//  }
//написать функцию, котороая возводит указанное число(параметр) в степень 4
//a*a*a*a
//a**4

// const deg4 = Number(prompt("Введите число"));

// function deg4(x) {
// 	const x4 = x ** 4;
// 	return x4;
// }
//написать функцию для расчета суммы чисел от 1 до n
const sum1To5 = sum1ToMaxValue(5);
console.log(sum1To5);

function sum1ToMaxValue(maxValue) {
	let sum = 0;
	for (let i = 1; 1 <= maxValue; i++) {
		sum += 1;
	}
	return sum;
}
//написать функцию которая возвращает true or false
//в зависимости от переданого количества лет

let n1 = 1;
const n2 = Number(prompt("Введите конечное число"));

function productNumbers(n2, n1 = 1) {
	const sum = 1;
	for (n1; n1 <= n2; n1++) {
		sum = sum * n1;
	}
	return sum;
}
