
const addToCartBtns = document.querySelectorAll('.addToCartBtn');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const submitSectionId = this.getAttribute('data-submit-section');
        const submitSection = document.getElementById(submitSectionId);
        const iconClose = document.querySelector('.icon-close');
        const iconShow = document.querySelector('.icon-show');
        this.style.display = 'none';
        submitSection.style.display = 'block';
        iconClose.style.display = 'block';
        iconShow.style.display = 'block';

    });
});

document.querySelectorAll('.icon-close').forEach(icon => {
    icon.addEventListener('click', function () {
        const submitSectionId = this.getAttribute('data-submit-section');
        const addToCartBtn = document.getElementById(submitSectionId);
        addToCartBtn.style.display = 'block';
        this.style.display = "none";
        document.getElementById(submitSectionId).style.display = 'none';
    });
});
