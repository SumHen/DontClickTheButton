const btn = document.getElementById("button");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const heading = document.querySelector("h");
let acceptCounter = 0;
let escapeCounter = 0;


btn.addEventListener('mouseover', () => {
    escapeCounter++;

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 300);

    btn.style.left = x + 'px';
    btn.style.top = y + 'px';

    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);

    if (escapeCounter === 10) {
        setTimeout(() => {
            alert("chased me 10 times!");
        }, 300); 
    }

    if (escapeCounter === 15) {
        btn.classList.add('hidden');
        btn2.classList.remove('hidden');
        btn3.classList.remove('hidden');
        setTimeout(() => {
            alert("The button got tired of running! Here are two new challenges!");
        }, 300);
        heading.textContent = "The button got tired of escaping, it offered a deal, will you accept?";
    }
});


btn.addEventListener('click', () => {
    btn.style.left = '50%';
    btn.style.top = '50%';
    alert("Hey! You weren't supposed to click that!");
});

btn3.addEventListener('click', () => {
    const currentSize = parseFloat(window.getComputedStyle(heading).fontSize) || 16;
    const newSize = currentSize + 7;

    heading.style.fontSize = `${newSize}px`;
    heading.style.transition = 'font-size 0.3s ease';
    heading.style.color = `hsl(${newSize * 5}, 100%, 50%)`;
    heading.textContent = "Wrong";
});

btn2.addEventListener('click', () => {
    acceptCounter++;
    heading.style.fontSize = `50px`;
    heading.style.color = `black`;
    heading.textContent = `Deal Accepted!`;
    btn3.disabled = true;
    

    if (acceptCounter >= 5) heading.textContent = "OK now you can stop";
    if (acceptCounter >= 8) heading.textContent = "Bro stop";
    if (acceptCounter >= 12) heading.textContent = "Fine you won, just stop";
    if (acceptCounter >= 15) heading.textContent = "Ayo chill";
    if (acceptCounter >= 20) heading.textContent = "-_-";
    if (acceptCounter >= 22) {
        btn2.disabled = true;
        alert("Button disabled, reason: clicked too many times");
    }


const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
for (let i = 0; i < 150; i++) {
    setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = '-20px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { top: '-20px', opacity: 1, transform: 'rotate(0deg)' },
            { 
                top: `${window.innerHeight + 20}px`, 
                opacity: 0,
                transform: 'rotate(360deg)',
                left: `${Math.random() * window.innerWidth}px`
            }
        ], {
            duration: 2000 + Math.random() * 3000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }, i * 20);
}
});