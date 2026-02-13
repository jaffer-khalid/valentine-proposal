const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const gif = document.getElementById('gif');

let noclickcount = 1;

let yesSize = 100;
let noSize = 100;

let yesFontSize = 35;
let noFontSize = 35;

const steps = [
    {
        message: "I think your hand slipped. Try again 😁",
        gif: "20260211_185448.gif"
    },

    {
        message: "I think your aim is a bit off 😅",
        gif: "tkthao219-peach.gif"
    },

    {
        message: "Really?! Three times in a row? ☹️",
        gif: "output-onlinegiftools (3).gif"
    },

    {
        message: "Don't break my heart like this 🥺",
        gif: "e97aab507efba22ab7bec84e2bc72ffd.gif"
    },

    {
        message: "Wow! Wow! So that's how it is? 😮",
        gif: "output-onlinegiftools.gif"
    },

    {
        message: "I stayed up coding this for you...😞",
        gif: "output-onlinegiftools (2).gif"
    },

    {
        message: "This is getting personal now 😒",
        gif: "20260212_120149.gif"
    },

    {
        message: "'Yes' is literally right there 🙄",
        gif: "mochicat-king.gif"
    },

    {
        message: "Testing my emotional stability? 🤨",
        gif: "ezgif.com-animated-gif-maker (1).gif"
    },

    {
        message: "Fine! I'll just wait here... 🙎‍♂️",
        gif: "20260211_185223.gif"
    }
];


noBtn.addEventListener('click', () => {

    if (noclickcount <= steps.length) {
        if (noclickcount < steps.length) {
            message.textContent = steps[noclickcount - 1].message;
            gif.src = steps[noclickcount - 1].gif;
            noclickcount++;

            yesSize += 7;
            yesFontSize += 3;
            yesBtn.style.width = yesSize + "px";
            yesBtn.style.height = yesSize + "px";

            yesBtn.style.fontSize = yesFontSize + "px";


            noSize -= 7;
            noFontSize -= 3;
            noBtn.style.width = noSize + "px";
            noBtn.style.height = noSize + "px";

            noBtn.style.fontSize = noFontSize + "px";
        }


        if (noclickcount == steps.length) {
            message.textContent = steps[noclickcount - 1].message;
            gif.src = steps[noclickcount - 1].gif;
            noBtn.style.display = "none";

        }
    }
});

yesBtn.addEventListener('click', () => {
    message.textContent = "🎉 YAY! YOU SAID YES! 😁 🎉";
    noBtn.style.display = "none";
    gif.src = "729012a6c4988e66e46664870b94dd15.gif";
    yesBtn.style.transform = "scale(1.16)";
    document.body.style.animation = "flash 0.2s alternate 10";

});
