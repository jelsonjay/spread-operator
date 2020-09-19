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

fruts.push('Orange', 'Kiwi', 'Banana', 'Avacado', 'Mango');
drink.push('Coffee', 'Tea', 'Beer', 'Water', 'Cake', 'Lemonade', 'Iced tea');

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

foodList.push('Pizza', 'Fish', 'Bacon', 'Veggie pasta');

console.log(foodList);
