//Проверить возраст пользователя: Если пользователь совершеннолетний, выдать запрос о ковид сертификате

/*const userAge = prompt("Введите возраст");

if ((userAge) => 18) {
	console.log("Предъявите сертификат");
} else {
	console.log("Доступ позволен");
}*/
//если пользователь возраста 65+лет, то срочная вакциная, если 65 и 18
// const userAge1 = prompt("Введите возраст");
// if (userAge1 >= 65) {
// 	const sertif = confirm("Есть ли у вас сертификат");
// 	if (sertif == true) {
// 		console.log("Welcome");
// 	} else if (sertif == false) {
// 		console.log("Срочная вакцинация");
// 	}
// } else if (userAge1 < 65 && userAge1 >= 18) {
// 	const sertif = confirm("Есть ли у вас сертификатwww");
// 	if (sertif == true) {
// 		console.log("Welcome");
// 	} else if (sertif == false) {
// 		console.log("Рекомендуется вакциния");
// 	}
// } else if (userAge1 < 18) {
// 	console.log("Welcome");
// }

// console.log("true && true", true && true);
// console.log("true && true", true && false);
// console.log("true && true", false && true);
// console.log("true && true", false && false);

//если ребенок пожилой человек половину стоимости
//иначе полную стоимость
// const userAge = prompt("Введите возраст");
// if (userAge < 14 || userAge > 65) {
// 	console.log("Оплатите половину стоимости");
// } else {
// 	console.log("оплатите полную стоимость");
// }

// перевести 12-ти бальную оценку в 5-бальную оценку
//const point = Number(prompt("Укажите оценку"));

// if (point === 12) {
// 	console.log("5+");
// } else if (point === 11) {
// 	console.log("5");
// }

//SWITCH

// switch (point) {
// 	case 1:
// 		console.log("2-");
// 		break;
// 	case 2:
// 		console.log("2-");
// 		break;
// 	case 3:
// 		console.log("2+");
// 		break;
// 	case 4:
// 		console.log("3-");
// 		break;
// 	case 5:
// 		console.log("3");
// 		break;
// 	case 6:
// 		console.log("3+");
// 		break;
// 	case 7:
// 		console.log("4-");
// 		break;
// 	case 8:
// 		console.log("4");
// 		break;
// 	case 9:
// 		console.log("4+");
// 		break;
// 	case 10:
// 		console.log("5-");
// 		break;
// 	case 11:
// 		console.log("5");
// 		break;
// 	case 12:
// 		console.log("5+");
// 		break;
// 	default:
// 		console.log("Неккоректно введено или не сдано");
// }

// const a = Number(prompt("Первое число"));
// const b = Number(prompt("Второе число"));
// const znak = prompt("Введите операцию");

// switch (znak) {
// 	case "+":
// 		console.log("Сложение ", a + b);
// 		break;
// 	case "-":
// 		console.log("Вычитание ", a - b);
// 		break;
// 	case "/":
// 		console.log("Деление ", a / b);
// 		break;
// 	case "*":
// 		console.log("Умножение ", a * b);
// 		break;
// 	default:
// 		console.log("Вы ввели некорректную операцию");
// 		break;
// }

//Условный тенарный оператор
// const number1 = Number(prompt("первое число"));
// const number2 = Number(prompt("второе число"));

// if (number1 > number2) {
// 	console.log(number2);
// } else {
// 	console.log(number1);
// }

// const minNumber = number2 < number1 ? number2 : number1;
// console.log(minNumber);
//Если совершенолетний, то переменная access приме значение "has access"
//иначе переменная access примет знаение "hasn`t access"
//const access = (Number(prompt("enter you age "))>=18) ?

// const stepsCount = 4;
// let currentStep = 1;
// while (currentStep++ <= stepCount) {
// 	console.log("Пройди прямо");
// 	console.log("Поверни направо");
// }

//У пользователя есть книга с pageCount страниц
// Вывести номера страниц с1й по последнюю
// let countPage = 1;
// const totalPages = 20;
// while (countPage++ < totalPages) {
// 	if (countPage % 2 == 0) {
// 		console.log(countPage);
// 	}
// 	countPage++;
// }
