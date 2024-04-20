//Onscroll Style changing
const primaryHeader = document.querySelector(".header");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);







//Active Nav tags
const tabBtn = document.querySelectorAll(".tabBtn");

const active = function(btnClick){
    tabBtn.forEach((tabBtns) => {
        tabBtns.classList.remove("enable");
    });

    tabBtn[btnClick].classList.add("enable");
}

tabBtn.forEach((tabBtns, i) => {
    tabBtns.addEventListener("click", () => {
        active(i);
    })
});

//Active Navs Onscroll
const navLinkEls = document.querySelectorAll('.tabBtn');
const sectionEls = document.querySelectorAll('.section');

let currentSection = "Home";
window.addEventListener('scroll', ()=>{
    sectionEls.forEach(sectionEl => {
        if(window.scrollY >= (sectionEl.offsetTop - 200)){
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)){
            document.querySelector('.enable').classList.remove('enable');
            navLinkEl.classList.add('enable');
        }
    });
});








//Blur the background and popup
let toggle = () => {
    let blur = document.getElementById('blur');
    blur.classList.toggle('blurred');
    let popup = document.getElementById('popup');
    popup.classList.toggle('blurred');
}




//Image Slider
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active1 = 0;
let lengthItems = items.length - 1;

const dotBtn = document.querySelectorAll(".dotted");
const active2 = function(active1){
    dotBtn.forEach((dotBtns) => {
        dotBtns.classList.remove("active1");
    });

    dotBtn[active1].classList.add("active1");
}

dotBtn.forEach((dotBtns, i) => {
    dotBtns.addEventListener("click", () => {
        active2(i);
    })
});

next.onclick = function(){
    if(active1 + 1 > lengthItems){
        active1 = 0;
    }
    else{
        active1 = active1 + 1;
    }
    reloadSlider();
    active2(active1);
}

prev.onclick = function(){
    if(active1 - 1 < 0){
        active1 = lengthItems;
    }
    else{
        active1 = active1 - 1;
    }
    reloadSlider();
    active2(active1);
}

let refreshSlider = setInterval(()=>{next.click()}, 4000);

function reloadSlider(){
    let checkLeft = items[active1].offsetLeft;
    list.style.left = -checkLeft + 'px';

    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()}, 4000);
}