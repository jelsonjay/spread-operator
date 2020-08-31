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

fruts.push('Orange', 'Kiwi');
drink.push('Coffee', 'Tea');

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

foodList.push('Pizza', 'Fish', 'Bacon');

console.log(foodList);
