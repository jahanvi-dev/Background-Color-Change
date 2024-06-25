// Selecting body & button
let body = document.querySelector('body');
let button = document.querySelector('button');


// Adding event listener to button for changing colors
button.addEventListener('click', function(){

    // genrating random colors
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

    // setting colors in background
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}) 
