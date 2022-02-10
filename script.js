
const checkBox = document.querySelectorAll('.check-box');

checkBox.forEach((el,i)=>{
    checkBox[i].addEventListener('click', (e)=>{
        if(el.classList.contains('active')){
            el.classList.remove('active');
            el.src='imges/check-all-false.png';
        } else{
            el.classList.add('active');
            el.src='imges/check-all-true.png';
            console.log(el);
        }
    });
});
