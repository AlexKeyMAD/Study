'use strict';
let money, time;

let appData = {
    Budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

function start() 
{
    money = +prompt('Ваш бюджет на месяц?',"");
    time = prompt('Введите дату в формате ГГГГ-ММ-ДД',""); 
    
    while (isNaN(money) || money == "" || money == null) 
    {
        money = +prompt('Ваш бюджет на месяц?',"");
        appData.Budjet = money;
    }    
}

function choseExpenses() 
{
    for (let i = 1; i < 3; i++)
    {
        let a = prompt('Обязательная статья расхода №' + i,""),
            b = prompt('Цена вопроса?',"");

        if (typeof(a) === 'string' && typeof(a) != null
            && typeof(b) != null && a != '' && b != '' && a.length < 50)
            {
                console.log('Выполнено');
                appData.expenses[a] = b;
            }
    }
}

function detectDayBudget() 
{
    appData.BudjetForDay = (appData.Budjet / 30).toFixed();

    alert('Ежедневный бюджет: ' + appData.BudjetForDay);        
}

function detectLevel() 
{
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
}

function checkSavengs()
{
    if (appData.saving == true)
     {
        let save = +prompt("Сумма накоплений:"),
            percent = +prompt("Процен депозита:");

        appData.monthIncore = save / 100 * percent / 12;

        alert("Ежемесячный доход: " + appData.monthIncore);
    }
}

function chooseOptExpenses()
{
    for (let i = 1; i < 4; i++)
         {
            let a = prompt('Необязательная статья расхода №' + i,""),
                b = prompt('Цена вопроса?',"");

            if (typeof(b) != null && a != '' && b != '')
            {
                console.log('Выполнено');
                appData.optionalExpenses[i] = b;
            }
        }
}

//Вызов функций
start();
choseExpenses();
detectDayBudget();
detectLevel();
checkSavengs();
chooseOptExpenses();
