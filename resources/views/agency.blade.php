@extends('desktop')

@section('title')
ambity
@endsection

@section('mainContent')
{{-- плавающий банер --}}
<section class="agency container headFollow">
    <div class="appearance_bottom d-flex align-items-center justify-content-center headFollow-item val-0 active overflow-visible">
        <h1 class="headText" style="transform: translateX(-45.6px) translateY(9.6px);">Агентство</h1>
    </div>
    <div class="appearance_bottom d-flex align-items-center justify-content-center active overflow-visible">
        <p class="agency-text">
            Команда Амбити 9 лет работает на digital-рынке. В основе всех проектов выступает комплексный подход.
            Мы решаем бизнес-задачи на всех этапах жизненного цикла проекта, от анализа рынка до масштабирования.
            Улучшаем не только продажи, но и другие стороны компаний:  HR-бренд, автоматизация бизнес-процессов компании, BI-аналитика и др.
        </p>
    </div>
</section>

{{-- цифры --}}
<section class="container">
    <div class="appearance_bottom information d-flex flex-row justify-content-between active overflow-visible">
        <h2 class="information-name text-uppercase">Цифры</h2>
        <div class="information-text d-grid justify-content-between" id="information-text">
            <text class="information-text-block"><span id="count1">200</span><b id="sign" style="display: inline;">+</b><br>реализованных проектов</text>
            <text class="information-text-block"><span id="count2">11</span><br>сотрудников в штате</text>
            <text class="information-text-block"><span id="count3">9</span><br>лет на рынке</text>
        </div>
    </div>
</section>

{{-- кейсы --}}
<section class="cases">
    <div class="cases-marquee"><div><p>Ресторан доставки Gedza</p><p>Ресторан доставки Gedza</p></div></div>
    <div class="container appScroll_bottom">
        <h2 class="text-start">КЕЙСЫ</h2>
    </div>
    <div class="container">
        <div class="cases-row d-flex align-items-start">
            <div class="cases-row-el d-flex align-items-center justify-content-center appScroll_bottom">
                <div class="h-100 w-100 cases-row-el_cont">
                    <div class="d-flex align-items-center justify-content-center" style="background-image: url('/media/gedza.jpg')" case="gedza">
                        <div class="d-flex align-items-center"><img src="/media/IconForward.svg"></div>
                    </div>
                    <h3>Ресторан доставки Gedza</h3>
                    <p>Разработка интернет-магазина</p>
                </div>
                <div class="h-100 w-100 cases-row-el_addition d-flex align-items-center justify-content-end" for-case="kila">
                    <div class="d-flex align-items-center">
                        <p>Разработка интернет-магазина</p>
                    </div>
                </div>
            </div>
            <div class="cases-row-el d-flex align-items-center justify-content-center appScroll_bottom">
                <div class="h-100 w-100 cases-row-el_cont">
                    <div class="d-flex align-items-center justify-content-center" style="background-image: url('/media/bk.png') " case="kila">
                        <div class="d-flex align-items-center"><img src="/media/IconForward.svg"></div>
                    </div>
                    <h3>Бухта Кила</h3>
                    <p>Разработка интернет-магазина</p>
                </div>
                <div class="h-100 w-100 cases-row-el_addition d-flex align-items-center justify-content-start" for-case="gedza">
                    <div class="d-flex align-items-center">
                        <p>Разработка интернет-магазина</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-center arrowandtext appScroll_bottom">
            <div class="d-flex align-items-start justify-content-start">
                <a class="arrowandtext-btn" href="/cases">Смотреть еще<img src="/media/IconForward.svg"></a>
            </div>
        </div>
    </div>
</section>

{{-- клиенты --}}
<section class="slider">
    <div class="container appScroll_bottom">
        <h2 class="text-start">Клиенты</h2>
    </div>
    <div class="slider-marquee">
        <div>
            <div class="slider_item" style="--target: -271.7375183105469px;"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
        </div>
        <div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
            <div class="slider_item"><img src="https://i.postimg.cc/X7cgW1Zr/img.png">
                <h2>Тренд</h2>
                <p>Ресторанная группа</p>
            </div>
        </div>
    </div>
</section>

