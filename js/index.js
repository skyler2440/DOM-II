const linksin = document.querySelectorAll('a');
for (var i=0; i < linksin.length; i++) {
    linksin[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'blue'
        // console.log("target:", event.target);
        });
}
const linksout = document.querySelectorAll('a');
for (var i=0; i < linksout.length; i++) {
    linksout[i].addEventListener('mouseout', (event) => {
        event.target.style.color = 'black'
        // console.log("target:", event.target);
    });}