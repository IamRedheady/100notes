const contactsPopup = document.querySelector('.js-contact-popup')
if (contactsPopup) {
    const contactsPopupBtn = document.querySelector('.js-contact-popup-toggle')

    contactsPopupBtn.addEventListener("click", () => { contactsPopup.classList.toggle("popup-on") })
    contactsPopup.addEventListener("click", (e) => {
        if (e.target.classList[0] === "popup") {
            contactsPopup.classList.toggle("popup-on")
        }
    })
}