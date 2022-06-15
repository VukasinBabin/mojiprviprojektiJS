let celsius = document.getElementById('celsius');
let faradej = document.getElementById('faradej');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) *9) / 5 + 32;
    faradej.value = parseFloat(output.toFixed(2));
};

faradej.oninput = () => {
    let output = (parseFloat(faradej.value) *9) / 5 + 32;
    celsius.value = parseFloat(output.toFixed(2));
};