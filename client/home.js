'use strict';

import welcome from './welcome';

let users = [
	{id: '123', name: 'jame'},
	{id: '345', name: 'peter'}
];

console.log(pluck(users, 'name'));

welcome('home');

exports.welcome = welcome;

