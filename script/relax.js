const container = document.getElementById('container')
const text = document.getElementById('text')

const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation() {
    text.innerText = 'Breathe In!'

    container.classList.remove('shrink')
    container.classList.remove('grow')
    void container.offsetWidth
    container.classList.add('grow')

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out!'

            container.classList.remove('grow')
            container.classList.remove('shrink')
            void container.offsetWidth
            container.classList.add('shrink')

        }, holdTime)

    }, breathTime)
}

setInterval(breathAnimation, totalTime)
