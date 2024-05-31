@extends('../pattern/mobail')

@section('title')
ambity
@endsection

@section('mainContent')
<section class="web-title d-flex flex-column align-items-center container">
    <div class="text">
        <h1>WEB-разработка</h1>
        <p>Создаем удобные и эффективные интернет-проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
    </div>
    <button class="btn-white" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
</section>

<section class="services container js-parallax-near headFollow">
    <div class="d-grid services-grid">
        <a href="/corpsite" class="services-el">
            <div class="services-el-name d-flex align-items-center txt-anim"><h3>Корпоративные сайты</h3><span>Корпоративные сайты</span></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
        </a>
        <a href="/inshop" class="services-el">
            <div class="services-el-name d-flex align-items-center txt-anim"><h3>Интернет-магазины</h3><span>Интернет-магазины</span></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
        </a>
        <a href="/personalacc" class="services-el">
            <div class="services-el-name d-flex align-items-center txt-anim"><h3>Личные кабинеты</h3><span>Личные кабинеты</span></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
        </a>
        <a href="/landings" class="services-el">
            <div class="services-el-name d-flex align-items-center txt-anim"><h3>Лендинги</h3><span>Лендинги</span></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
        </a>
        <a href="/highloadserv" class="services-el">
            <div class="services-el-name d-flex align-items-center txt-anim"><h3>Highload-сервисы</h3><span>Highload-сервисы</span></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
        </a>
        <a href="/techsup" class="services-el">
            <div class="services-el-name d-flex align-items-center txt-anim"><h3>Техническая поддержка</h3><span>Техническая поддержка</span></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
        </a>
    </div>

</section>

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

<section class="cases container">
    <h2 class="text-left">КЕЙСЫ</h2>
    <div class="cases-grid">
        <div class="cases-grid-el">
            <div style="background-image: url('/media/gedza.jpg')"></div>
            <h3>Ресторан доставки Gedza</h3>
            <p>Разработка интернет-магазина</p>
        </div>
        <div class="cases-grid-el">
            <div style="background-image: url('/media/bk.png') " class="dark-grad"></div>
            <h3>Бухта Кила</h3>
            <p>Разработка сайта загородного клуба “Бухта Кила”</p>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-center arrowandtext">
        <div class="d-flex align-items-start justify-content-start">
            <a class="arrowandtext-btn" href="/cases">Наши кейсы<img src="/assets/img/IconForward.svg"></a>
        </div>
    </div>
</section>

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

<script>
    if (!js_cart) var js_cart = {
        sid: '1cef0c243c7caaf1c72f224bbcaa5968',
        user: '0',
        ya_login: '543928',
        ya_password: 'live_1l9i_TuIhIfE_osn4YDxnbciuigvo4-OIGCbdKse7MU',
    };

    let ajax_cart = false;
</script>
@endsection