const catalogPage = document.querySelector('.catalog')

if (catalogPage) {
    const sortBtns = document.querySelectorAll('.js-catalog-sort-btn')

    sortBtns.forEach(btn => {
        if (location.href.includes(btn.getAttribute('href'))) {
            btn.classList.add('active')
        }
    })

    if (location.href.includes('?orderby=price-desc')) {
        sortBtns[1].classList.remove("active")
    }

    const viewBtns = document.querySelectorAll(".js-catalog-view-btn")
    const catalogList = document.querySelector(".js-catalog-list")

    viewBtns.forEach(btn => btn.addEventListener("click", () => {
        viewBtns.forEach(btnIn => btnIn.classList.remove("active"))
        btn.classList.toggle("active")

        if (btn.dataset.view === "line" && btn.classList.contains("active")) {
            catalogList.classList.add("catalog__list_view-line")
        } else {
            catalogList.classList.remove("catalog__list_view-line")
        }
    }))

    const filter = document.querySelector(".js-filter")
    const filterToggles = document.querySelectorAll(".js-filter-toggle")

    filterToggles.forEach(btn => btn.addEventListener("click", () => { filter.classList.toggle("active") }))
}