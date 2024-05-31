@extends('/pattern/mobail')

@section('title')
ambity
@endsection

@section('mainContent')
<main>
    {{-- банер --}}
    <section class="meeting d-flex flex-column justify-content-center">
        <div class="container">
            <div class="d-flex flex-column">
                <h1>Комплексный<br />DIGITAL</h1>
                <p class="meeting-desc">
                    Амбити - агентство полного цикла. Мы комплексно решаем
                    задачи клиента, начиная от анализа рынка, заканчивая
                    развитием и поддержкой проекта.
                </p>
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column">
                        <a
                            class="btn-white"
                            onclick="document.querySelector('.modal').style.top='0'; document.querySelector('body').style.overflow='hidden'; document.querySelector('.modal-head').style.position='fixed';"
                            >Обсудить проект</a
                        >
                        <a
                            href="/cases"
                            class="meeting-arrowbtn d-flex align-items-center"
                        >
                            <div class="meeting-arrowbtn-name d-flex txt-anim">
                                <h2>Наши кейсы</h2>
                                <span>Наши кейсы</span>
                            </div>
                            <img src="/media/arrow-black-m.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="marquee-cont d-flex flex-column">
            <div class="meeting-marquee meeting-marquee-black">
                <div style="--marqblack: -773.069580078125px">
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
                <div style="--marqred: -773.3379516601562px">
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

    {{-- услуги --}}
    <section class="service">
        <div class="container d-flex flex-column">
            <a href="/services/web" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>WEB-разработка</h2>
                        <span>WEB-разработка</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Разрабатываем уникальные проекты для решения конкретных
                    бизнес-задач любой сложности, используя современные
                    технологии.
                </p>
                <p class="service-block-desc-sub">
                    Корпоративные сайты, Интернет-магазины, Личные кабинеты,
                    Лендинги, Highload-сервисы
                </p>
            </a>
            <a href="/services/in_marketing" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Интернет-маркетинг</h2>
                        <span>Интернет-маркетинг</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Анализируем бизнес клиента, разрабатываем стратегию и
                    подбираем каналы продвижения бренда исходя из целей и задач.
                    Анализируем результат на каждом этапе воронки.
                </p>
                <p class="service-block-desc-sub">
                    Стратегия, Контекстная реклама, Таргетированная реклама,
                    SMM, SEO, Рассылки, Управление репутацией(SERM),
                    Маркетплейсы, Контент-Маркетинг, Ретаргетинг
                </p>
            </a>
            <a
                href="/services/integration_bots"
                class="service-block d-flex flex-column"
            >
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Интеграция и чат-боты</h2>
                        <span>Интеграция и чат-боты</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Автоматизируем бизнес-процессы, общение в мессенджерах и
                    организуем синхронизацию данных между системами клиента.
                </p>
                <p class="service-block-desc-sub">
                    Автоматизируем бизнес-процессы, общение в мессенджерах и
                    организуем синхронизацию данных между системами клиента.
                </p>
            </a>
            <a href="/services/corp_systems" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Корпоративные системы</h2>
                        <span>Корпоративные системы</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Проводим анализ бизнес-процессов и оптимизируем. Повышаем
                    эффективность. Сокращаем затраты всех ресурсов компании
                    через автоматизацию бизнес-процессов и внедрение CRM, ERP и
                    BI-систем.
                </p>
                <p class="service-block-desc-sub">
                    Бренд-платформа, Нейминг, Фирменный стиль, Брендинг
                    работодателя, Разработка логотипа
                </p>
            </a>
            <a href="/services/branding" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Брендинг</h2>
                        <span>Брендинг</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Разрабатываем платформу бренду, его название и
                    позиционирование. Формируем маркетинговую концепцию и
                    создаем подчеркивающий фирменный стиль
                </p>
                <p class="service-block-desc-sub">
                    Бренд-платформа, Нейминг, Фирменный стиль, Брендинг
                    работодателя, Разработка логотипа
                </p>
            </a>
            <a href="/services/design" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Дизайн</h2>
                        <span>Дизайн</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Упрощаем восприятие технически сложных проектов через эмоции
                    и эстетику. Выстаиваем единую дизайн-систему для лучшего
                    восприятия бренда
                </p>
                <p class="service-block-desc-sub">
                    Интерфейсы, Фирменный стиль, Интерактивные презентации,
                    Разработка дизайна печатной продукции и сувенирных
                    материалов, Инфографика
                </p>
            </a>
            <a href="/services/support" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Поддержка</h2>
                        <span>Поддержка</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Комплексная поддержка и развитие проектов, обеспечение
                    бесперебойной работы. Регламентированная
                    поддержка/мониторинг проектов с SLA, реакция 15 минут.
                </p>
                <p class="service-block-desc-sub">
                    Корпоративные сайты, Интернет-магазины, Личные кабинеты,
                    Лендинги, Highload-сервисы
                </p>
            </a>
            <a href="/services/mobile" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Мобильные приложения</h2>
                        <span>Мобильные приложения</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Разрабатываем нативные и удобные мобильные приложения для
                    решения конкретных бизнес-задач любой сложности, используя
                    современные технологии с интеграцией с любыми системами.
                </p>
                <p class="service-block-desc-sub">
                    iOS-приложения, Android-приложения, Личные кабинеты,
                    Интернет-магазины, Корпоративные приложения,
                    Highload-сервисы
                </p>
            </a>
            <a href="/services/production" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Продакшн</h2>
                        <span>Продакшн</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Разрабатываем общую стратегию и творческие концепции для
                    различных целей компании, продуманные креативы, которые
                    решают задачи клиента. Визуализация продукта.
                </p>
                <p class="service-block-desc-sub">
                    Фото-продакшн, Видео-продакшн, 3D-визуалзация, Анимация,
                    Фильмы
                </p>
            </a>
            <a href="/services/analytics" class="service-block d-flex flex-column">
                <div class="d-flex justify-content-between">
                    <div class="service-block-name d-flex txt-anim">
                        <h2>Аналитика</h2>
                        <span>Аналитика</span>
                    </div>
                    <div class="service-block-arrow">
                        <img src="/media/arrow-black-new-long.svg" />
                    </div>
                </div>
                <p class="service-block-desc-main">
                    Анализуруем бизнес-процессы, целевую аудиторию и каналы
                    продвижения. Проверяем гипотезы на фокус-группах. Переводим
                    в цифры все процессы компании и анализируем их.
                </p>
                <p class="service-block-desc-sub">
                    Предпроектный анализ, Юзабилити-аудит, SEO-аудит, Аудит
                    рекламных кампаний, Коллтрекинг и сквозная аналитика, Анализ
                    бизнес-процессов, Разработка технической документации,
                    Сквозная аналитика
                </p>
            </a>
        </div>
    </section>

    {{-- кейсы --}}
    <section class="examples">
        <div class="container">
            <div class="d-flex flex-column">
                <h2>Кейсы</h2>
                <a class="text-decoration-none" href="/case/{{$briefcase->url}}">
                    <div class="examples-card d-flex flex-column">
                        <img
                            class="examples-card-photo"
                            src="{{$briefcase->img}}"
                        />
                        <div class="examples-card-name d-flex txt-anim">
                            <h3>{{$briefcase->name}}</h3>
                            <span>{{$briefcase->name}}</span>
                        </div>
                        <p>{{$briefcase->description}}</p>
                        <div
                            class="examples-card-arrow d-flex justify-content-end"
                        >
                            <img src="/media/arrow-black-m.svg" />
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="/cases" class="btn-white examples-btn"
                    >Все кейсы<img src="/media/arrow-black-m.svg"
                /></a>
            </div>
        </div>
    </section>

    {{-- слайдер клиентов --}}
    <section class="slider">
        <div class="container appScroll_bottom">
            <h2 class="text-start">Клиенты</h2>
        </div>
        <div>
            <div class="slider-marquee slider-marquee-high">
                <div style="--target: -1722px">
                    <div>
                        @foreach ($client as $el)
                            <div class="slider_item">
                                <img src="{{$el->image}}" />
                                <div class="slider_item-text">
                                    <h2>{{$el->name}}</h2>
                                    <p>{{$el->requirements}}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div>
                        @foreach ($client as $el)
                            <div class="slider_item">
                                <img src="{{$el->image}}" />
                                <div class="slider_item-text">
                                    <h2>{{$el->name}}</h2>
                                    <p>{{$el->requirements}}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="slider-marquee slider-marquee-low">
                <div style="--target: -1722px">
                    <div>
                        @foreach ($client as $el)
                            <div class="slider_item">
                                <img src="{{$el->image}}" />
                                <div class="slider_item-text">
                                    <h2>{{$el->name}}</h2>
                                    <p>{{$el->requirements}}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div>
                        @foreach ($client as $el)
                            <div class="slider_item">
                                <img src="{{$el->image}}" />
                                <div class="slider_item-text">
                                    <h2>{{$el->name}}</h2>
                                    <p>{{$el->requirements}}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

@endsection