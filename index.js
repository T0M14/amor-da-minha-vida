document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    yesButton.addEventListener('click', () => {
        window.location.href = 'https://youtu.be/lVSBxYjGLPs?si=kjMwdsON5fylrIpY';
    });

    noButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.getElementById('hearts-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
