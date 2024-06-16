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

// ---- 상단 서브 메뉴 보이기 ---- //
const sub = document.querySelectorAll('.sub');
const gnb_li = document.querySelectorAll('.gnb > li');
for (let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden'
    i.style.transition = 'height 0.3s ease-in-out';
}
for(let i of gnb_li)(
    i.addEventListener('mouseover',()=>{
        const li_count = 50 * i.lastElementChild.childElementCount;
        console.log(li_count)
        i.lastElementChild.style.height = `${li_count}px`
    })
)
for(let i of gnb_li)(
    i.addEventListener('mouseout',()=>{
        i.lastElementChild.style.height = '0'
    })
)

// ---- 오른쪽 사이드바 보이기 ---- //
const lnb_bg = document.querySelector('.lnb_bg');
const all_nav = document.querySelector('.all_nav');
const rectangle = document.querySelector('.rectangle');
all_nav.classList.add('all_nav_hide')
all_nav.style.height = '0';
all_nav.style.padding = '0'
all_nav.style.overflow = 'hidden'
lnb_bg.style.width = '0';
rectangle.addEventListener('click',(e)=>{
    e.preventDefault(); //a href 막기
    all_nav.classList.toggle('all_nav_hide')
})