{{-- принципы --}}
<section class="principles container">
    <div class="principles-head d-flex justify-content-between overflow-visible">
        <h2>Принципы</h2>
        <p>
            Мы выступаем стратегическим партнером для компаний,<br>
            готовых к изменениям, чтобы в будущем стать лидером<br>
            рынка. Обеспечиваем индивидуальный подход к каждой<br>
            задаче и придерживаемся своих принципов.
        </p>
    </div>
    <div class="principles-grid d-grid">
        <div class="principle">
            <div class="overflow-visible">
                <h3>MVP</h3>
            </div>
            <div class="overflow-visible">
                <p>Поэтапные релизы проекта в необходимые сроки с дальнейшим развитием проекта.</p>
            </div>
        </div>
        <div class="principle">
            <div class="overflow-visible">
                <h3>Time &amp; Materials</h3>
            </div>
            <div class="overflow-visible">
                <p>Гибкое планирование проекта с оплатой за потраченные часы и еженедельной отчетностью.</p>
            </div>
        </div>
        <div class="principle">
            <div class="overflow-visible">
                <h3>Performance</h3>
            </div>
            <div class="overflow-visible">
                <p>Решения основаны на исследованиях,  анализе ниши и ЦА, соответствуют бизнес-задачам и трендам.</p>
            </div>
        </div>
        <div class="principle">
            <div class="overflow-visible">
                <h3>Fix Price</h3>
            </div>
            <div class="overflow-visible">
                <p>Прогнозируемые сроки и стоимость проекта. При подсчете мы опираемся на прошлый опыт и декомпозицию проекта на небольшие подзадачи.</p>
            </div>
        </div>
    </div>
</section>

{{-- технологии --}}
<section class="technologies">
    <div class="technologies-head container d-flex justify-content-between appScroll_bottom">
        <h2>Технологии</h2>
        <p>Чтобы быть решать сложные задачи мы постояно<br>
            развиваемся и используем самые новые технологии</p>
    </div>
    <div class="technologies-grid container d-grid">
        <div class="technology appScroll_bottom">
            <h3>Backend</h3>
            <p>PHP, Laravel, 1С-Битрикс, RESS, 1Motion, MongoDB, PostgreSQL, Laravel, Symfony, Node.js, REST API</p>
            <hr>
        </div>
        <div class="technology appScroll_bottom">
            <h3>Frontend</h3>
            <p>HTML, CSS, SCSS, React.js+Redux.js, JavaScript, TypeScript, Webpack, Gulp, SCSS, SPA, Angular, Vue.js, REST API</p>
            <hr>
        </div>
        <div class="technology appScroll_bottom">
            <h3>Design</h3>
            <p>Figma, Photoshop, Illustrator, After Effect</p>
            <hr>
        </div>
        <div class="technology appScroll_bottom">
            <h3>Management</h3>
            <p>Git, Битрикс24, Planing Poker</p>
            <!--            <hr>-->
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', ()=>{
        [...document.querySelectorAll('.cases .cases-row')].forEach(item=>{
            [...item.querySelectorAll('.cases-row-el .cases-row-el_cont div')].forEach(divs=>{
                divs.onmouseenter=(e)=>{
                    if(item.querySelector('.cases-row-el:last-of-type .cases-row-el_cont div') === divs){
                        document.querySelector('.cases .cases-marquee').style.top='calc(55% - 156px)';
                    }else{
                        document.querySelector('.cases .cases-marquee').style.top=null;
                    }
                    [...document.querySelectorAll('.cases-row-el_addition')].forEach(addition=>{
                        addition.style.opacity='0';
                    })
                    document.querySelector(`[for-case="${divs.getAttribute('case')}"]`).style.opacity='1';
                    divs.onmousemove=(ev)=>{
                        let rect = divs.getBoundingClientRect();
                        divs.style.transform=`translate(${0.1*(ev.offsetX-Math.floor(rect.width)/2)}px , ${0.1*(Math.floor((rect.width)/2)/(Math.floor(rect.height)/2))*(ev.offsetY-Math.floor(rect.height)/2)}px)`;
                    }
                    [...e.currentTarget.parentNode.querySelectorAll('h3, p')].forEach(childs=>{
                        childs.style.opacity='0';
                    });
                    if(e.currentTarget===item.querySelector('.cases-row-el:first-of-type .cases-row-el_cont div')){
                        item.querySelector('.cases-row-el:last-of-type .cases-row-el_cont').classList.add('active');
                        item.querySelector('.cases-row-el:last-of-type .cases-row-el_addition').classList.add('active');
                        [...document.querySelectorAll('.cases .cases-marquee p')].forEach(text=>{
                            text.innerText=e.currentTarget.parentNode.querySelector('h3').innerText;
                        });
                        document.querySelector('.cases .cases-marquee div').style.setProperty('--target','-'+document.querySelector('.cases .cases-marquee div>p').getBoundingClientRect().width+'px');
                        document.querySelector('.cases .cases-marquee').style.opacity='1';
                    }
                    if(e.currentTarget===item.querySelector('.cases-row-el:last-of-type .cases-row-el_cont div')){
                        item.querySelector('.cases-row-el:first-of-type .cases-row-el_cont').classList.add('active');
                        item.querySelector('.cases-row-el:first-of-type .cases-row-el_addition').classList.add('active');
                        // document.querySelector('.cases .cases-marquee div').style.width=document.querySelector('.cases .cases-marquee').offsetWidth+'px';
                        [...document.querySelectorAll('.cases .cases-marquee p')].forEach(text=>{
                            text.innerText=e.currentTarget.parentNode.querySelector('h3').innerText;
                        });
                        document.querySelector('.cases .cases-marquee div').style.setProperty('--target','-'+document.querySelector('.cases .cases-marquee div>p').getBoundingClientRect().width+'px');

                      //  document.querySelector('.slider .slider-marquee div').style.setProperty('--target','-'+document.querySelector('.slider .slider-marquee div>.slider_item').getBoundingClientRect().width+'px');

                        document.querySelector('.cases .cases-marquee').style.opacity='1';
                    }
                }
                divs.onmouseleave=(e)=>{
                    divs.onmousemove=false;
                    divs.style.transform='translate(0, 0)';
                    [...document.querySelectorAll('.cases-row-el_addition')].forEach(addition=>{
                        addition.style.opacity='0';
                    });
                    [...e.currentTarget.parentNode.querySelectorAll('h3, p')].forEach(childs=>{
                        childs.style.opacity='1';
                    });
                    if(e.currentTarget===item.querySelector('.cases-row-el:first-of-type .cases-row-el_cont div')){
                        item.querySelector('.cases-row-el:last-of-type .cases-row-el_cont').classList.remove('active');
                        item.querySelector('.cases-row-el:last-of-type .cases-row-el_addition').classList.remove('active');
                    }
                    if(e.currentTarget===item.querySelector('.cases-row-el:last-of-type .cases-row-el_cont div')){
                        item.querySelector('.cases-row-el:first-of-type .cases-row-el_cont').classList.remove('active');
                        item.querySelector('.cases-row-el:first-of-type .cases-row-el_addition').classList.remove('active');
                    }
                    document.querySelector('.cases .cases-marquee').style.opacity='0';
                }
            })
        })
    })
