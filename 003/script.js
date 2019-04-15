'use strict';
let money, time;

let appData = {
    Budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    choseExpenses: function() 
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

        },
    detectDayBudget: function()
        {
            appData.BudjetForDay = (appData.Budjet / 30).toFixed();
            alert('Ежедневный бюджет: ' + appData.BudjetForDay);
        },
    detectLevel: function()
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
        },
    checkSavengs: function()
         {
            if (appData.saving == true)
                {
                    let save = +prompt("Сумма накоплений:"),
                        percent = +prompt("Процен депозита:");

                    appData.monthIncore = save / 100 * percent / 12;
                    alert("Ежемесячный доход: " + appData.monthIncore);
                }
        },
    chooseOptExpenses: function()
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
        },
    chooseInvome: function()
        {
            let item = prompt("Перечислите через запятую всё, что принесет доход", "");
            
            appData.income = item.split(", ");
            let dopAns = '',
                temp = false;

            while (temp == false) 
            {
                dopAns = prompt("Ещё что нибудь?", "");
                
                if (typeof(dopAns) === 'string' && typeof(dopAns) != null && dopAns != '')
                 {
                    temp = true;
                    appData.income.push(dopAns);
                }    
            }
            
            appData.income.sort();

            console.log("Способы доп заработка:");

            appData.income.forEach(function(key, i)
                {
                    console.log((++i) + ": " + key);
                });

        }
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
    
    for (let k_ in appData) 
    {
        console.log(k_);
    }

}

//Вызов функций
start();
