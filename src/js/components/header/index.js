// Header
const headerTel = document.querySelector('.js-header-tel')

headerTel.addEventListener("click", () => {
    headerTel.classList.toggle("active")
})

const header = document.querySelector(".js-header")
const menuBtn = document.querySelectorAll(".js-menu-toggle")

menuBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const body = document.querySelector("body")
        body.classList.toggle("scroll-off")
        header.classList.toggle("active")
        btn.classList.toggle("open")
    })
});

const catBtns = document.querySelectorAll(".js-cat-btn")
const cat = document.querySelectorAll('.js-cat')

catBtns[0].classList.add("active")
cat.forEach((item, index) => {
    if (catBtns[index].classList.contains("active")) {
        item.classList.add("active")
    }

    catBtns[index].addEventListener("click", () => {
        cat.forEach((catIn, indexIn) => {
            catIn.classList.remove("active")
            catBtns[indexIn].classList.remove("active")
        })
        item.classList.add("active")
        catBtns[index].classList.add("active")
    })
})

const menuSelect = document.querySelector(".js-menu-select")
const catTitles = document.querySelectorAll(".js-cat-title")
menuSelect.addEventListener("change", (e) => {
    cat.forEach(item => {
        item.classList.remove("active")
    })
    catTitles.forEach((title, index) => {
        if (title.innerText.includes(e.target.value)) {
            cat[index].classList.add("active")
        }
    })
})

// Header Account
const accountBtn = document.querySelector(".js-header-acc")
accountBtn.addEventListener("click", () => { accountBtn.classList.toggle("active") })


const accountPopup = document.querySelector(".js-account-popup")
const accountPopupBtn = document.querySelector(".js-account-toggle")

if (accountPopupBtn) {
    accountPopupBtn.addEventListener("click", () => {
        accountPopup.classList.toggle("popup-on")
    })

    accountPopup.addEventListener("click", (e) => {
        if (e.target.classList[0] === "popup") {
            accountPopup.classList.toggle("popup-on")
        }
    })
}



const loginForm = document.querySelector(".js-login")
const registerForm = document.querySelector(".js-register")
const formChangeBtn = document.querySelector(".js-auth-change")

if (formChangeBtn) {
    formChangeBtn.addEventListener("click", () => {
        if (loginForm.classList.contains("active")) {
            loginForm.classList.remove("active")
            registerForm.classList.add("active")
            formChangeBtn.innerHTML = "Есть аккаунт?"
        } else {
            loginForm.classList.add("active")
            registerForm.classList.remove("active")
            formChangeBtn.innerHTML = "Зарегистрироваться"
        }
    })
}

// Scroll Header
const page = document.querySelector(".page")
const pagePadding = header.offsetHeight
const scrollHeader = () => {
    if (window.pageYOffset >= header.offsetHeight) {
        page.style.paddingTop = `${pagePadding}px`;
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
        page.style.paddingTop = `0px`;
    }
}
window.onscroll = function () { scrollHeader() };

// Mobile Menu
const menu1LevelWrap = document.querySelector(".js-mob-menu-wrap")
const menu1Level = document.querySelectorAll(".js-header-mob-btns-1-level")
const menu2LevelWrap = document.querySelectorAll(".js-mob-list-2-wrap")
const mobBtnTop = document.querySelector(".js-mob-btn-top")

let currentLevel = 0

menu1Level.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        menu2LevelWrap[index].classList.toggle("active")
        menu1LevelWrap.classList.add("off")
        mobBtnTop.innerHTML = `<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76468 8.19664C5.07486 7.88461 5.07486 7.38067 4.76468 7.06864L1.93268 4.19664L4.76468 1.36464C5.07486 1.05261 5.07486 0.548669 4.76468 0.236639C4.61447 0.0851885 4.40999 -2.56728e-08 4.19668 -3.49968e-08C3.98337 -4.43209e-08 3.77889 0.0851885 3.62868 0.236639L0.236679 3.62864C0.0852288 3.77885 4.0357e-05 3.98333 4.03477e-05 4.19664C4.03384e-05 4.40995 0.0852287 4.61443 0.236679 4.76464L3.62868 8.19664C3.77889 8.34809 3.98337 8.43328 4.19668 8.43328C4.40999 8.43328 4.61447 8.34809 4.76468 8.19664Z" fill="#C4CDD5"/>
        </svg>
        Назад`
        currentLevel = 1
    })
})

const menu2Level = document.querySelectorAll(".js-mob-level-2-btn button")
menu2Level.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const menu2LevelActiveWrap = document.querySelector(".js-mob-list-2-wrap.active")
        const menu3Level = document.querySelectorAll(".js-mob-list-2-wrap .js-mob-menu-level-3")
        menu2LevelActiveWrap.classList.add("level-3")
        menu3Level[index].classList.add("active")
        currentLevel = 2
    })
})

mobBtnTop.addEventListener("click", () => {
    if (currentLevel === 2) {
        const menu2LevelActiveWrap = document.querySelector(".js-mob-list-2-wrap.active")
        const menu3LevelActive = document.querySelector(".js-mob-menu-level-3.active")
        menu2LevelActiveWrap.classList.remove("level-3")
        menu3LevelActive.classList.remove("active")
        currentLevel = 1
    } else if (currentLevel === 1) {
        const menu2LevelWrapActive = document.querySelector(".js-mob-list-2-wrap.active")
        menu2LevelWrapActive.classList.remove("active")
        menu1LevelWrap.classList.remove("off")
        currentLevel = 0
    }
})




