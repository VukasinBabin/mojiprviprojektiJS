let btn = document.getElementById('btn');

let output = document.getElementById('output');
let quote =
 [
    "Nije majka picku rodila!",
    "Nema povlacnja, nema predaje!",
    "Sta ti se danas cini teskim, sutra ce biti tvoje postignuce!",
    "Sve je moguce onom ko veruje!",
    "Bog ima bolji plan!",
    "Sam si sebi najveca prepreka.",
    "Disi, ispravi se, mozes ti to!",
    "Sve je lakse od skupljanja sljiva",
    "Nikad vise danas, nikad vise ti ovakav, kad ako ne sad?"
];

btn.addEventListener('click', function(){
var randomQuote = quote[Math.floor(Math.random() * quote.length)]
output.innerHTML = randomQuote;
});