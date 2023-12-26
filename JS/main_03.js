/*화면의 1/2까지 내려오면 top버튼 나타나도록*/

const home = document.querySelector(".home_container");
const homeHeight = home.offsetHeight;
const top_button = document.querySelector(".arrow_up");

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        top_button.style.opacity = 1;
    } 
    else{
        top_button.style.opacity = 0;
    }
})

