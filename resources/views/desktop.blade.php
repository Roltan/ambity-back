<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>@yield('title')</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:type" content="website" />

    <meta itemprop="name" content="" />
    <meta itemprop="description" content="" />
    <meta itemprop="image" content="" />

    {{-- <link rel="stylesheet" href="/css/bootstarap.min.css"> --}}
    {{-- <link rel="stylesheet" href="/css/main.css"> --}}
    {{-- <link rel="stylesheet" href="/css/inter.css"> --}}
    {{-- <link rel="stylesheet" href="/css/install.css}"> --}}
    <link rel="stylesheet" href="/css/style_desktop.css">
    {{-- <link rel="stylesheet" href="/css/swiper-bunble.min.css"> --}}

    <script src="/js/inputmask.min.js"></script>
    <script src="/js/jquert-3.6.0.min.js"></script>
    <script src="/js/SmoothScroll.min.js"></script>
    <script src="/js/swiper-bundle.min.js"></script>

    @yield('links')
</head>
<body>
    {{-- шапка --}}
    <header data-scroll="0" class="appearance_top">
        <div class="container d-flex flex-row justify-content-between align-items-center">
            <div>
                <a href="/" class="header-main-logo">
                    <img src="/media/logo.svg">
                </a>
            </div>
            <div class="d-flex align-items-center">
                <div class="header-links d-xl-flex d-none flex-row align-items-center">
                    <a href="/cases">Кейсы</a>
                    <a href="/services">Услуги</a>
                    <a href="/products">Продукты</a>
                    <a href="/agency">Агентство</a>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <!--<button class="btn-white btn-head" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>-->
                    <div class="sidenav-trigger" id="pressme">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="overlay d-flex align-items-center">
        <div class="overlay-content">
            <div class="overlay-content-head container d-flex flex-row justify-content-between align-items-center">
                <a href="/">
                    <img src="/media/logo.svg">
                </a>
                <div class="d-flex flex-row align-items-center">
                    <button class="btn-white btn-head" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
                    <div class="overlay-close" onclick='document.querySelector(".overlay").classList.remove("active");document.querySelector(".sidenav-trigger").classList.remove("active");'>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="container d-flex align-items-center justify-content-around h-100">
                <div class="overlay-links d-grid">
                    <div class="d-flex align-items-center">
                        <a href="/cases">Кейсы</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/services">Услуги</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/products">Продукты</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/career">Карьера</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/agency">Агентство</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/blog">Блог</a>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="/contacts">Контакты</a>
                    </div>
                </div>
                <div class="d-flex flex-column align-items-end overlay-contacts">
                    <a href="tel:+7{{$contact->phone}}">+7{{$contact->phone}}</a>
                    <a href="mailto:{{$contact->email}}">{{$contact->email}}</a>
                    <div class="overlay_social soc_icons">
                        <a target="_blank" href="{{$contact->vk}}">
                            <img src="/media/vk.svg" alt="">
                        </a>
                        <a target="_blank" href="https://www.facebook.com/groups/ambity/">
                            <img src="/media/facebook.png" alt="">
                        </a>
                        <a target="_blank">
                            <img src="/media/twitter.png" alt="">
                        </a>
                    </div>
                    <button class="btn-white" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
                </div>
            </div>
        </div>
    </div>
    <div class="showpic">
        <div class="showpic-content">
            <div class="container d-flex">
                <img src="/media/showreelpic.jpg">
            </div>
        </div>
    </div>

    @yield('mainContent')

    {{-- подвал --}}
    <footer class="anim-footer _active">
        <div class="footer container d-flex flex-column">
            <div class="d-flex justify-content-around">
                <div class="footer-desc d-flex flex-column align-items-start">
                    <h2>Планируете проект?</h2>
                    <p>Давайте запустим его вместе</p>
                    <button class="btn-white" onclick="document.querySelector('.modal').style.top='0';">Обсудить проект</button>
                </div>
                <div class="footer-cont d-flex flex-column">
                    <a class="footer-cont-href d-flex txt-anim" href="tel:+7{{$contact->phone}}"><p>+7 {{$contact->phone}}</p><span>+7 {{$contact->phone}}</span></a>
                    <a class="footer-cont-href d-flex txt-anim" href="mailto:{{$contact->email}}"><p>{{$contact->email}}</p><span>{{$contact->email}}</span></a>
                    <p>{{$contact->adres}}</p>
                    <div class="footer-cont-soc">
                        <a target="_blank" href="{{$contact->vk}}">
                            <img src="/media/vklogo.svg" alt="">
                        </a>
                        <a target="_blank" href="{{$contact->telegram}}">
                            <img src="/media/tglogo.svg" alt="" style="padding-right: 2px">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="last-footer container d-flex justify-content-around">
            <p>ИП Нигматуллин А.З.</p>
            <p>ОГРНИП 315028000132311</p>
            <a href="/policy">Политика конфеденциальности</a>
        </div>
    </footer>
    <div class="cookie d-flex justify-content-between align-items-center">
        <p>Мы используем cookies</p>
        <button class="btn-white">Хорошо</button>
    </div>
</body>
</html>