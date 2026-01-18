const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const catImg = document.getElementById('cat-img');

// Function to move the "No" button randomly
noBtn.addEventListener('mouseover', () => {
    // Calculate a random X and Y position within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Set the button's position to fixed so it moves relative to the viewport
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function for the "Yes" button click
yesBtn.addEventListener('click', () => {
    question.innerHTML = "I love you too! ❤️";
    // Optional: Change the image/GIF to a happy one
    catImg.src = "https://imgs.search.brave.com/3q0iGnYptz8-yiFeaZM6UmbGxTjfvBPsg5F84tCYezk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvY2F0LWJs/aW5rLWdpZi1wcmx2/OGRkZnlkZTM5OWVx/LmdpZg.jpeg"; 
    noBtn.style.display = 'none';
});