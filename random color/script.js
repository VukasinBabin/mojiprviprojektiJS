let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);


const rgb = document.getElementById('rgb');
rgb.innerText = `rgb(${red},${green},${blue})`
document.body.style.backgroundColor = `rgb(${red},${green},${blue})`