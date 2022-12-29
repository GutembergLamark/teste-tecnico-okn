class Dropdown {

    static openDropdown(menuOpen, ev, menuClose = null, buttonClose = null) {
        const menu = document.querySelector(`.${menuOpen}`)
        const button = ev.path[0]

        menu.classList.toggle("show")

        if (menu.classList.contains("show")) {
            button.style.color = "black"
        } else {
            button.style.color = "white"
        }

        if (menuClose && menuClose.classList.contains("show")) {
            menuClose.classList.remove("show")
            buttonClose.style.color = "white"
        }

    }
}

export default Dropdown