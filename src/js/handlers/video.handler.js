class Video {

    static containerVideo = document.querySelector(".join__container-video")
    static video = document.querySelector(".container-video__video")
    static infoVideo = document.querySelector(".container-video__info-video")
    static update

    static play() {
        const bar = document.querySelector(".container-video__strip")

        this.video.play()
        this.containerVideo.removeChild(this.infoVideo)

        this.update = setInterval(() => Video.timer(), 100)

        bar.style.display = "block"
        this.video.style.filter = "none"


    }
    static pause() {

        if (this.video.currentTime > 0) {

            this.video.pause()

            this.containerVideo.appendChild(this.infoVideo)

            const title = document.querySelector(".video--title")
            const watch = document.querySelector(".video--watch")
            const play = document.querySelector(".video--play img")

            play.src = "../../../src/assets/images/Play.png"

            if (title && watch) {
                this.infoVideo.removeChild(title)
                this.infoVideo.removeChild(watch)
            }
        }

    }

    static stop() {
        this.video.pause()
        this.video.currentTime = 0
        this.video.poster = "../../../src/assets/images/Thumb.png"



    }

    static timer() {
        const progresBar = document.querySelector(".strip__progress")

        const duration = this.video.duration

        const result = (100 * this.video.currentTime) / duration

        progresBar.style.width = `${result}%`

        if (this.video.currentTime == this.video.duration) {

            clearInterval(this.update)

            this.containerVideo.appendChild(this.infoVideo)

            const title = document.querySelector(".video--title")
            const watch = document.querySelector(".video--watch")
            const play = document.querySelector(".video--play img")

            if (title && watch) {
                this.infoVideo.removeChild(title)
                this.infoVideo.removeChild(watch)
            }

            play.src = "../../../src/assets/images/Reload.svg"

        }
    }

    static setTimer(ev) {
        const bar = document.querySelector(".container-video__strip")

        const result = (ev.clientX / bar.clientWidth) * 100

        this.video.currentTime = (this.video.duration * result) / 100
    }

}

export default Video