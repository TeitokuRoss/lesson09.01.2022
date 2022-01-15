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

for (let i = 1; i <= 9; i++) {
	let number1 = Number(prompt("Введите число. которое умножаем"));
	for (let j = 1; j <= 9; j++) {
		const sum = i * j;
		console.log(sum, i + "*" + j);
	}
}
