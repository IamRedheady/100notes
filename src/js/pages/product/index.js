// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// Intro Slider
const productSlider = new Swiper(".js-product-slider", {
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 5,
    navigation: {
        nextEl: ".js-product-slider .swiper-button-next",
        prevEl: ".js-product-slider .swiper-button-prev",
    }
})

const productSliderThumb = new Swiper(".js-product-slider-thumb", {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true
});
const productSliderBig = new Swiper(".js-product-slider-big", {
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 5,
    navigation: {
        nextEl: ".js-product-slider-big .swiper-button-next",
        prevEl: ".js-product-slider-big .swiper-button-prev",
    },
    thumbs: {
        swiper: productSliderThumb,
    },
});


const productInfo = document.querySelector(".product__info")
if (productInfo) {
    // Photo Slider Show
    const sliderInner = document.querySelector(".js-product-slider-inner")
    const sliderInnerBtn = document.querySelector(".js-slider-close")
    const sliderSlidesMain = document.querySelectorAll(".js-swiper-slide-main")

    sliderSlidesMain.forEach(slide => {
        slide.addEventListener("click", () => {
            sliderInner.classList.add("active")
        })
    })

    sliderInnerBtn.addEventListener("click", () => {
        sliderInner.classList.remove("active")
    })
    // Favorite
    const pCardFavoritePl = document.querySelector(".p-card__btn-favorite + .button")
    const pCardFavoriteBtn = document.querySelector(".js-p-card-favorite")

    pCardFavoriteBtn.addEventListener("click", () => {
        pCardFavoriteBtn.classList.toggle("active")
        pCardFavoritePl.click()
    })
    if (pCardFavoritePl.classList.contains("view_wishlist_button")) {
        pCardFavoriteBtn.classList.add("active")
    }

    // Compare

    const pCardComparePl = document.querySelector(".fami-wccp-button")
    const pCardCompareBtn = document.querySelector(".js-p-card-compare")

    pCardCompareBtn.addEventListener("click", () => {
        pCardComparePl.click()
    })
}
