'use strict';

let age = document.getElementById('age');

function showUser(surname, name)
 {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.call(age, 'Big', 'Alex');