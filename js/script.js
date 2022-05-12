var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 5,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false
        }
    },
    zoom: {
        maxRatio: 5,
    },
})


const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav_black')
    } else {
        nav.classList.remove('nav_black');
    }
})
const toggleDropdown = () => {
    var element = document.getElementById("dropdown");
    if (element.classList.contains("d-none")) {
        element.classList.remove("d-none")
    } else {
        element.classList.add("d-none")
    }
}




var swiperSlide = document.getElementsByClassName('swiper-slide')
for (var index = 0; index < swiperSlide.length; index++) {
    swiperSlide[index].addEventListener('mouseover', function (e) {
        var offsets = this.getBoundingClientRect();
        console.log(offsets)
        const ele = document.getElementsByTagName("body")[0];
        let scrlheight = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        var top = offsets.y+scrlheight;
        var left = offsets.x;
        
        console.log(`scroll heifht : ${scrlheight}`)
        console.log(`y: ${top}`)
        // var top = e.clientY;
        // var left = e.clientX;
        var width = offsets.width;
        var height = offsets.height;
        let right=0
        if((left+(width+width*50/100))>window.screen.width){
            right=offsets.right
        }
        // console.log(height)
        var element = document.getElementById("test")
        element.innerHTML = ""
        // element.style.width = width+"px";
        // element.style.height = height+"px";
        if (window.screen.width > 640) {

            element.style.top = top + "px";
            if(right==0){

                element.style.left = left + "px";
                element.style.removeProperty('right')
            }else{
                element.style.right = 0 + "px";
                element.style.removeProperty('left')
            }
        } else {
            element.style.left = "0px";
            element.style.top = "10vh";
        }
        let imgUrl = this.getElementsByTagName("img")[0].src;
        let newImg = document.createElement("img");
        newImg.src = imgUrl;
        newImg.style.aspectRatio = "16/9";
        newImg.style.width = "100%";
        element.appendChild(newImg)
        // console.log(window.screen.width)

    })

    // swiperSlide[index].addEventListener('mouseout', function (e) {
    //     var element = document.getElementById("test")
    //     element.innerHTML = ""
    // })

}
let popup = document.getElementById('test');
popup.addEventListener('mouseout', function (e) {
    var element = document.getElementById("test")
    element.innerHTML = ""
});