</script>
<script>
    //подсчет
    const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
        const target = document.querySelector(qSelector);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            target.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    //задержка
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // функция определяет нахождение элемента в области видимости
    // если элемент видно - возвращает true
    // если элемент невидно - возвращает false
    function isOnVisibleSpace(element) {
        let windowHeight = window.innerHeight;
        let elemRect = element.getBoundingClientRect();
        let offset   = elemRect.top;// - bodyRect.top;
        if ((offset<0) || (offset>windowHeight) )
        {
            return false;
        }
        else
        {
            return true;
        }

    }
    // глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
    var listenedElements = [];
    // обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements
    // на предмет попадания в зону видимости
    window.onscroll = function() {
        listenedElements.forEach(item=>{
            // если элемент находился вне зоны видимости и вошел в нее
            // вызываем обработчик попадания в зону видимости
            if(!item.el.isOnVisibleSpace && isOnVisibleSpace(item.el))
            {
                item.el.isOnVisibleSpace = true;
                item.inVisibleSpace(item.el);
                return;
            }
        });
    }

    // функция устанавливает обработчики событий
    // появления элемента в зоне видимости и
    // выхода из нее
    function onVisibleSpaceListener(element, cbIn) {
        // получаем ссылку на объект элемента
        let el = document.querySelector(element);
        // добавляем элемент и обработчики событий
        // в массив отслеживаемых элементов
        listenedElements.push({
            el: el,
            inVisibleSpace: cbIn
        });
    }
    // функция запуска анимации(подсчета)
    function count(ms) {
        counterAnim("#count1", 0, 200, ms);
        delay(ms + 100).then(() => {
            document.querySelector("#sign").style.display = 'inline';
        });
        counterAnim("#count2", 0, 11, ms);
        counterAnim("#count3", 0, 9, ms);
    }
    document.addEventListener("DOMContentLoaded", () => {
        if (isOnVisibleSpace(document.querySelector('.information')) === true) {count(1000);}
        else {onVisibleSpaceListener('.information', el => {count(1000);})}
    });


</script>
@endsection