// Variables
const links = document.querySelectorAll('a');
let logoHeading = document.querySelector('.logo-heading');
// const out = document.querySelectorAll('a');
let button1 = document.querySelectorAll('.destination .btn')[0]
let button2 = document.querySelectorAll('.destination .btn')[1]
let button3 = document.querySelectorAll('.destination .btn')[2]
const textContentParagraph = document.querySelector('.text-content p');
const textContent = document.querySelector('.text-content');
const formChange = document.querySelector('input');
//================================Mouseovers&Clicks

//1 Mouseover
for (var i=0; i < links.length; i++) {
    links[i].addEventListener('mouseover', (event) => {
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
for (var i=0; i < links.length; i++) {
    links[i].addEventListener('mouseout', (event) => {
        event.target.style.color = 'black'
        // console.log("target:", event.target);
    });}
//2.2
logoHeading.addEventListener('mouseout', (event)=> {
    event.target.style.color = 'black';
})
//3 Click
logoHeading.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Thank for Visiting Fun Bus! Subscribe for Updates!');

})
//3.2
button1.addEventListener('click', (event) => {
    button1.style.background = 'purple'
    button1.innerHTML = 'Pop!'

})
// 3.3 stopprop
textContent.addEventListener('click', (event) => {
    alert('Text Content Alert');
})

textContentParagraph.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Paragraph Alert');
});
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
//8 preventdefault
for (var i=0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        // console.log("target:", event.target);
    });}


//9 onfocus

formChange.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

//10 onblur
formChange.addEventListener('blur', (event) => {
    event.target.style.background = '';
});