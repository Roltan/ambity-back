@extends('/pattern/desktop')

@section('title')
    {{$briefcase->seo_title}}
@endsection


@section('links')
    <meta name="description" content='{{$briefcase->seo_description}}'/>
    <link rel="icon" href="{{$briefcase->seo_image}}">
    <meta property='og:url' content='{{$briefcase->og_url}}'/>
    <meta property='og:image' content='{{$briefcase->og_image}}'/>
    <meta property='og:title' content='{{$briefcase->og_title}}'/>
    <meta property='og:description' content='{{$briefcase->og_description}}'/>.
@endsection

@section('mainContent')
    {{-- <h1>{{$briefcase->name}}</h1>
    <img src="{{$briefcase->img}}" alt="">
    <p>{{$briefcase->descriptio n}}</p>
    {{$briefcase->html}} --}}

    {{-- <main class="c-main c-main-typed">
        <section class="">
            <div class="background-blue main">
                <div class="container ">
                    <div class="main-board position-relative d-flex flex-column d-sm-grid">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="main__list d-grid gap-2">
                                <h1 class="main__list-title m-0">
                                    Венчурный Фонд Республики Башкортостан
                                </h1>
                                <h1 class="main__list-text m-0">
                                    Разработка фирменного стиля, логотипа
                                </h1>
                                <h1 class="main__list-year m-0">2023</h1>
                            </div>
                        </div>
                        <div class="main__arrow align-self-center">
                            <img class="w-100 flex-shrink-0 d-flex justify-content-between flex-column flex-sm-row" src="\media\vfrb\Group_8.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="block-content border_bottom clientServicesSite">
                <div class="container">
                    <div class="d-flex justify-content-sm-center">
                        <div class=" d-flex justify-content-between flex-column flex-sm-row gap-3 gap-sm-5 board">
                            <div class=" d-flex flex-column">
                                <div class="title title-gray">Клиент</div>
                                <div class="text">
                                    Венчурный Фонд Республики Башкортостан
                                </div>
                            </div>
                            <div class=" d-flex flex-column">
                                <div class="title title-gray">Услуги</div>
                                <div class="text ">
                                    Разработка фирменного стиля, логотипа
                                </div>
                            </div>
                            <div class="clientServicesSite__site d-flex flex-column ">
                                <div class="title title-gray">Сайт</div>
                                <div class="d-flex">
                                    <a href="https://vfrb.ru/" class="text-decoration-none clientServicesSite_text text-decoration-none">
                                        <div class="gap-3 text border_vfrb text d-flex justify-content-between">
                                            vfrb.ru
                                            <img class="" src="\media\vfrb\Vector 24.svg" alt="">
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="block-content border_bottom aboutproject">
                <div class="container ">
                    <div class="d-flex justify-content-center ">
                        <div class=" gap-sm-5 gap-4 d-flex flex-column justify-content-between board">
                            <div class="aboutproject__item gap-2 gap-sm-3 d-flex d-md-grid justify-content-evenly flex-column flex-md-row">
                                <div class="title">О проекте</div>
                                <div class="text">
                                    Миссия венчурного фонда заключается в поиске и
                                    инвестировании в перспективные компании с целью
                                    масштабирования и увеличения капитализации компаний.
                                    Фонд предоставляет финансовую и консалтинговую
                                    поддержку, экспертизу и ресурсы, чтобы способствовать
                                    росту и инновациям в бизнесе.
                                </div>
                            </div>
                            <div class="aboutproject__item gap-2 gap-sm-3 d-flex d-md-grid justify-content-evenly flex-column flex-md-row">
                                <div class="title">Цель</div>
                                <div class="text">
                                    Разработать логотип и фирменный стиль для венчурного
                                    фонда. Создать запоминающийся образ, ассоциирующийся с
                                    надежностью и профессионализмом.
                                </div>
                            </div>
                            <div class="aboutproject__item gap-2 gap-sm-3 d-flex d-md-grid justify-content-evenly flex-column flex-md-row">
                                <div class="title">Идея</div>
                                <div class="text">
                                    За идею логотипа взяли соты, которые ассоциируются с Республикой Башкортостан и их интеграцию, как объединение команды проекта, инвесторов, экспертов, государства, партнеров, материальных и нематериальных ресурсов.
                                </div>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
    
            <div class="img"><img class="w-100" src="\media\vfrb\1-min.jpg" alt=""></div>
            <div class="img"><img class="w-100" src="\media\vfrb\2-min.jpg" alt=""></div>
    
    
            <div class="block-content brandIdentityMedia">
                <div class="container">
                    <div class="d-flex justify-content-center ">
                        <div class="brandIdentityMedia-board gap-2 gap-sm-3 d-flex d-md-grid justify-content-evenly flex-column flex-md-row">
                            <div class="title">Носители фирменного стиля</div>
                            <div class="text">
                                После создания логотипа, мы разработали дизайн визитной
                                карточки, фирменного письма, рекламного стенда, бейджев,
                                вывески на кабинет, фирменной презентации.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="img"><img class="w-100" src="\media\vfrb\3-min.jpg" alt=""></div>
            <div class="img"><img class="w-100" src="\media\vfrb\4-min.jpg" alt=""></div>
            <div class="img"><img class="w-100" src="\media\vfrb\5-min.jpg" alt=""></div>
            <div class="img"><img class="w-100" src="\media\vfrb\6-min.jpg" alt=""></div>
    
            <div class="block-content guideline">
                <div class="container ">
                    <div class="d-flex justify-content-center">
                        <div class=" guideline-board gap-2 gap-sm-3 d-flex d-md-grid justify-content-between flex-column flex-md-row">
                            <div class="title">Гайдлайн</div>
                            <div class="text">
                                Мы также разработали гайдлайн бренда, в котором прописаны
                                все правила использования разработанного фирменного стиля.
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
            <div class="img"> <img class="w-100" src="\media\vfrb\8-min.jpg" alt=""></div>
    
            <div class="block-content teamResult">
                <div class="container">
                    <div class="d-flex justify-content-center">
                        <div class="gap-3 gap-sm-5 d-grid justify-content-between flex-column board teamResult">
                            <div class="teamResult__result board gap-2 gap-sm-3 d-flex d-md-grid justify-content-evenly flex-column flex-md-row">
                                <div class="title">Результат</div>
                                <div class="text">
                                    Новый образ Венчурного фонда получился понятным,
                                    запоминающимся и хорошо считываемым.
                                </div>
                            </div>
                            <div class="teamResult__team board gap-2 gap-sm-3 d-flex d-md-grid justify-content-evenly flex-column flex-md-row">
                                <div class="title">Команда</div>
                                <div class="gap-3 d-flex flex-column">
                                    <div class="d-flex flex-column">
                                        <h2 class="text text-start text-gray m-0 p-0">
                                            Руководитель проекта
                                        </h2>
                                        <h3 class="text m-0 p-0">
                                            Айдар Нигматуллин
                                        </h3>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <h2 class="text text-start text-gray m-0 p-0">
                                            Дизайнер
                                        </h2>
                                        <h3 class="text m-0 p-0">
                                            Юлия Зыкова
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="contact_form">
                <div class="container">
                    <div class="contact_form_items w-100 d-flex flex-column flex-md-row justify-content-between gap-4">
                        <div class="contact_form_first-part gap-3 d-flex flex-column justify-content-between">
                            <div class="contact_form_first-part-title">
                                Хотите такой же проект? Давайте делать его вместе
                            </div>
                            <div class="contact_form_first-part-text w-100 ">Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас заполним: <a href="tel:+7 (347) 2-131-131" class="contact_form_first-part-text text-decoration-none">+7 (347) 2-131-131</a></div>
                        </div>
                        <div class="contact_form_second-part d-flex flex-column gap-3 gap-md-4 justify-content-between">
                            <div class="contact_form_second-part_input gap-3 gap-lg d-flex flex-column w-100">
                                <div>
                                    <input class="c-form__input d-flex align-items-center" placeholder="Имя" type="text" name="name" id="#form_item_name" required="">
                                </div>
                                <div>
                                    <input class="c-form__input d-flex align-items-center" placeholder="Телефон" type="text" name="phone" id="#form_item_tel" required="" inputmode="text">
                                </div>
                            </div>
                            <div class="contact_form_second-part_btns gap-2 d-flex flex-column">
                            <button class="c-form__button btn-white w-100" id="#form_item_btn">Отправить</button>
                                <div class="contact_form_second-part_press_btn">
                                    <p class="contact_form_second-part_press_btn d-none d-md-block d-lg-none">Нажимая на кнопку, вы соглашаетесь с <a href="#" class="contact_form_second-part_press_btn text-decoration-none"> политикой конфиденциальности</a></p>
                                    <p class="contact_form_second-part_press_btn d-block d-md-none d-lg-block">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с <a href="#" class="text-decoration-none">политикой конфиденциальности</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main> --}}

    {!!$briefcase->html!!}
@endsection