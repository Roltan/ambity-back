@extends('main')

@section('title')
    case
@endsection

@section('mainContent')
    @foreach ($briefcase as $el)
        <h1>{{$el->name}}</h1>
        <p>{{$el->description}}</p>
        <img src="{{$el->img}}" alt="">
        <a href="/case/{{$el->url}}"><h1>==></h1></a>
    @endforeach
@endsection