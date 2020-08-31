'use strict';

let fruts = ['Banana', 'Avacado', 'Apple', 'Blackberry', 'Guava', 'Mango'];
let vegetables = [
	'Broccoli',
	'Bell pepper',
	'Tomato',
	'Cucumber',
	'Mushroom',
	'Carrot'
];
let drink = ['Red Wine', 'Vodka', 'Health Drink', 'Fruits Drink'];
let foodList = ['Bread', 'Beef', 'Potato', ...fruts, ...vegetables, ...drink];

console.log(foodList);
