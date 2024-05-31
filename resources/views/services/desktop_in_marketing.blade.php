@extends('../pattern/desktop')

@section('title')
ambity
@endsection

@section('mainContent')
<section class="main-title d-flex align-items-center justify-content-between container">
    <div class="text col-7">
        <h1>Интернет-маркетинг</h1>
        <p>WEB-разработка. Интернет-маркетинг. Интеграции и чат-боты.
            Корпоративные системы. Брендинг. Дизайн. Продакшн.
            Мобильные приложения. Аналитика. Поддержка.</p>
        <div class="d-flex align-items-center arrowandtext"><button class="btn-white" onclick="document.querySelector('.h-popup-overlay.c-side-nav').style.display='flex';">Обсудить проект</button><a class="arrowandtext-btn">Наши кейсы<img src="/media/IconForward.svg"></a></div></div>
    </div>
    <div class="video col-5">
        <div></div>
    </div>
    <div class="mouseWrap d-flex align-items-center justify-content-center" onclick="window.scrollTo({top: document.querySelector('.main-title').offsetHeight,behavior: 'smooth'})"><div class="mouse"><div class="mouse-scroll"></div></div></div>
</section>
<section class="services container">
    <h2 class="text-left">МЫ ДЕЛАЕМ:</h2>
    <div class="d-grid services-grid">
        <a href="/services/web" class="services-el">
            <div class="d-flex align-items-center"><h3>WEB-разработка </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии.</p>
            <p class="services-el-props">Корпоративные сайты, Интернет-магазины, Личные кабинеты, Лендинги, Промо-сайты, Highload-сервисы</p>
        </a>
        <a href="/services/in_marketing" class="services-el">
            <div class="d-flex align-items-center"><h3>Интернет-маркетинг </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Анализируем бизнес клиента, разрабатываем стратегию
                и подбираем каналы продвижения бренда исходя из целей и задач. Анализируем результат на каждом этапе воронки.</p>
            <p class="services-el-props">Стратегия, Контекстная реклама, Таргетированная реклама, SMM, SEO, Рассылки,
                Управление репутацией(SERM), Маркетплейсы, Контент-Маркетинг, Ретаргетинг</p>
        </a>
        <a href="/services/integration-bots" class="services-el">
            <div class="d-flex align-items-center"><h3>Интеграции и чат-боты </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Автоматизируем бизнес-процессы, общение в мессенджерах и организуем синхронизацию данных между системами клиента.</p>
            <p class="services-el-props">Интернет-эквайринг, Чат-боты, Веб-сервисы, Синхронизация с сервисами, Интеграция с CRM-системами, API, IIKO, FrontPad, 1C</p>
        </a>
        <a href="/services/corp_systems" class="services-el">
            <div class="d-flex align-items-center"><h3>Корпоративные системы </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Проводим анализ бизнес-процессов и оптимизируем. Повышаем эффективность. Сокращаем затраты всех ресурсов компании через автоматизацию бизнес-процессов и внедрение CRM, ERP и BI-систем.</p>
            <p class="services-el-props">Внедрение CRM, ERP и BI-систем, Настройка IP-телефонии, Корпоративные порталы
                Битрикс24, AmoCRM, PlanIN</p>
        </a>
        <a href="/services/branding" class="services-el">
            <div class="d-flex align-items-center"><h3>Брендинг </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Разрабатываем платформу бренду, его название и позиционирование. Формируем маркетинговую концепцию и создаем подчеркивающий фирменный стиль</p>
            <p class="services-el-props">Бренд-платформа, Нейминг, Фирменный стиль, Брендинг работодателя, Разработка логотипа</p>
        </a>
        <a href="/services/design" class="services-el">
            <div class="d-flex align-items-center"><h3>Дизайн </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Упрощаем восприятие технически сложных проектов через эмоции и эстетику. Выстаиваем единую дизайн-систему для лучшего восприятия бренда</p>
            <p class="services-el-props">Интерфейсы, Фирменный стиль, Интерактивные презентации, Разработка дизайна печатной продукции и сувенирных материалов, Инфографика</p>
        </a>
        <a href="/services/support" class="services-el">
            <div class="d-flex align-items-center"><h3>Поддержка </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Комплексная поддержка и развитие проектов, обеспечение бесперебойной работы. Регламентированная поддержка/мониторинг проектов с SLA, реакция 15 минут.</p>
            <p class="services-el-props">Техническая поддержка, Актуализация контента, Контентная поддержка, Обеспечение безопасности и работоспособности проекта, Оптимизация производительности</p>
        </a>
        <a href="/services/mobile" class="services-el">
            <div class="d-flex align-items-center"><h3>Мобильные приложения </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Разрабатываем нативные и удобные мобильные приложения
                для решения конкретных бизнес-задач любой сложности, используя современные технологии с интеграцией с любыми системами.</p>
            <p class="services-el-props">iOS-приложения, Android-приложения, Личные кабинеты, Интернет-магазины, Корпоративные приложения, Highload-сервисы</p>
        </a>
        <a href="/services/production" class="services-el">
            <div class="d-flex align-items-center"><h3>Продакшн </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Разрабатываем общую стратегию и творческие концепции для различных целей компании, продуманные креативы, которые решают задачи клиента. Визуализация продукта.</p>
            <p class="services-el-props">Фото-продакшн, Видео-продакшн, 3D-визуализация, Анимация, Фильмы</p>
        </a>
        <a href="/services/analytics" class="services-el">
            <div class="d-flex align-items-center"><h3>Аналитика </h3> <img src="/media/IconForward.svg"></div>
            <p class="services-el-desc">Анализуруем бизнес-процессы, целевую аудиторию и каналы продвижения. Проверяем гипотезы на фокус-группах. Переводим в цифры все процессы компании и анализируем их.</p>
            <p class="services-el-props">Предпроектный анализ,  Юзабилити-аудит, SEO-аудит, Аудит рекламных кампаний, Коллтрекинг и сквозная аналитика, Анализ бизнес-процессов, Разработка технической документации, Сквозная аналитика</p>
        </a>
    </div>
