@extends('/pattern/desktop')

@section('title')
ambity
@endsection

@section('mainContent')
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