@extends('main')

@section('title')
    client
@endsection

@section('mainContent')
    @foreach ($vacancy as $el)
        <h1>{{$el->name}}</h1>
        требования
        <ul>
            @foreach ($el->requirements as $str)
                <li>{{$str}}</li>
            @endforeach
        </ul>
        обязанности
        <ul>
            @foreach ($el->duties as $str)
                <li>{{$str}}</li>
            @endforeach
        </ul>
        условия
        <ul>
            @foreach ($el->conditions as $str)
                <li>{{$str}}</li>
            @endforeach
        </ul>
    @endforeach
@endsection