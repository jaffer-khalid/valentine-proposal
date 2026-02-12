const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const gif = document.getElementById('gif');

let noclickcount = 0;

const gifsrc = ["20260211_185448.gif",
    "tkthao219-peach.gif",
    "output-onlinegiftools (3).gif",
    "e97aab507efba22ab7bec84e2bc72ffd.gif",
    "output-onlinegiftools.gif",
    "output-onlinegiftools (2).gif",
    "20260212_120149.gif",
    "mochicat-king.gif",
    "ezgif.com-animated-gif-maker (1).gif",
    "20260211_185223.gif"
 ];

const messages = ["I think your hand slipped. Try again 😁",
    "I think your aim is a bit off 😅",
    "Really?! Three times in a row? ☹️",
    "Don't break my heart like this 🥺",
    "Wow! Wow! So that's how it is? 😮",
    "I stayed up coding this for you...😞",
    "This is getting personal now 😒",
    "Yes' is literally right there 🙄",
    "Testing my emotional stability? 🤨",
    "Fine! I'll just wait here... 🙎‍♂️"
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
    message.textContent = "🎉 YAY! Happy Valentine! 🎉";
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.5)';
    yesBtn.style.transition = 'all 0.3s ease';
});
