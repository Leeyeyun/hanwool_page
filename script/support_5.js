// ---- 고객지원 qna 토글 ---- //
const qna_contents = document.querySelector ('.qna_contents');
const q = qna_contents.querySelectorAll('.q');
const a = qna_contents.querySelectorAll('.a');
console.log(qna_contents, q, a);
for(let i of a){
    i.classList.add('a_off')
}
q[0].addEventListener('click',()=>{
    a[0].classList.toggle('a_off')
})
q[1].addEventListener('click',()=>{
    a[1].classList.toggle('a_off')
})
q[2].addEventListener('click',()=>{
    a[2].classList.toggle('a_off')
})
q[3].addEventListener('click',()=>{
    a[3].classList.toggle('a_off')
})
q[4].addEventListener('click',()=>{
    a[4].classList.toggle('a_off')
})

/* ---- header ---- */
// ---- 상단 서브 메뉴 보이기 ---- //
const nav = document.querySelector('nav')
const sub = nav.querySelectorAll('.sub');
const gnb_li = nav.querySelectorAll('.gnb > li');
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

// ---- 모바일 내비 복제 및 변수 지정 ---- //
const nav_clone = nav.cloneNode(true) //nav복제 변수
const m_nav = document.querySelector('.m_nav') //복제 대상 붙여넣기 용
const all_nav_m = document.querySelector('.all_nav_m')
const all_nav_m_img = all_nav_m.querySelector('img')
m_nav.appendChild(nav_clone)
const sub_m = m_nav.querySelectorAll('.sub');
const gnb_li_m = m_nav.querySelectorAll('.gnb > li');
const sub_a_m = m_nav.querySelectorAll('.sub > li > a');

//all_nav_m 클릭시 nav보이기&아이콘 변경
all_nav_m.addEventListener('click',(e)=>{
    e.preventDefault();
    boolean = !boolean
    if(boolean == true){
        console.log(boolean)
        all_nav_m_img.src = './images/close_icon.svg';
        all_nav_m.nextElementSibling.style.display = 'block';
    }else{
        console.log(boolean)
        all_nav_m_img.src = './images/m_nav_icon.svg';
        all_nav_m.nextElementSibling.style.display = 'none';
    }
})
for(let i of gnb_li_m){
    i.children[0].href = '#'
}
/* for(let i of gnb_li_m.firstElementChild){
    i.preventDefault();
}
 */
//gnb_li_m 클릭시 해당 sub 메뉴 보이기&다른 sub 숨기기
for(let b of gnb_li_m){
    b.addEventListener('click',()=>{
        /* e.preventDefault(); */
        for(let j of sub_m){
            j.style.transition = 'height 0.3s, overflow 0.3s'
            j.style.height = '0';
            j.style.overflow = 'hidden';
        }
        b.children[1].style.height = `calc(26px * ${b.children[1].children.length} + 32px)`;
        b.children[1].style.overflow = 'visible';
    })
}
/* ---- e:header ---- */