/*마우스를 아래로 스크롤 할 떄 header에 있는 메인메뉴 배경색상 변경하기*/
const header = document.querySelector(".header");
const headerRect = header.getBoundingClientRect();
const headerHight = headerRect.height;

document.addEventListener("scroll",function(){
    console.log(window.scrollY);
    if(window.scrollY > headerHight){
        header.classList.add("header-dark");
    }
    else{
        header.classList.remove("header-dark");
    }

}
)


const about_content = document.querySelector(".about_content");
const contentRect = about_content.getBoundingClientRect();
const contentHeight = contentRect.height;

document.addEventListener("scroll",function(){
    console.log(window.scrollY);
    if(window.scrollY > contentHeight){
        about_content.classList.add("content_scroll");
    }
    else{
        about_content.classList.remove("content_scroll");
    }

}
)