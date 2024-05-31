@extends('/pattern/mobail')

@section('title')
ambity
@endsection

@section('mainContent')
{{-- банер --}}
<section class="container">
    <div class="page d-flex flex-column justify-content-center align-items-center">
        <div class="appearance_bottom">
            <h1 class="page-name">Агентство</h1>
        </div>
        <div class="appearance_bottom">
            <p class="page-text">
                Команда Амбити 9 лет работает на digital-рынке. В основе всех проектов выступает комплексный подход.
                Мы решаем бизнес-задачи на всех этапах жизненного цикла проекта, от анализа рынка до масштабирования.
                Улучшаем не только продажи, но и другие стороны компаний:  HR-бренд, автоматизация бизнес-процессов компании, BI-аналитика и др.
            </p>
        </div>
    </div>
    <div class="appearance_bottom information d-flex flex-column justify-content-between ">
        <h2 class="information-name">ЦИФРЫ</h2>
        <div class="information-text d-grid justify-content-start">
            <text class="information-text-block"><span id="count1">200</span><b id="sign">+</b><br>реализованных проектов</text>
            <text class="information-text-block"><span id="count2">11</span><br>сотрудников в штате</text>
            <text class="information-text-block"><span id="count3">9</span><br>лет на рынке</text>
        </div>
    </div>
</section>

{{-- клиенты --}}
<section class="clients">
    <div class="appearance_bottom container">
        <h2 class="">Клиенты</h2>
    </div>
    <div class="slider">
        <div class="slider-marquee">
            <div>
                <div>
                    @foreach ($client as $el)
                        <div class="slider_item"><img src="{{$el->image}}">
                            <h2>{{$el->name}}</h2>
                            <p>{{$el->requirements}}</p>
                        </div>
                    @endforeach
                </div>
                <div>
                    @foreach ($client as $el)
                        <div class="slider_item"><img src="{{$el->image}}">
                            <h2>{{$el->name}}</h2>
                            <p>{{$el->requirements}}</p>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

{{-- принципы --}}
<section class="principles container">
    <div class="principles-head">
        <h2>Принципы</h2>
        <p>
            Мы выступаем стратегическим партнером для компаний,
            готовых к изменениям, чтобы в будущем стать лидером
            рынка. Обеспечиваем индивидуальный подход к каждой
            задаче и придерживаемся своих принципов.
        </p>
    </div>
    <div class="principles-grid d-grid">
        <div class="principles-grid-el">
            <h3>MVP</h3>
            <p>Поэтапные релизы проекта в необходимые сроки с дальнейшим развитием проекта.</p>
        </div>
        <div class="principles-grid-el">
            <h3>Time &amp; Materials</h3>
            <p>Гибкое планирование проекта с оплатой за потраченные часы и еженедельной отчетностью.</p>
        </div>
        <div class="principles-grid-el">
            <h3>Performance</h3>
            <p>Решения основаны на исследованиях,  анализе ниши и ЦА, соответствуют бизнес-задачам и трендам.</p>
        </div>
        <div class="principles-grid-el">
            <h3>Fix Price</h3>
            <p>Прогнозируемые сроки и стоимость проекта. При подсчете мы опираемся на прошлый опыт и декомпозицию проекта на небольшие подзадачи.</p>
        </div>
    </div>
</section>

{{-- техналогии --}}
<section class="technologies container">
    <div class="technologies-head d-flex flex-column justify-content-between">
        <h2>Технологии</h2>
        <p>Чтобы быть решать сложные задачи мы постояно<br>
            развиваемся и используем самые новые технологии</p>
    </div>
    <div class="technologies-grid d-grid">
        <div class="technologies-grid-el">
            <h3>Backend</h3>
            <p>PHP, Laravel, 1С-Битрикс, RESS, 1Motion, MongoDB, PostgreSQL, Laravel, Symfony, Node.js, REST API</p>
            <hr>
        </div>
        <div class="technologies-grid-el">
            <h3>Frontend</h3>
            <p>HTML, CSS, SCSS, React.js+Redux.js, JavaScript, TypeScript, Webpack, Gulp, SCSS, SPA, Angular, Vue.js, REST API</p>
            <hr>
        </div>
        <div class="technologies-grid-el">
            <h3>Design</h3>
            <p>Figma, Photoshop, Illustrator, After Effect</p>
            <hr>
        </div>
        <div class="technologies-grid-el">
            <h3>Management</h3>
            <p>Git, Битрикс24, Planing Poker</p>
            <hr>
        </div>
    </div>
</section>
@endsection