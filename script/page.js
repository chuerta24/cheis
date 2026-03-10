btn = document.querySelector('.btn')

colors = ['blue', 'green', 'purple', 'red', 'white', 'yellow', 'orange', 'pink', 'indigo']
index = 0

btn.addEventListener('click', () => {
    document.body.style.background = colors[index]

    index = index + 1

    if (index == colors.length){
        index = 0
    }
        btn.textContent = "Click Me!!"
})
