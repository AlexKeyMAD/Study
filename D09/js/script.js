window.addEventListener('DOMContentLoaded',function()
 {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a)
    {
        for (let i = a; i < tabContent.length; i++) 
        {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            
        }
    };
    
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide'))
         {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
        
    };

    info.addEventListener('click', function(event)
    {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab'))
         {
            for (let i = 0; i < tab.length; i++)
            {
                if (target == tab[i])
                {
                    hideTabContent(0);
                    showTabContent(i);

                    break;
                };
            };            
        }
    });

    //Timer

    let deadline = '2019-05-05';
    
    function getTimeRemaining(endTime) 
    {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours   = Math.floor((t / 1000 / 60 / 60)); 
            
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endTime) 
    {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock()
         {
            let t = getTimeRemaining(endTime);
            
            hours.textContent = String(t.hours).padStart(2,'00');
            minutes.textContent = String(t.minutes).padStart(2,'00');
            seconds.textContent = String(t.seconds).padStart(2,'00');
         
            if (t.total <= 0 ) 
            {
                clearInterval(timeInterval);  
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
      
            }
        }
            
    }

    setClock('timer', deadline);

    //Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(event)
    {
        openInfo.call(this);
    });

    close.addEventListener('click', function()
    {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let btn_inf = document.getElementsByClassName('description-btn');

    for (let i = 0; i < btn_inf.length; i++) 
    {
        let _btn_inf = btn_inf[i];
        _btn_inf.addEventListener('click', function()
        {
            openInfo.call(this);
        });       
    };

    function openInfo()
     {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';       
    }

    class Options {
        constructor(height,width,bg,fontSize,textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }
        
        NewTextDiv() {
            let newDiv = document.createElement("text_div");
                document.body.appendChild(newDiv);
                newDiv.style.height = this.height;
                newDiv.style.width = this.width;
                newDiv.style.bg = this.bg;
                newDiv.style.fontSize = this.fontSize;
                newDiv.textContent = this.textAlign;
        }
    }

    let div_ = new Options(10,10,10,"20px",'ttttttt');
    div_.NewTextDiv();

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо за обращение! Мы скоро с вами свяжемся',
        failure: 'Ошибка обработки'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function() {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-from-urlencoded');
        //request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        //request.send(formData);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
                //resolve();
            } else if (request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
                //resolve();
            } else {
                statusMessage.innerHTML = message.failure;
                //reject();
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        
    });

    //slider

    let sliderIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(sliderIndex);

    function showSlides(n) {

        if (n > slides.length) {
            sliderIndex = 1;
        }

        if (n < 1) {
            sliderIndex = slides.length;
        }
        
        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');

    }

    function plusSlide(n) {
        showSlides(sliderIndex += n);
    }
    
    function currentSlide(n) {
        showSlides(sliderIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
    });

    next.addEventListener('click', function() {
        plusSlide(1);
    });
    
    dotsWrap.addEventListener('click', function(event) {
        
        for (let i = 0; i < dots.length + 1; i++) {
            
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                
                currentSlide(i);

            }
            
        }

    });

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        //place = document.getElementById('select'),
        place = $('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function() {
            
            personsSum = +this.value;
            total = (daysSum * personsSum) * 4000;

            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }

        });
        
        restDays.addEventListener('change', function() {
            
            daysSum = +this.value;
            total = (daysSum * personsSum) * 4000;

            if (personsSum.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }

        });
        
        place[0].addEventListener('change', function() {
            
            if (personsSum.value == '' || restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }

        });
});