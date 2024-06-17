// ---- 고객지원 qna 토글 ---- //
const qna_contents = document.querySelector ('.qna_contents');
const q = qna_contents.querySelectorAll('.q');
const a = qna_contents.querySelectorAll('.a');
console.log(qna_contents, q, a);

/* for(let i of q){
    i.addEventListener('click',()=>{
        i.nextElementSibling.classList.toggle('on')
    })
} */
q[0].addEventListener('click',()=>{
    console.log(a[0])
    a[0].classList.toggle('on')
})