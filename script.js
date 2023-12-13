// script.js

// Get the current year
const currentYear = new Date().getFullYear();

document.getElementById('my-footer').innerHTML = `&copy; ${currentYear} Emmar Cabading. All rights reserved.`;

document.getElementById('btn-alert').addEventListener('click', function () {
    alert('Hello Universe!');
});

const hoverButton = document.getElementById('btn-hover');

// Add event listeners for mouseover and mouseleave
hoverButton.addEventListener('mouseover', function () {
    hoverButton.innerText = 'Have a great day!';
});

hoverButton.addEventListener('mouseleave', function () {
    hoverButton.innerText = 'Hover over me';
});

let count = 1;

// Add an event listener to the incrementing button
document.getElementById('btn-counter').addEventListener('click', function () {
    count++;
    document.getElementById('txt-counter').innerHTML = `Number: ${count}`;

    const counterElement = document.getElementById('txt-counter');
    counterElement.classList.remove('even', 'odd');
    
    if (count % 2 === 0) {
        counterElement.classList.add('even');
    } else {
        counterElement.classList.add('odd');
    }
});

// Get the ordered list element
const numbersList = document.getElementById('numbers');

// Loop to populate the ordered list with 100 child elements
for (let i = 1; i <= 100; i++) {
   
    const listItem = document.createElement('li');
    
   
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    
 
    numbersList.appendChild(listItem);
}