const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

let noclickcount = 0;

const messages = ["I think your hand slipped, but it's okay. let's try again.",
    "I think your aim is a bit off. But alright then, let's try it again.",
    "Really?! Three times in a row?",
    "Come on... don't break my heart like this.",
    "Wow! Wow! So that's how it is?",
    "I stayed up coding this for you...",
    "This is getting personal now.",
    "The 'Yes' button is literally right there.",
    "Are you testing my emotional stability?",
    "Fine! I'll just wait here..."
];



noBtn.addEventListener('click', () => {
    noclickcount++;
    if (noclickcount < messages.length) {
        message.textContent = messages[noclickcount - 1];
    }




    if (noclickcount == messages.length) {
        noBtn.style.display = 'none';
        message.textContent = messages[noclickcount - 1];
    }
});

yesBtn.addEventListener('click', () => {
    message.textContent = "🎉 YAY! You said YES! Happy Valentine! 🎉";
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.5)';
    yesBtn.style.transition = 'all 0.3s ease';
});
