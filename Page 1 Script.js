document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enterButton');
    const fadeOut = document.getElementById('fadeOut');

    enterButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        fadeOut.style.opacity = '1'; // Start the fade-out effect
        setTimeout(() => {
            window.location.href = enterButton.href; // Redirect after fade-out
        }, 1000); // Match this time with the CSS transition duration
    });
});
