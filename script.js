const addToCartButtons = document.querySelectorAll('.addToCartBtn');
const submitSections = document.querySelectorAll('.btn-submit');
const iconCloses = document.querySelectorAll('.icon-close');
const iconShows = document.querySelectorAll('.icon-show');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        submitSections.forEach((section) => {
            section.classList.remove('show-submit');
        });
        submitSections[index].classList.add('show-submit');
        iconCloses[index].style.display = 'block';
        iconShows[index].style.display = 'block';
    });
});

iconCloses.forEach((close, index) => {
    close.addEventListener('click', () => {
        submitSections[index].classList.remove('show-submit');
        iconCloses[index].style.display = 'none';
        iconShows[index].style.display = 'none';
    });
});

