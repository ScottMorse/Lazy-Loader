const allImgs = document.querySelectorAll('.image')

function lazyLoad(el){
    if(!el.dataset.loaded && 
        el.offsetTop < (window.innerHeight + window.scrollY) &&
        (el.offsetTop + el.offsetHeight) > (window.scrollY)
    ){
        if(el.classList.contains('lazy-img')){
            el.src = el.dataset.src
        }
        else{
            el.style.backgroundImage = `url("${el.dataset.src}")`
        }
        el.dataset.loaded = true
    }
}

allImgs.forEach(img => {
    window.addEventListener('load',()=>lazyLoad(img))
    window.addEventListener('resize',()=>lazyLoad(img))
    window.addEventListener('scroll',()=>lazyLoad(img))
    window.addEventListener('orientationChange',()=>lazyLoad(img))
})