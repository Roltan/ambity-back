@extends('/pattern/mobail')

@section('title')
ambity
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
    {!!$briefcase->html!!}
@endsection