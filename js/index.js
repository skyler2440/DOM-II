// Variables
const linksin = document.querySelectorAll('a');
let logoHeading = document.querySelector('.logo-heading');
const linksout = document.querySelectorAll('a');
let button1 = document.querySelectorAll('.destination .btn')[0]
let button2 = document.querySelectorAll('.destination .btn')[1]
let button3 = document.querySelectorAll('.destination .btn')[2]
//================================Mouseovers&Clicks

//1 Mouseover
for (var i=0; i < linksin.length; i++) {
    linksin[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'blue'
        // console.log("target:", event.target);
        });
}
//1.2
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    event.target.style.cursor = 'pointer';
})
//2 Mouse Out
for (var i=0; i < linksout.length; i++) {
    linksout[i].addEventListener('mouseout', (event) => {
        event.target.style.color = 'black'
        // console.log("target:", event.target);
    });}
//2.2
logoHeading.addEventListener('mouseout', (event)=> {
    event.target.style.color = 'black';
})
//3 Click
logoHeading.addEventListener('click', (event) => {
    alert('Thank for Visiting Fun Bus! Subscribe for Updates!');
})
//3.2
button1.addEventListener('click', (event) => {
    button1.style.background = 'purple'
    button1.innerHTML = 'Pop!'
})
//4 Dblclick

button2.addEventListener('dblclick', (event) => {
    button2.style.background = 'blue'
    button2.innerHTML = 'Double Click!'
})
//5 MouseEnter
button3.addEventListener('mouseenter', (event) => {
    button3.style.background = 'green'
    button3.innerHTML = 'Green Version'
})
//6 MouseLeave
button3.addEventListener('mouseleave', (event) => {
    button3.style.background = '#17A2B8'
    button3.innerHTML = 'Sign Me Up!'
})
//========================================Global Functions
//7 Window Alert
window.addEventListener('load', (event) => {
        alert("The Page Loaded");
});


