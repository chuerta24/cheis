search = document.querySelection('.search')
btn = document.querySelection('.btn')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})
