const button = document.querySelector('button');
const backg = document.querySelector('body');

button.addEventListener('click',() => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    backg.style.backgroundColor = color;
    console.log(color);
})