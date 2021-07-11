import './styles/style.scss';

function offset(el){
    const   rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return{top: rect.top + scrollTop, left: rect.left + scrollLeft};
}

function scrollAnim() {
    const elements = document.querySelectorAll('.scroll-anim__item');

    elements.forEach((elem) => {
        const animItemHeight = elem.offsetHeight;
        const animItemOffset = offset(elem).top;
        const animStart = 4;
        
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animationOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            elem.classList.add('scroll-anim__item--active');
        } else {
            elem.classList.remove('scroll-anim__item--active');
        }
    });
}

function scrollEvent() {
    scrollAnim();
    window.addEventListener('scroll', scrollAnim);
}

scrollEvent();
