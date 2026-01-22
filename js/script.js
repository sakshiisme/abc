document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = document.querySelector('.phone-number');
    const email = document.querySelector('.email');

    phoneNumber.addEventListener('click', function() {
        window.location.href = 'tel:+919811032474';
    });

    email.addEventListener('click', function() {
        window.location.href = 'mailto:aadinathboxcorporation@gmail.com';
    });
});