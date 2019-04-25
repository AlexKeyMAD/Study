let btStart = document.getElementById('start');

let budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0];

let expenses_item = document.getElementsByClassName('expenses-item');

let buttons = document.getElementsByTagName('button');

let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

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
    optionalExpenses: [],
    income: [],
    saving: false
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

buttons[1].addEventListener('click', function()
{
    for (let i = 0; i < optionalexpenses_item.length; i++)
    {
        let b = optionalexpenses_item[i].value;

            appData.optionalExpenses[i] = b;
            optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

buttons[2].addEventListener('click',function()
{
    if (appData.Budjet != undefined) 
    {
        appData.BudjetForDay = (appData.Budjet / 30).toFixed();
        daybudget.textContent = appData.BudjetForDay;
        //
        let _text = '';

        if (appData.BudjetForDay < 100) 
            {
                _text = "Минимальный уровень достатка.";
            }
        else if (appData.BudjetForDay >= 100 && appData.BudjetForDay < 2000) 
            {
                _text = 'Средний уровень достатка';
            }
        else if (appData.BudjetForDay >= 2000)
            {
                _text = 'Высокий уровень достатка';
            }
        else
            {
                _text = 'Произошла ошибка';
            }
        level.textContent = _text;
    }
    else
    {
        daybudget.textContent = 'Произошла ошибка';        
    }    
});

choose_income.addEventListener('input',function()
{
    let inc = choose_income.value;
    income.textContent = inc;
    appData.income = inc.split(', ');
});

checkSavings.addEventListener('click', function()
{
    if (appData.saving == true)
     {
        appData.saving = false;
    }
    else
    {
        appData.saving = true;
    }
});

choose_sum.addEventListener('click', function()
{
    if (appData.saving == true)
    {
        let sum = +choose_sum.value,
            per = +choose_percent.value; 

        appData.monthIncore = sum / 100 * per / 12;
        monthsavings.textContent = appData.monthIncore.toFixed(1);

        appData.yearIncore = sum / 100 * per;
        yearsavings.textContent = appData.yearIncore.toFixed(1);
    }
});

choose_percent.addEventListener('click', function()
{
    if (appData.saving == true)
    {
        let sum = +choose_sum.value,
            per = +choose_percent.value; 

        appData.monthIncore = sum / 100 * per / 12;
        monthsavings.textContent = appData.monthIncore.toFixed(1);

        appData.yearIncore = sum / 100 * per;
        yearsavings.textContent = appData.yearIncore.toFixed(1);
    }
});
