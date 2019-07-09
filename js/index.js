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

document.querySelector('')