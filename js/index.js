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