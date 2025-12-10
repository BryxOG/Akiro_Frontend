document.addEventListener('DOMContentLoaded', (event) => {
    const loginButton = document.querySelector('.login-button');
    const mainContainer = document.querySelector('.main-container');

    if (loginButton && mainContainer) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();

            mainContainer.classList.add('slide-out');

            const animationDuration = 700;

            setTimeout(() => {
                window.location.href = '/CabinetPage/CabinetIndex.html';
            }, animationDuration);
        });
    }
});