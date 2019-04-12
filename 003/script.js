'use strict';

var money = +prompt('Ваш бюджет на месяц?',"");

var time = prompt('Введите дату в формате ГГГГ-ММ-ДД',"");

var appData = {
    Budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 1; i < 3; i++)
 {
    let a = prompt('Обязательная статья расхода №' + i,"");
        b = prompt('Цена вопроса?',"");

    if (typeof(a)) === 'string' && typeof(a) != null
        && typeof(b) != null && a != '' && b != '' && a.length < 50)
        {
            console.log('Выполнено');
            appData.expenses[a] = b;
        }
}

appData.BudjetForDay = appData.Budjet / 30;

alert('Ежедневный бюджет: ' + appData.BudjetForDay);

if (appData.BudjetForDay < 100) 
    {
        console.log("Минимальный уровень достатка.");
    }
else if (appData.BudjetForDay >= 100 && appData.BudjetForDay < 2000) 
    {
        console.log('Средний уровень достатка');
    }
else if (appData.BudjetForDay >= 2000)
     {
        console.log('Высокий уровень достатка');
    }
else
    {
        console.log('Произошла ошибка');
    }