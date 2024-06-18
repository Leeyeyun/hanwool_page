// swiper
const swiper1 = new Swiper('.top-container',{
    effect:'fade',
    autoplay:{},
    //cube 옵션 : effect:'cube' 설정 시 가능
    //자동재생(기본 3초(3000))
    //autoplay:{delay:2000},
    //마지막 슬라이드에서 시작 슬라이드로 자연스럽게 변환
    loop:true,//기본값이 false임
    pagination:{
        el:'.top-container .swiper-pagination',//부모 필수
        type:'fraction',//필수작성
    },
});
const swiper2 = new Swiper('.product-container',{
    effect:'',
    autoplay:{},
    slidesPerView:3,
    loop:true,//기본값이 false임
    pagination:{
        el:'.product_pagination .swiper-pagination',//부모 필수
        type:'fraction',//필수작성
    },
    navigation:{
        nextEl:'.product_pagination .prev_next .swiper-button-next',
        prevEl:'.product_pagination .prev_next .swiper-button-prev',
    },
    slidesPerView: 2, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 10, //위 slidesPerview 여백
    breakpoints: { //반응형 조건 속성
    1200: {slidesPerView:3},
    },
});
const swiper3 = new Swiper('.qna-container',{
    effect:'',
    autoplay:{},
    loop:true,//기본값이 false임
    pagination:{
        el:'.sub_right .swiper-pagination',//부모 필수
        type:'bullets',//필수작성
    },
});

//overlap hover 애니메이션
const overlap_contents = document.querySelectorAll('.overlap_contents')
for(let i of overlap_contents){
    i.nextElementSibling.style.transition = 'margin-top 0.5s'
    i.addEventListener('mouseover',()=>{
        i.nextElementSibling.style.marginTop = '0'
        i.children[0].style.backgroundColor = '#013630'
        i.children[0].style.color = '#fff'
        i.children[0].children[0].style.filter = 'invert(1)'
    })
    i.addEventListener('mouseout',()=>{
        i.nextElementSibling.style.marginTop = '-140px'
        i.children[0].style.backgroundColor = '#fff'
        i.children[0].style.color = '#000'
        i.children[0].children[0].style.filter = 'invert(0)'
    })
}

