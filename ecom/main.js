let icon = document.querySelector(".bx-menu");
let nav = document.querySelector(".nav");
let closeIcon = document.querySelector(".bx-x");

function hideNav() {
    nav.style.display = "none";
    window.removeEventListener("scroll", hideNav);
    window.removeEventListener("click", hideNav);
}

icon.addEventListener("click", function(event){
    nav.style.display = "block";
    event.stopPropagation();
    
    // Add event listeners for scroll and click events only after nav is displayed
    closeIcon.addEventListener("click", hideNav);
    window.addEventListener("scroll", hideNav);
    window.addEventListener("click", function(event) {
        if (!nav.contains(event.target) && event.target !== icon) {
            hideNav();
        }
    });
});

let slides = document.querySelectorAll(".swiper-slide");
slides.forEach(function(slide){
    let button = slide.querySelector(".button");
    let image = slide.querySelector(".image");
    slide.addEventListener("mouseover", function() {
        image.classList.add("up");
        button.style.display = "block";

        setTimeout(function(){
            button.style.top = "50%";
        },100)
    });
    slide.addEventListener("mouseout", function() {
        image.classList.remove("up");
        button.style.display = "none";
        setTimeout(function(){
            button.style.top = "10%";
        },100)
    });
});
let methods = document.querySelector(".methods");
let imgs = methods.querySelectorAll("div img");
let realSrc = ["img/file (8).png","img/file (9).png","img/file (10).png","img/American-Express-Color.png"]
for(let i = 0 ; i<= imgs.length;i++){
    imgs[i].addEventListener("mouseover",function(){
        blackWhitePic = imgs[i].getAttribute("src");
        imgs[i].setAttribute("src",realSrc[i])
    })
    imgs[i].addEventListener("mouseout",function(){
            imgs[i].setAttribute("src",blackWhitePic)
    })
}

