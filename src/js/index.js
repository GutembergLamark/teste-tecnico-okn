import Video from "./handlers/video.handler.js";
import Dropdown from "./handlers/dropdown.handler.js";

const playerVideo = document.querySelector(".container-video__video")
const buttonPlay = document.querySelector(".video--play")
const bar = document.querySelector(".container-video__strip")

const buttonPart = document.getElementById("container__part")
const buttonTransparency = document.getElementById("container__transparency")

const navbarMenu = document.querySelector(".dropdown__hamburguer")

buttonPlay.addEventListener("click", () => {
    Video.play()
})

playerVideo.addEventListener("click", () => {
    Video.pause()

})

bar.addEventListener("click", (ev) => {
    Video.setTimer(ev)
})

buttonPart.addEventListener("click", (ev) => {
    const dropdownTranparency = document.querySelector(".transparency")

    Dropdown.openDropdown("part", ev, dropdownTranparency, buttonTransparency)
})

buttonTransparency.addEventListener("click", (ev) => {
    const dropdownPart = document.querySelector(".part")

    Dropdown.openDropdown("transparency", ev, dropdownPart, buttonPart)


})

navbarMenu.addEventListener("click", (ev) => {
    Dropdown.openDropdown("dropdown__container", ev)
})





