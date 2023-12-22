const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
})

/*opacity 값은 0~1이다. 음수 값이 나와도 최소값이 0이므로 결과값은 0으로 처리된다
높이가 100px이라고 가정하면 사용자가 스크롤을 200이면 200/100 = 2가 된다
home.style.opacity = 1 -2 = -1 (최소값이 0이므로 즉 opacity :0이 됩니다)*/

const person_01 = document.querySelector(".person_01");
const testimonial_bubble = document.querySelector(".testimonial_bubble");

person_01.addEventListener("click", function(){
    testimonial_bubble.style.color = "red";
})
testimonial_bubble.addEventListener("click", function(){
    testimonial_bubble.style.color = "#000";
})


const footer_01 = document.querySelector(".footer_text");
const footer_02 = document.querySelector(".footer_text_02");

footer_01.addEventListener("click", function(){
    footer_02.style.color = "red";
})
