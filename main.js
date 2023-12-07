const container = document.querySelector('.container');
const question = document.querySelector('.question');
const whisper = document.querySelector('.whisper');
const image = document.querySelector('.image');
const yesBtn = document.querySelector('.btn-yes');
const noBtn = document.querySelector('.btn-no');

const containerRect = container.getBoundingClientRect(); 
const noBtnRect = noBtn.getBoundingClientRect(); 

yesBtn.addEventListener('click', () => {
    question.innerHTML = "I knew you wouldn't say no !";
});

yesBtn.addEventListener('click', () => {
    whisper.innerHTML = '(yay)';
});

yesBtn.addEventListener('click', () => {
    image.src = 'img/after.gif';
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });