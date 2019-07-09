//MouseEnter MouseLeave
var aLinks = document.querySelectorAll('a');
var mouseEnters = function() { event.target.style.color = 'red' }
var mouseLeaves = function() { event.target.style.color = '' }
for (var i = aLinks.length - 1; i >= 0; --i) {
    aLinks[i].onmouseenter = mouseEnters;
    aLinks[i].onmouseleave = mouseLeaves;
}

//KeyDown KeyUp
logoHeading = document.querySelector('.logo-heading');
document.addEventListener('keydown', (event) => { logoHeading.textContent = 'Hello' });
document.addEventListener('keyup', (event) => { logoHeading.textContent = 'Fun Bus' });


const button1 = document.querySelectorAll('.destination .btn')[0]
const button2 = document.querySelectorAll('.destination .btn')[1]
const button3 = document.querySelectorAll('.destination .btn')[2]

button1.addEventListener('click', (event) => {
    button1.style.background = 'purple'
    button1.innerHTML = 'Pop!'

})

button2.addEventListener('dblclick', (event) => {
    button2.style.background = 'blue'
    button2.innerHTML = 'Double Click!'
})

button3.addEventListener('mouseover', (event) => {
    button3.style.background = 'green'
    button3.innerHTML = 'Green Version'
})
window.addEventListener('load', (event) => {
    alert("The Page Loaded");
});

const funBusImage = document.querySelector('.intro img');
funBusImage.addEventListener('mousedown', (event) => {
    funBusImage.style.width = '50%'
    funBusImage.style.display = 'block'
    funBusImage.style.margin = '0 auto'
})
funBusImage.addEventListener('mouseup', (event) => {
    funBusImage.style.width = ''
    funBusImage.style.display = ''
    funBusImage.style.margin = ''
})

//preventdefault
for (var i=0; i < aLinks.length; i++) {
    aLinks[i].addEventListener('click', (event) => {
        event.preventDefault();
        // console.log("target:", event.target);
    });}

const navBar = document.querySelector('.nav-container');
const checkBox = document.createElement('input');
const label = document.createElement('label');

checkBox.type = 'checkbox';
checkBox.id = 'stopProp';


label.htmlFor = 'stopProp';
label.style.font = '16px roboto';
label.style.marginRight = '-75px';

label.appendChild(document.createTextNode('Stop Propogation'));
navBar.append(label);
navBar.append(checkBox);

const intro = document.querySelector('.intro')
const button = document.createElement('button')
// button.type = 'submit';
button.id = 'button'
button.innerHTML = 'Click Me'
button.style.display = 'block'
button.style.margin = '1rem auto'

intro.prepend(button)

body = document.querySelector('body');
body.addEventListener('click', (event) => {
    alert('Check the Stop Propogation Box');
    })
    
    button.addEventListener('click', (event) => {
        alert('The propogation no longer reaches the body element when the stop propogation box is checked');
        if (document.getElementById("stopProp").checked) {
            event.stopPropagation();
        }
    })

