let inputKZT = document.getElementById('tg'),
    inputUSD = document.getElementById('usd');

inputKZT.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function() {
        if (request.readyState == 4 && request.status == 200)
    })
})
