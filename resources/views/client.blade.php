@extends('main')

@section('title')
    client
@endsection

@section('mainContent')
    @foreach ($client as $el)
        <h1>{{$el->name}}</h1>
        <img src="{{$el->image}}" alt="">
    @endforeach
@endsection