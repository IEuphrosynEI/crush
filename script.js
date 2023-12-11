const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

// Function to change the GIF, body background, and font color when "Yes" button is clicked
const changeGif = () => {
    const myGifElement = document.querySelector('.question-icon');
    myGifElement.src = 'https://i.pinimg.com/originals/7c/81/75/7c8175bdd911006f63f1f6ee9aa90830.gif'; // Replace with the actual URL
    
    // Change the body background to black
    document.body.style.backgroundColor = 'black';

    // Change the font color of "Pake ko?" to black
    question.style.color = 'black';
};

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Pake ko?';
    yesBtn.style.display = 'none'; // Hide the Yes button
    noBtn.style.display = 'none';  // Hide the No button
    changeGif(); // Call the function to change the GIF, body background, and font color
});

noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the viewport
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

    // Change the source of the image to a random picture or GIF URL
    const randomImageUrl = 'https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif'; // Replace with the actual URL
    const myImageElement = document.querySelector('.random-image');
    myImageElement.src = randomImageUrl;
});

document.addEventListener('DOMContentLoaded', () => {
    // Add a click event listener to the "Yes" button
    yesBtn.addEventListener('click', changeGif);
});
