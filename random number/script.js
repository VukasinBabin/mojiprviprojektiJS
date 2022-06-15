const number = document.getElementById('number');

const btn = document.getElementById('generateBtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor( Math.random() * 100 + 1);
    
    number.textContent = randomNumber;
   
};
 generateBtn.addEventListener('click', randomNumberGenerator)
randomNumberGenerator();