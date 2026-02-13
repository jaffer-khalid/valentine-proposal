const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const gif = document.getElementById('gif');

const romanticMusic = new Audio("George Michael - Careless Whisper.mp3");
romanticMusic.loop = true;

let noclickcount = 0;
let n = 0;

let yesSize = 100;
let noSize = 100;

let yesFontSize = 35;
let noFontSize = 35;

const steps = [
    {
        message: "I think your hand slipped. Try again 😁",
        gif: "20260211_185448.gif",
        sound: new Audio("Voicy_huh .mp3")
    },

    {
        message: "I think your aim is a bit off 😅",
        gif: "tkthao219-peach.gif",
        sound: new Audio("Voicy_vine boom.mp3")
    },

    {
        message: "Really?! Three times in a row? ☹️",
        gif: "output-onlinegiftools (3).gif",
        sound: new Audio("Voicy_emotional damage.mp3")
    },

    {
        message: "Don't break my heart like this 🥺",
        gif: "e97aab507efba22ab7bec84e2bc72ffd.gif",
        sound: new Audio("Voicy_BIBLETHUMP (sad violin).mp3")
    },

    {
        message: "Wow! Wow! So that's how it is? 😮",
        gif: "output-onlinegiftools.gif",
        sound: new Audio("Voicy_God Damn! Meme.mp3")
    },

    {
        message: "I stayed up coding this for you 😞",
        gif: "output-onlinegiftools (2).gif",
        sound: new Audio("Voicy_Among Us - All vote out typing.mp3")
    },

    {
        message: "This is getting personal now 😒",
        gif: "20260212_120149.gif",
        sound: new Audio("Voicy_I will send you to jesus.mp3")
    },

    {
        message: "'Yes' is literally right there 🙄",
        gif: "mochicat-king.gif",
        sound: new Audio("Voicy__slap_ OH!.mp3")
    },

    {
        message: "Testing my emotional stability? 🤨",
        gif: "ezgif.com-animated-gif-maker (1).gif",
        sound: new Audio("Voicy_zombie scream COD.mp3")
    },

    {
        message: "Fine! I'll just wait here... 🙎‍♂️",
        gif: "20260211_185223.gif",
        sound: new Audio("Voicy_Elevator.mp3")
    }
];


noBtn.addEventListener('click', () => {

    if (noclickcount <= steps.length) {
        if (noclickcount < steps.length) {
            message.textContent = steps[noclickcount].message;
            gif.src = steps[noclickcount].gif;
            steps[noclickcount - n].sound.pause(); // for audio not to overlap
            steps[noclickcount].sound.currentTime = 0;
            steps[noclickcount].sound.play();

            noclickcount++;

            if (noclickcount >= 1) { // for audio not to overlap
                n = 1;
            }

            yesSize += 5;
            yesFontSize += 2;
            yesBtn.style.width = yesSize + "px";
            yesBtn.style.height = yesSize + "px";

            yesBtn.style.fontSize = yesFontSize + "px";


            noSize -= 6;
            noFontSize -= 3;
            noBtn.style.width = noSize + "px";
            noBtn.style.height = noSize + "px";

            noBtn.style.fontSize = noFontSize + "px";
        }


        if (noclickcount == steps.length) {
            message.textContent = steps[noclickcount - 1].message;
            gif.src = steps[noclickcount - 1].gif;
            steps[noclickcount - 1].sound.currentTime = 0;
            steps[noclickcount - 1].sound.play();
            noBtn.style.display = "none";

        }
    }
});

yesBtn.addEventListener('click', () => {
    message.textContent = "🎉 Ooh...You said yes? Good girl 😏 🎉";
    noBtn.style.display = "none";
    gif.src = "729012a6c4988e66e46664870b94dd15.gif";
    yesBtn.style.transform = "scale(1.16)";
    document.body.style.animation = "flash 0.2s alternate 10";
    steps[noclickcount - n].sound.pause(); // for audio not to overlap
    romanticMusic.play();

});
