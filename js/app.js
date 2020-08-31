'use strict';

let fruts = ['Banana', 'Avacado', 'Apple', 'Blackberry', 'Guava', 'Mango'];
let vegetables = [
	'Broccoli',
	'Bell pepper',
	'Tomato',
	'Cucumber',
	'Mushroom',
	'Carrot',
	'Onion'
];
let drink = ['Red Wine', 'Vodka', 'Health Drink', 'Fruits Drink'];
let foodList = [
	'Bread',
	'Spaghetti',
	'Chiken',
	'Beef',
	'Potato',
	...fruts,
	...vegetables,
	...drink
];

console.log(foodList);
