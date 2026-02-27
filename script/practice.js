btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    if (switch == "bigger")
    {
        btn.style.width = "200px"
        btn.style.height = "200px"
        switch = "smaller"
    }
    if (switch == "smaller")
    {
        btn.style.height = "50px"
        btn.style.width = "50px"
        switch = "bigger"
    }


)
