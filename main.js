// 1. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const currentDay = new Date().getDay();
// console.log(currentDay);
let currentDayWord = "";

switch (currentDay) {
	case 0:
		currentDayWord = "კვირა";
		// console.log("კვირა");
		break;
	case 1:
		currentDayWord = "ორშაბათი";
		// console.log("ორშაბათი");
		break;
	case 2:
		currentDayWord = "სამშაბათი";
		// console.log("სამშაბათი");
		break;
	case 3:
		currentDayWord = "ოთხშაბათი";
		// console.log("ოთხშაბათი");
		break;
	case 4:
		currentDayWord = "ხუთშაბათი";
		// console.log("ხუთშაბათი");
		break;
	case 5:
		currentDayWord = "პარასკევი";
		// console.log("პარასკევი");
		break;
	case 6:
		currentDayWord = "შაბათი";
		// console.log("შაბათი");
		break;

	default:
		break;
}

// console.log(currentDayWord);

// 2. დაწერეთ for ციკლი, 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 100; i++) {
	// console.log(i, "for");
}

// 3. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
let i = 0;
while (i < 50) {
	// console.log(i, "while");
	i++;
}

// 4. დაწერეთ do while ციკლი 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i
// console.log(i);
i = 0;

do {
	// console.log(i, "do while");
	i++;
} while (i < 150);

// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 1000 - მდე ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i); გამოიყენეთ  push მეთოდი

let myArr = [];
for (let i = 0; i < 1000; i++) {
	myArr.push(i * i);
}

// console.log(myArr);

// const x = 10;

// if (true) {
// 	if (true) {
// 		const x = 100;
// 		console.log(x);
// 	}
// 	if (true) {
// 		console.log(x);
// 	}
// }
// console.log(x);

function writeText() {
	console.log("write text function");
}

// writeText();
// writeText();
// writeText();
// writeText();
// writeText();

function writeTextPar(text) {
	if (typeof text === "string") {
		console.log(text);
	} else {
		console.log("please enter text");
	}
}

writeTextPar("example text");
writeTextPar(7777);
// writeUserInfo("nino", 25);

function writeUserInfo(name, age) {
	console.log(`user info: user age - ${age}, user name - ${name}`);
}

let name1 = "gio";
let age1 = 20;

// writeUserInfo(age1, name1);

const writeUserInfoConst = function (name, age) {
	console.log(`user info: user age - ${age}, user name - ${name}`);
};

writeUserInfoConst(name1, age1);

// arrow function

const writeUserInfoArrow = (name, age) => {
	let userInfoText = `user info: user age - ${age}, user name - ${name}`;

	return userInfoText;
};

writeUserInfoArrow(name1, age1);

let returnedVal = writeUserInfoArrow(name1, age1);

let returnedVal2 = writeUserInfoArrow(name1, 34);

// console.log(returnedVal, "====", returnedVal2);

let arrNum1 = [10, 20, 30, 40];
let arr2 = [1, 2, 3, 4, 5];

function arrSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		// sum = sum + arr[i];
	}
	// console.log(sum);
	return sum;
}

let arr1Sum = arrSum(arrNum1);

console.log(arrSum([1, 20, 30, 40]));

console.log(arr1Sum);

let currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "7.9164",
		diffFormated: "0.0561",
		rate: 7.9164,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0561,
		date: "2022-07-01T17:45:06.074Z",
		validFromDate: "2022-07-02T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "7.1618",
		diffFormated: "0.0352",
		rate: 7.1618,
		name: "სომხური დრამი",
		diff: -0.0352,
		date: "2022-07-01T17:45:06.074Z",
		validFromDate: "2022-07-02T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.9077",
		diffFormated: "0.0206",
		rate: 2.9077,
		name: "აშშ დოლარი",
		diff: -0.0206,
		date: "2022-07-01T17:45:06.074Z",
		validFromDate: "2022-07-02T00:00:00.000Z",
	},
];

currencies.forEach((e, index) => {
	// e.id = index;
	console.log(e.name, e.rate);
});

console.log(currencies);

// returns array
const filteredArr = currencies.filter((currency) => {
	return currency.rate > 5;
});

let arr3 = [100, 200, 300];
const filteredArr3 = arr3.filter((el) => {
	return el % 3 === 0;
});

console.log(filteredArr3);
console.log(filteredArr);

// returns first
const firstCurr = currencies.find((currency) => {
	return currency.rate < 5;
});

console.log(firstCurr);

const mappedArr = currencies.map((el) => {
	return { name: el.name, rate: el.rate };
});

console.log(mappedArr);

// returns boolean
const someArr = currencies.some((el) => {
	return el.rate > 10;
});

const everyArr = currencies.every((el) => {
	return el.rate < 10;
});
console.log(someArr, "some", everyArr, "every", currencies);

let arrOfColors = ["green", "blue", "red", "yelow"];

let color = "green";

// console.log(arrOfColors.includes(color));
if (arrOfColors.includes(color)) {
	console.log("true");
}

let harryPotterCharacters = [
	{
		name: "Harry Potter",
		alternate_names: [],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		dateOfBirth: "31-07-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "half-blood",
		eyeColour: "green",
		hairColour: "black",
		wand: {
			wood: "holly",
			core: "phoenix feather",
			length: 11,
		},
		patronus: "stag",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Daniel Radcliffe",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
	},
	{
		name: "Hermione Granger",
		alternate_names: [],
		species: "human",
		gender: "female",
		house: "Gryffindor",
		dateOfBirth: "19-09-1979",
		yearOfBirth: 1979,
		wizard: true,
		ancestry: "muggleborn",
		eyeColour: "brown",
		hairColour: "brown",
		wand: {
			wood: "vine",
			core: "dragon heartstring",
			length: "",
		},
		patronus: "otter",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Emma Watson",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
	},
	{
		name: "Ron Weasley",
		alternate_names: ["Dragomir Despard"],
		species: "human",
		gender: "male",
		house: "Gryffindor",
		dateOfBirth: "01-03-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "pure-blood",
		eyeColour: "blue",
		hairColour: "red",
		wand: {
			wood: "willow",
			core: "unicorn tail-hair",
			length: 14,
		},
		patronus: "Jack Russell terrier",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Rupert Grint",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
	},
	{
		name: "Draco Malfoy",
		alternate_names: [],
		species: "human",
		gender: "male",
		house: "Slytherin",
		dateOfBirth: "05-06-1980",
		yearOfBirth: 1980,
		wizard: true,
		ancestry: "pure-blood",
		eyeColour: "grey",
		hairColour: "blonde",
		wand: {
			wood: "hawthorn",
			core: "unicorn tail-hair",
			length: 10,
		},
		patronus: "",
		hogwartsStudent: true,
		hogwartsStaff: false,
		actor: "Tom Felton",
		alternate_actors: [],
		alive: true,
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
	},
];
