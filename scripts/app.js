// console.log('Yo')
// const body = document.querySelector('body')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

// const slide = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         changeSlide('up')
//         resolve()
//     },1500)
// }).then
//

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        changeSlide('up')
        setTimeout(() => {
            changeSlide('up')
            setTimeout(() => {
                changeSlide('up')
                setTimeout(() => {
                    changeSlide('up')
                    setTimeout(() => {
                        changeSlide('up')
                        setTimeout(() => {
                            changeSlide('up')
                            setTimeout(() => {
                                changeSlide('up')
                                setTimeout(() => {
                                    changeSlide('up')
                                },1500)
                            },1500)
                        },1500)
                    },1500)
                },1500)
            },1500)
        },1500)
    },1500)
})


upBtn.addEventListener('click', function () {
    changeSlide('up')
})
downBtn.addEventListener('click', function () {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

function go() {
    setTimeout(() => {
        changeSlide('up')
        resolve()
    },1500)
}