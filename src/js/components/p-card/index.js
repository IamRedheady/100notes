const pCards = document.querySelectorAll(".p-card")


if (pCards) {
    // Favorite
    const pCardFavoritePl = document.querySelectorAll(".p-card__btn-favorite + .button")
    const pCardFavoriteBtn1 = document.querySelectorAll(".js-p-card-favorite-1")
    const pCardFavoriteBtn2 = document.querySelectorAll(".js-p-card-favorite-2")

    pCardFavoriteBtn1.forEach((btn, i) => {
        pCardFavoriteBtn2[i].addEventListener("click", () => {
            btn.classList.toggle("active")
            pCardFavoriteBtn2[i].classList.toggle("active")
            pCardFavoritePl[i].click()
        })
        btn.addEventListener("click", () => {
            btn.classList.toggle("active")
            pCardFavoriteBtn2[i].classList.toggle("active")
            pCardFavoritePl[i].click()
        })

        if (pCardFavoritePl[i].classList.contains("view_wishlist_button")) {
            pCardFavoriteBtn1[i].classList.add("active")
            pCardFavoriteBtn2[i].classList.add("active")
        }
    })

    // Compare

    const pCardComparePl = document.querySelectorAll(".p-card .fami-wccp-button")
    const pCardCompareBtn1 = document.querySelectorAll(".js-p-card-compare-1")
    const pCardCompareBtn2 = document.querySelectorAll(".js-p-card-compare-2")

    pCardCompareBtn1.forEach((btn, i) => {
        pCardCompareBtn2[i].addEventListener("click", () => {
            pCardComparePl[i].click()
            pCardCompareBtn1[i].classList.add("active")
            pCardCompareBtn2[i].classList.add("active")
        })
        btn.addEventListener("click", () => {
            pCardComparePl[i].click()
            pCardCompareBtn1[i].classList.add("active")
            pCardCompareBtn2[i].classList.add("active")
        })

        if (pCardComparePl[i].classList.contains("added")) {
            pCardCompareBtn1[i].classList.add("active")
            pCardCompareBtn2[i].classList.add("active")
        }
    })
}