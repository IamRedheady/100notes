const cart = document.querySelector(".js-cart")
const cartBtn = document.querySelectorAll(".js-cart-toggle")
const body = document.querySelector("body")

cartBtn.forEach(btn => btn.addEventListener("click", () => {
    cart.classList.toggle("active")
    const cartBtnOrder = document.querySelector(".js-cart-btn-order")
    const cartCheck = document.querySelector('.js-cart-check')
    const cartOrder = document.querySelector(".js-cart-order")
    body.classList.toggle("scroll-off")
    if (cartBtnOrder) {
        cartBtnOrder.addEventListener("click", () => {
            cartCheck.classList.add("off")
            cartOrder.classList.add("active")
        })
        setTimeout(() => {
            const phoneMask = IMask(
                document.getElementById('billing_phone'), {
                mask: '+{375} (00) 000-00-00'
            });
            // Костыль
            const inputs = document.querySelectorAll(".woocommerce-billing-fields input")
            inputs.forEach(item => {
                item.setAttribute('required', true)
            })
        }, 200);
    }
}))

if (cart) {
    cart.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) {
            cart.classList.toggle("active")
            body.classList.toggle("scroll-off")
        }
    })
}
