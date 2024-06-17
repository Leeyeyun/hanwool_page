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
for(let i of gnb_li){
    i.addEventListener('mouseover',()=>{
        const li_count = 50 * i.lastElementChild.childElementCount;
        i.lastElementChild.style.height = `${li_count}px`
    })
}
for(let i of gnb_li){
    i.addEventListener('mouseout',()=>{
        i.lastElementChild.style.height = '0'
    })
}

// ---- 모바일 내비 복제 및 all_nav 클릭시 보이기 ---- //
const nav = document.querySelector('nav')
const nav_clone = nav.cloneNode(true) //nav복제 변수
const m_nav = document.querySelector('.m_nav') //복제 대상 붙여넣기 용
const all_nav_m = document.querySelector('.all_nav_m')
m_nav.appendChild(nav_clone)
const sub_m = m_nav.querySelectorAll('.sub');
const gnb_li_m = m_nav.querySelectorAll('.gnb > li');
console.log(sub_m, gnb_li_m)
/* for(let i of sub_m){
    i.style.overflow = 'visible',
    i.style.height = '100%',
    i.style.display = 'none'
}
for(let i of gnb_li_m){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(i.children[1])
        for(let i of sub_m){i.style.display = 'none'}
        i.children[1].style.display = 'block' //css에서 만약 flex,grid로 디자인했다면 block이 아닌 해당 디자인으로 작성해야한다!
    })
} */

for(let i of sub_m){
    i.style.overflow = 'hidden',
    i.style.height = '0',
    i.style.padding = '0'
}
for(let i of gnb_li_m){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(i.children[1])
        for(let i of sub_m){
            i.style.transition = 'height 0.2s 0.2s, overflow 0.2s 0.2s, padding 0.2s',
            i.style.overflow = 'hidden',
            i.style.height = '0',
            i.style.padding = '0'
        }
        i.children[1].style.transition = 'height 0.2s, overflow 0.2s, padding 0.2s',
        i.children[1].style.overflow = 'visible',
        i.children[1].style.height = '100%',
        i.children[1].style.padding = '16px'
    })
}

// ---- 오른쪽 사이드바(데스크탑) 보이기 ---- //
const lnb = document.querySelector('.lnb');
const lnb_bg = lnb.querySelector('.lnb_bg');
const all_nav = lnb.querySelector('.all_nav');
const all_nav_a = all_nav.querySelectorAll('ul li a');
const all_nav_btm = all_nav.querySelector('.btm');
const rectangle = document.querySelector('.rectangle');
//숨기는 초기값 설정
all_nav.style.height = '0';
all_nav.style.padding = '0';
all_nav.style.overflow = 'hidden';
lnb_bg.style.width = '0';
let boolean = false;
for(let i of all_nav_a){
    i.style.lineHeight = '100px',
    i.style.opacity = '0'
}
all_nav_btm.style.opacity = '0'
rectangle.style.transition = 'width 0.5s, height 0.5s'

rectangle.addEventListener('click',(e)=>{
    e.preventDefault(); //a href 막기
    boolean = !boolean; //boolean의 부정값을 대입하여 1-0-1-0 나오게 하기
    if(boolean == true){
        //transition 애니메이션 설정
        all_nav.style.transition = 'height 0.5s ease-in, padding 0.5s ease-in, overflow 0.5s ease-in'
        lnb_bg.style.transition = 'width 0.5s ease-in'
        all_nav_btm.style.transition = 'opacity 0.5s 0.5s'
        all_nav.style.height = '100vh';
        all_nav.style.padding = '93px 50px 44px';
        all_nav.style.overflow = 'visible';
        lnb_bg.style.width = '65%';
        for(let i of all_nav_a)(
            i.style.lineHeight = '72px',
            i.style.opacity = '1',
            i.style.transition = 'line-height 0.5s 0.5s, opacity 0.5s 0.5s, color 0.3s ease-in-out, padding-left 0.3s ease-in-out'
        )
        all_nav_btm.style.opacity = '1';
        rectangle.style.width = '32px';
        rectangle.style.height = '16px';
    }else{
        //transition 애니메이션 설정
        all_nav.style.transition = 'height 0.5s 0.1s ease-in, padding 0.5s 0.5s, overflow 0.5s 0.1s ease-in'
        all_nav_btm.style.transition = 'opacity 0.5s'
        all_nav.style.height = '0';
        all_nav.style.padding = '0';
        all_nav.style.overflow = 'hidden';
        lnb_bg.style.width = '0';
        for(let i of all_nav_a)(
            i.style.lineHeight = '100px',
            i.style.opacity = '0',
            i.style.transition = 'line-height 0.5s, opacity 0.5s, color 0.3s ease-in-out, padding-left 0.3s ease-in-out'
        )
        all_nav_btm.style.opacity = '0';
        rectangle.style.width = '16px';
        rectangle.style.height = '32px';
    };
    /* all_nav.style.height = boolean ? "100vh" : "0";
    all_nav.style.padding = boolean ? "93px 50px 44px" : "0";
    all_nav.style.overflow = boolean ? "visible" : "hidden"; */
})
