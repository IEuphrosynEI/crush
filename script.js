const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Pake ko?';
    

    yesBtn.style.display = 'none'; // Hide the Yes button
    noBtn.style.display = 'none';  // Hide the No button
});

noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the viewport
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
    const myGifElement = document.querySelector('.question-icon');
    const yesBtn = document.querySelector('.yes-btn');

    // Function to change the GIF when "Yes" button is clicked
    const changeGif = () => {
        // Replace the src attribute with the URL of the new GIF
        myGifElement.src = 'https://i.pinimg.com/originals/7c/81/75/7c8175bdd911006f63f1f6ee9aa90830.gif'; // Replace with the actual URL
    };

    // Add a click event listener to the "Yes" button
    yesBtn.addEventListener('click', changeGif);
});