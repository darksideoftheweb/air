const burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav--active')
    document.querySelector('.nav').classList.toggle('nav--translate')
    burger.classList.toggle('burger--active')
})


window.addEventListener('load', function () {
    document.querySelector('.container').classList.add('animate');
});