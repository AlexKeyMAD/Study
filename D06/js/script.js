let btStart = document.getElementById('start');

let budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    buoptionalexpensesdget = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0];

let expenses_item = document.getElementsByClassName('expenses-item');

let buttons = document.getElementsByTagName('button');

let optionalexpenses_item = document.querySelectorAll('optionalexpenses-item');

let choose_income = document.querySelector('.choose-income'),
    checksavings = document.querySelector('.checksavings'),
    choose_sum = document.querySelector('.choose-sum'),
    choose_percent = document.querySelector('.choose-percent'),
    checkSavings = document.querySelector('#savings'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

let appData = {
    Budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    choseExpenses: {} 
        ,
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

btStart.addEventListener('click', function()
{
    time = prompt('Введите дату в формате ГГГГ-ММ-ДД',""); 
    money = +prompt('Ваш бюджет на месяц?',"");
   
    while (isNaN(money) || money == "" || money == null) 
    {
        money = +prompt('Ваш бюджет на месяц?',""); 
    } 
    appData.Budjet = money;
    appData.timeData = time;

    budget.textContent = money.toFixed();

    let ourDate = new Date(Date.parse(time));

    year.value = ourDate.getFullYear();
    month.value = ourDate.getMonth() + 1;
    day.value = ourDate.getDate();


});

buttons[0].addEventListener('click', function() 
{
    let sum = 0;
    
    for (let i = 0; i < expenses_item.length / 2; i++)
    {
        let a = expenses_item[i*2].value,
            b = expenses_item[i*2+1].value;

            if (typeof(a) === 'string' && typeof(a) != null
                && typeof(b) != null && a != '' && b != '' && a.length < 50)
                {
                    sum += +b;
                    appData.expenses[a] = b;
                }
        }

    expenses.textContent = sum;
    
});