</section>
<section class="cases container">
    <h2 class="text-left">КЕЙСЫ</h2>
    <div class="cases-grid">
        <div class="cases-grid-el">
            <div style="background-image: url('/media/kc.jpg')">
                <h3>Кирпичный Центр</h3>
                <p>Разработка интернет-магазина</p>
            </div>
        </div>
        <div class="cases-grid-el">
            <div style="background-image: url('/media/bk.png') " class="dark-grad">
                <h3 style="color: #fff">Бухта Кила</h3>
                <p style="color: #fff">Разработка сайта загородного клуба “Бухта Кила”</p>
            </div>
        </div>
        <div class="cases-grid-el">
            <div style="background-image: url('/media/kc.jpg')">
                <h3>Кирпичный Центр</h3>
                <p>Разработка интернет-магазина</p>
            </div>
        </div>
        <div class="cases-grid-el">
            <div style="background-image: url('/media/bk.png')" class="dark-grad">
                <h3 style="color: #fff">Бухта Кила</h3>
                <p style="color: #fff">Разработка сайта загородного клуба “Бухта Кила”</p>
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-center arrowandtext">
        <div class="d-flex align-items-start justify-content-start">
            <a class="arrowandtext-btn" href="/cases">Наши кейсы<img src="/media/IconForward.svg"></a>
        </div>
    </div>
</section>
<script>
    /*document.querySelector('.examples-circle').innerHTML = "СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС".split('')
        .map((e,i) => `<span style="--rot:${i*5.143}deg">${e}</span>`).join('');*/

    document.querySelectorAll('.examples-circle span').forEach(function (item, i){
        item.style=`--rot:${(i)*5.143}deg`;
    });
</script>
<script>
    document.addEventListener('DOMContentLoaded', ()=>{
        let cards = document.querySelectorAll('.examples-card');
        let photos = document.querySelectorAll('.examples-card-cont');
        let showcase = document.querySelector('.examples-circle');
        let hov = document.querySelectorAll('.examples-card-hov');
        let circ = document.querySelectorAll('.examples-card-cont-circ');
        let texts = document.querySelectorAll('.examples-card-texts');
        let heights = [1.047, 0.663, 0.640, 1.047]
        function hovloc(){
            hov.forEach(function (item, i){
                /*item.style.height = cards[i].getBoundingClientRect().height - 43.5 + 'px';*/
                item.style.height = texts[i].getBoundingClientRect().height + 20 + photos[i].getBoundingClientRect().width*heights[i] - 43.5 + 'px';
                if(i == 0 || i == 1){
                    item.style.left = cards[i].getBoundingClientRect().width + 50 + 'px';
                }
                else{
                    item.style.right = cards[i].getBoundingClientRect().width + 50 + 'px';
                }
            });
            circ.forEach(function (item, i){
                item.style.top = photos[i].getBoundingClientRect().width*heights[i]/2 - 60 + 'px';
                item.style.left = photos[i].getBoundingClientRect().width/2 - 60 + 'px';
            });
        }
        function mouse(){
            cards.forEach(function (item, i){
                item.addEventListener('mouseover', ()=>{
                    hov[i].style.opacity='1';
                    showcase.style.top = item.offsetTop + (texts[i].getBoundingClientRect().height + 20 + photos[i].getBoundingClientRect().width*heights[i])/2 - 250 - 43.5 /*showcase.getBoundingClientRect().height/2*/ + 'px';
                    if(i == 0 || i == 1){
                        showcase.style.left = window.innerWidth - 250 /*showcase.getBoundingClientRect().height/2*/ + 'px';
                    }
                    else{
                        showcase.style.left = - 250 /*showcase.getBoundingClientRect().height/2*/ + 'px';
                    }
                    cards.forEach(function (j){
                        if(j !== item){
                            j.style.opacity='0';
                            j.style.transform='scale(0.7)';
                            showcase.style.opacity='1'
                        }
                    });
                });
                item.addEventListener('mouseleave', ()=>{
                    cards.forEach(function (j){
                        j.style.opacity='1';
                        j.style.transform='scale(1)';
                        showcase.style.opacity='0';
                        hov[i].style.opacity='0';
                    });
                });
            });
        }
        hovloc();
        mouse();
        window.addEventListener('resize', ()=>{
            hovloc();
            mouse();

        });

        [...document.querySelectorAll('.examples-card-photo')].forEach(function (divs,i){
            divs.onmouseenter=(e)=>{
                divs.onmousemove=(ev)=>{
                    let rect = divs.getBoundingClientRect();
                    divs.style.transform=`translate(${0.1*(ev.offsetX-Math.floor(rect.width)/2)}px , ${0.1*(Math.floor((rect.width)/2)/(Math.floor(rect.height)/2))*(ev.offsetY-Math.floor(rect.height)/2)}px)`;
                    circ[i].style.transform=`translate(${0.15*(ev.offsetX-Math.floor(rect.width)/2)}px , ${0.15*(Math.floor((rect.width)/2)/(Math.floor(rect.height)/2))*(ev.offsetY-Math.floor(rect.height)/2)}px)`;
                }
            }
            divs.onmouseleave=(e)=>{
                divs.onmousemove=false;
                divs.style.transform='translate(0, 0)';
                circ[i].onmousemove=false;
                circ[i].style.transform='translate(0, 0)';
            }
        });
    });
</script>
@endsection