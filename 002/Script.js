'use strict';

var money = prompt('Ваш бюджет на месяц?',"");

var time = prompt('Введите дату в формате ГГГГ-ММ-ДД',"");

var appData = {
    Budjet: money,
    timeData: time,
    expenses: {
        ans1: 
        [prompt('Обязательная статья расхода №1',""),
        prompt('Цена вопроса?',"")],
        ans2: 
        [prompt('Обязательная статья расхода №2',""),
        prompt('Цена вопроса?',"")]
    },
    optionalExpenses: {},
    income: [],
    saving: false
}

var BudjetDay = appData.Budjet / 30;

alert(BudjetDay);