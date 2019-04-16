let _text = document.getElementById('title'),
    menu = document.getElementsByClassName('menu'),
    _but = document.querySelector(".menu-item"),
    del = document.getElementsByClassName("adv"),
    promt = document.getElementById('prompt');

//1
//let newBtn = _but.CloneNode();
//newBtn.classList.add('menu-item');
//newBtn.

//document.body.appendChild(newBtn);

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
