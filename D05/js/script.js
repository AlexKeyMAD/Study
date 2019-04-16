let _text = document.getElementById('title'),
    menu = document.getElementsByTagName('ul')[0],
    _but = document.getElementsByClassName("menu-item"),
    del = document.getElementsByClassName("adv"),
    promt = document.getElementById('prompt');

//1
let newBtn = document.createElement('li');
newBtn.classList.add('menu-item');
newBtn.textContent = 'Пятый пункт';
menu.appendChild(newBtn);

menu.insertBefore(_but[1],_but[3]);

//2
document.body.style.backgroundImage = "url('/img/apple_true.jpg')";
//3
_text.innerText = 'Мы продаем только подлинную технику Эпл!';
//4
if (del.length > 0)
 {
    del[0].parentElement.removeChild(del[0]);
};
//5
let textPrompt = '';

while (textPrompt == '' || textPrompt == null) 
{
    textPrompt = prompt('Опишите ваше отношение к техники Эпл', '');     
};

promt.innerText = textPrompt;
