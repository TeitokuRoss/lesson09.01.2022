// const firstName = "Test";
// const Lastname = "Testovoch";
// const email = "text@gmail.com";

// //объявелние объектов
// const obj1 = {};
// const obj2 = Object();
// const obj3 = new Object();

// const user = {
// 	firstName: "Test",
// 	Lastname: "Testovoch",
// 	email: "test@gmail.com",
// 	password: "qwerty",
// };

// console.log(user);
// console.log(user, firstName);

// user.email = "test1@gmail.com";
// user.id = 123;
// delete user.password;
// //*******Ссылочные типы и типы-значения */
// //Примитивы(типы-значения)
// const a = 1;
// const b = 1;
// console.log(a === b);

// //Объекты

// const o1 = {};
// const o2 = {};
// console.log(o1 === o2);

//Создать объекты машины (марка, модель, год выпуска, номер, цвет)
//просмотреть объекты
//изменить цвет
//удалить св-во год выпуска
//добавить св-во имя/фамилия владельца
//просмотреть объект
// const car = {
// 	nameMark: "Buggati",
// 	modelcar: "Chirron",
// 	color: "yellow",
// 	datesale: "09.01.2022",
// 	serialnumber: "GTHJ0934-RX",
// };

// console.log(car);

// car.color = prompt("Введите новый цвет");
// delete car.datesale;
// car.NameFOP = "Testovoch Testovik";
// console.log(car);

//Вычисляемое свойство
// const prop = prompt('Input prop');
// alert(user[prop]);

// const user1 = {
// 	//Свойства
// 	firtsName: "Test",
// 	lastName: "Testovoch",
// 	email: "test@gmail.com",
// 	password: "qwerty",
// 	//методы
// 	getFullName: function () {
// 		//This -- ссылка на вызывающий объект (на себя)
// 		//console.log('this', this);
// 		return `${user.firtsName} ${user.lastName}`;
// 	},
// 	// getBMI: function(){}
// 	getBMI() {
// 		return this.weight / this.height ** 2;
// 	},
// };

// function getFullName(user) {
//     return `${user.firtsName} ${user.lastName}`
// };

// console.log(getFullName(user1));

// Глобальный объект -- window

//

/********** Функции-конструкторы */

// function User(firtsName, lastName, age, email) {
// 	//const this = {}
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.age = age;
// 	this.email = email;
// 	//retutn this;
// }

// const user4 = new User("Test", "Testovoch", 23, "test@gmail.com");
// const user5 = new User("Fedor", "Sidorovich", 16, "fedor@gmail.com");

// //console.log(user4.idAdult())
// console.log(user5.idAdult());

// const userProto = {}; //New User

// const userProto = function () {
// 	return this.age >= 18;
// };

// User.prototype = userProto;

//реализовать мето для функции конструктора кота/машины для изменения цвета кота/машины (цвет передавать как параметр в метод)

function Car(mark, color, price, maxspeed) {
	this.marl = mark;
	this.color = color;
	this.price = price;
	this.maxspeed = maxspeed;
}

const carProto = {};

carProto.changeColor = function () {
	this.color = "black";
};

Car.prototype = carProto;

const car1 = new Car("Buggati", "Yellow", 2000000, 450);
console.log(car1);

console.log(car1.changeColor());
