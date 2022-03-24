const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//set first img opacity
img[0].style.opacity = opacity;


imgs.addEventListener('click', imgClick);

function imgClick(e) {
    //reset opacity
    img.forEach(img => (img.style.opacity = 1));

    //change current img to src of clicked img
    current.src = e.target.src;

    //add fade in class
    current.classList.add('fade-in');

    // set timeout remove fade-in class after .5s
    setTimeout(() => current.classList.remove('fade-in'), 500);
    

    //change opacity to var
    e.target.style.opacity = opacity;
}

