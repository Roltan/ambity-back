<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @yield('links')
</head>
<body>
    <header>
        <a href="/">кейсы</a>
        <a href="/client">клиенты</a>
        <a href="/vacancy">вакансии</a>
    </header>

    @yield('mainContent')

    <footer>
        <ul>
            <li>{{$contact->phone}}</li>
            <li>{{$contact->email}}</li>
            <li>{{$contact->adres}}</li>
            <li>{{$contact->telegram}}</li>
            <li>{{$contact->vk}}</li>
        </ul>
    </footer>
</body>
</html>