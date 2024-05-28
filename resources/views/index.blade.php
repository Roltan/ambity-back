@extends('desktop')

@section('title')
ambity
@endsection

@section('mainContent')
<section class="meeting d-flex flex-column justify-content-center">
    <div class="container">
        <div class="meeting-block d-flex flex-column">
            <h1>Комплексный DIGITAL</h1>
            <p>web, marketing, corporate systems, branding,<br/> design, mobile apps, support, production, analytics</p>
            <div class="d-flex">
                <a class="btn-white meeting-btn" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</a>
                <a href="/cases" class="meeting-arrowbtn d-flex align-items-center">
                    <div class="meeting-arrowbtn-name d-flex txt-anim"><h2>Наши кейсы</h2><span>Наши кейсы</span></div>
                    <div class="meeting-arrowbtn-arrow">
                        <img src="/media/arrow-black-new-long.svg">
                    </div>
                </a>
            </div>
        </div>
    </div>
    {{-- крутяещиес полоски --}}
    <div class="marquee-cont d-flex flex-column">
        <div class="meeting-marquee meeting-marquee-black">
            <div>
                <div>
                    <div class="meeting_item">
                        <p>web</p>
                    </div>
                    <div class="meeting_item">
                        <p>marketing</p>
                    </div>
                    <div class="meeting_item">
                        <p>corporate systems</p>
                    </div>
                    <div class="meeting_item">
                        <p>branding</p>
                    </div>
                    <div class="meeting_item">
                        <p>design</p>
                    </div>
                    <div class="meeting_item">
                        <p>mobile apps</p>
                    </div>
                    <div class="meeting_item">
                        <p>support</p>
                    </div>
                    <div class="meeting_item">
                        <p>production</p>
                    </div>
                    <div class="meeting_item">
                        <p>analytics</p>
                    </div>
                </div>
                <div>
                    <div class="meeting_item">
                        <p>web</p>
                    </div>
                    <div class="meeting_item">
                        <p>marketing</p>
                    </div>
                    <div class="meeting_item">
                        <p>corporate systems</p>
                    </div>
                    <div class="meeting_item">
                        <p>branding</p>
                    </div>
                    <div class="meeting_item">
                        <p>design</p>
                    </div>
                    <div class="meeting_item">
                        <p>mobile apps</p>
                    </div>
                    <div class="meeting_item">
                        <p>support</p>
                    </div>
                    <div class="meeting_item">
                        <p>production</p>
                    </div>
                    <div class="meeting_item">
                        <p>analytics</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="meeting-marquee meeting-marquee-red">
            <div>
                <div>
                    <div class="meeting_item">
                        <p>marketing</p>
                    </div>
                    <div class="meeting_item">
                        <p>corporate systems</p>
                    </div>
                    <div class="meeting_item">
                        <p>branding</p>
                    </div>
                    <div class="meeting_item">
                        <p>design</p>
                    </div>
                    <div class="meeting_item">
                        <p>mobile apps</p>
                    </div>
                    <div class="meeting_item">
                        <p>support</p>
                    </div>
                    <div class="meeting_item">
                        <p>production</p>
                    </div>
                    <div class="meeting_item">
                        <p>analytics</p>
                    </div>
                    <div class="meeting_item">
                        <p>web</p>
                    </div>
                </div>
                <div>
                    <div class="meeting_item">
                        <p>marketing</p>
                    </div>
                    <div class="meeting_item">
                        <p>corporate systems</p>
                    </div>
                    <div class="meeting_item">
                        <p>branding</p>
                    </div>
                    <div class="meeting_item">
                        <p>design</p>
                    </div>
                    <div class="meeting_item">
                        <p>mobile apps</p>
                    </div>
                    <div class="meeting_item">
                        <p>support</p>
                    </div>
                    <div class="meeting_item">
                        <p>production</p>
                    </div>
                    <div class="meeting_item">
                        <p>analytics</p>
                    </div>
                    <div class="meeting_item">
                        <p>web</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="service">
    <div class="container d-flex flex-column">
        <a href="/services/web" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>WEB-разработка</h2><span>WEB-разработка</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Разрабатываем уникальные проекты для решения конкретных бизнес-задач любой сложности, используя современные технологии. </p>
                    <p class="service-block-desc-sub">Корпоративные сайты, Интернет-магазины, Личные кабинеты, Лендинги, Highload-сервисы</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/in_marketing" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Интернет-маркетинг</h2><span>Интернет-маркетинг</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Анализируем бизнес клиента, разрабатываем стратегию и подбираем каналы продвижения бренда исходя из целей и задач. Анализируем результат на каждом этапе воронки.</p>
                    <p class="service-block-desc-sub">Стратегия, Контекстная реклама, Таргетированная реклама, SMM, SEO, Рассылки, Управление репутацией(SERM), Маркетплейсы, Контент-Маркетинг, Ретаргетинг</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/integration_bots" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Интеграция и чат-боты</h2><span>Интеграция и чат-боты</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Автоматизируем бизнес-процессы, общение в мессенджерах и организуем синхронизацию данных между системами клиента.</p>
                    <p class="service-block-desc-sub">Автоматизируем бизнес-процессы, общение в мессенджерах и организуем синхронизацию данных между системами клиента.</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/corp_systems" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Корпоративные системы</h2><span>Корпоративные системы</span></div>
            <h2></h2>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Проводим анализ бизнес-процессов и оптимизируем. Повышаем эффективность. Сокращаем затраты всех ресурсов компании через автоматизацию бизнес-процессов и внедрение CRM, ERP и BI-систем.</p>
                    <p class="service-block-desc-sub">Бренд-платформа, Нейминг, Фирменный стиль, Брендинг работодателя, Разработка логотипа</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/branding" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Брендинг</h2><span>Брендинг</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Разрабатываем платформу бренду, его название и позиционирование. Формируем маркетинговую концепцию и создаем подчеркивающий фирменный стиль</p>
                    <p class="service-block-desc-sub">Бренд-платформа, Нейминг, Фирменный стиль, Брендинг работодателя, Разработка логотипа</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/design" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Дизайн</h2><span>Дизайн</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Упрощаем восприятие технически сложных проектов через эмоции и эстетику. Выстаиваем единую дизайн-систему для лучшего восприятия бренда</p>
                    <p class="service-block-desc-sub">Интерфейсы, Фирменный стиль, Интерактивные презентации, Разработка дизайна печатной продукции и сувенирных материалов, Инфографика</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/support" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Поддержка</h2><span>Поддержка</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Комплексная поддержка и развитие проектов, обеспечение бесперебойной работы. Регламентированная поддержка/мониторинг проектов с SLA, реакция 15 минут.</p>
                    <p class="service-block-desc-sub">Корпоративные сайты, Интернет-магазины, Личные кабинеты, Лендинги, Highload-сервисы</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/mobile" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Мобильные приложения</h2><span>Мобильные приложения</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Разрабатываем нативные и удобные мобильные приложения для решения конкретных бизнес-задач любой сложности, используя современные технологии с интеграцией с любыми системами. </p>
                    <p class="service-block-desc-sub">iOS-приложения, Android-приложения, Личные кабинеты, Интернет-магазины, Корпоративные приложения, Highload-сервисы</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/production" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Продакшн</h2><span>Продакшн</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Разрабатываем общую стратегию и творческие концепции для различных целей компании, продуманные креативы, которые решают задачи клиента. Визуализация продукта.</p>
                    <p class="service-block-desc-sub">Фото-продакшн, Видео-продакшн, 3D-визуалзация, Анимация, Фильмы</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
        <a href="/services/analytics" class="service-block d-flex justify-content-between">
            <div class="service-block-name d-flex txt-anim"><h2>Аналитика</h2><span>Аналитика</span></div>
            <div class="d-flex align-items-start">
                <div class="service-block-desc d-flex flex-column">
                    <p class="service-block-desc-main">Анализуруем бизнес-процессы, целевую аудиторию и каналы продвижения. Проверяем гипотезы на фокус-группах. Переводим в цифры все процессы компании и анализируем их.</p>
                    <p class="service-block-desc-sub">Предпроектный анализ,  Юзабилити-аудит, SEO-аудит, Аудит рекламных кампаний, Коллтрекинг и сквозная аналитика, Анализ бизнес-процессов, Разработка технической документации, Сквозная аналитика</p>
                </div>
                <div class="service-block-arrow">
                    <img src="/media/arrow-black-new-long.svg">
                </div>
            </div>
        </a>
    </div>
