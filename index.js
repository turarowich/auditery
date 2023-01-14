const paginations = $('.welcome-content-paginate')
// paginations[0].toggleClass('welcome-content-paginate-active')
paginations[0].classList.add('welcome-content-paginate-active')

paginations[0].addEventListener('click', () => {
    $('.welcome').css('background', 'url(./assets/bg.png)')
    paginations[0].classList.add('welcome-content-paginate-active')
    paginations[1].classList.remove('welcome-content-paginate-active')
    paginations[2].classList.remove('welcome-content-paginate-active')
})


paginations[1].addEventListener('click', () => {
    $('.welcome').css('background', 'url(./assets/bg1.png)')
    paginations[0].classList.remove('welcome-content-paginate-active')
    paginations[1].classList.add('welcome-content-paginate-active')
    paginations[2].classList.remove('welcome-content-paginate-active')
})

paginations[2].addEventListener('click', () => {
    $('.welcome').css('background', 'url(./assets/bg2.png)')
    paginations[0].classList.remove('welcome-content-paginate-active')
    paginations[1].classList.remove('welcome-content-paginate-active')
    paginations[2].classList.add('welcome-content-paginate-active')
})