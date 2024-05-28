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
@endsection