</section>

<section class="examples">
    {{-- крутящиеся круги возле кейсов --}}
    <div class="examples-circle rotating">
        <div>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/m.svg"></span>
            <span><img src="/media/circle/o.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/r.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/soft.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
            <span><img src="/media/circle/k.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/y.svg" style="margin-bottom: 5px"></span>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
        </div>
        <div>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/m.svg"></span>
            <span><img src="/media/circle/o.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/r.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/soft.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
            <span><img src="/media/circle/k.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/y.svg" style="margin-bottom: 5px"></span>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
        </div>
        <div>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/m.svg"></span>
            <span><img src="/media/circle/o.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/r.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/soft.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
            <span><img src="/media/circle/k.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/y.svg" style="margin-bottom: 5px"></span>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
        </div>
        <div>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/m.svg"></span>
            <span><img src="/media/circle/o.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/r.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/soft.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
            <span><img src="/media/circle/k.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/y.svg" style="margin-bottom: 5px"></span>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
        </div>
        <div>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/m.svg"></span>
            <span><img src="/media/circle/o.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/r.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/soft.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
            <span><img src="/media/circle/k.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/y.svg" style="margin-bottom: 5px"></span>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
        </div>
        <div>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/m.svg"></span>
            <span><img src="/media/circle/o.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/r.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/t.svg"></span>
            <span><img src="/media/circle/soft.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
            <span><img src="/media/circle/k.svg"></span>
            <span><img src="/media/circle/e.svg"></span>
            <span><img src="/media/circle/y.svg" style="margin-bottom: 5px"></span>
            <span><img src="/media/circle/s.svg"></span>
            <span><img src="/media/circle/soft.svg" style="opacity: 0"></span>
        </div>

    </div>

    {{-- кейсы --}}
    <div class="container">
        <h2>Кейсы</h2>
        @foreach ($briefcase as $el)
            <div class="examples-cards">
                <div class="examples-cards-l d-flex flex-column">
                    <div class="examples-card d-flex flex-column">
                        <div class="examples-card-cont">
                            <a class="text-decoration-none" href="/case/{{$el->url}}">
                                <div class="examples-card-cont-circ">
                                    <img src="/media/arrow-black-new.svg">
                                </div>
                            </a>
                            <a class="text-decoration-none" href="/case/{{$el->url}}">
                                <img class="examples-card-photo" src="{{$el->img}}">
                            </a>
                        </div>
                        <div class="examples-card-texts d-flex flex-column">
                            <a class="text-decoration-none" href="/case/{{$el->url}}">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="examples-card-name d-flex txt-anim"><h3>{{$el->name}}</h3><span>{{$el->name}}</span></div>
                                    <img class="examples-card-arrow" src="/media/arrow-black-new.svg">
                                </div>
                                <p class="examples-card-desc">{{$el->description}}</p>
                            </a>
                        </div>
                        <div class="examples-card-hov d-flex align-items-center">
                            <div class="d-flex flex-column">
                                <h3>{{$el->name}}</h3>
                                <p>{{$el->description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</section>

{{-- слайдер с клиентами --}}
<section class="slider">
    <div class="container appScroll_bottom">
        <h2 class="text-start">Клиенты</h2>
    </div>
    <div class="slider-marquee">
        <div>
            <div>
                @foreach ($client as $el)
                    <div class="slider_item"><img src="{{$el->image}}" />
                        <div class="slider_item-text">
                            <h2>{{$el->name}}</h2>
                            <p>{{$el->name}}</p>
                        </div>
                    </div>
                @endforeach
            </div>
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
<script>
    /*document.querySelector('.examples-circle').innerHTML = "СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС СМОТРЕТЬ КЕЙС".split('')
        .map((e,i) => `<span style="--rot:${i*5.143}deg">${e}</span>`).join('');*/

    document.querySelectorAll('.examples-circle span').forEach(function (item, i){
        item.style=`--rot:${(i)*5.143}deg`;
    });
</script>
@endsection