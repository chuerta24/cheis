clickBox = document.querySelector('.click')
spinBox = document.querySelector('.spin')
moveBox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblClick = document.querySelector('.dblclick')

colors = ['blue', 'green', 'purple', 'red']
index = 0

clickBox.addEventListener('click', () => {
    clickBox.style.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle('start')
})

x = 0
y = 0
s = 0

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x = x + 10;
        moveBox.style.transform = `translate(${x}px, ${y}px, ${s}px)`
    }
    if (event.key == 'ArrowUp') {
        y = y - 10;
        moveBox.style.transform = `translate(${x}px, ${y}px, ${s}px)`
    }
    if (event.key == 'ArrowDown') {
        s = s - 10;
        moveBox.style.transform = `translate(${x}px, ${y}px, ${s}px)`
    }
})
