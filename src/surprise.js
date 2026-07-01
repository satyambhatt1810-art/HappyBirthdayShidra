import "./surprise.css";
import { gsap } from "gsap";

import "./particles.js";
import "./fireworks.js";

import "./animations.js";

document.querySelector("#app").innerHTML = `

<div class="luxury-bg"></div>

<div class="glass">

    <h1 class="title">
        🎂 Happy Birthday Shidra 💖
    </h1>

    <p class="subtitle">
        Welcome to your magical birthday experience ✨
    </p>
    <div class="buttons">

    <button id="musicBtn">🎵 Music</button>

    <button id="giftBtn">🎁 Gift</button>

</div>

<div class="gift-container">

    <div class="gift-box" id="giftBox">
        🎁
    </div>

    <h3>Click the Gift</h3>

</div>

    <div class="letter">

    <h2>💌 A Letter For You</h2>

    <p id="message"></p>

</div>

</div>
<div class="letter">
   ...
</div>

<div class="secret-box">

    <h2>🔐 Secret Message</h2>

    <input
        type="password"
        id="password"
        placeholder="Enter Password"
    >

    <button id="unlockBtn">Unlock ❤️</button>

    <p id="secretText"></p>

</div>

</div>



<section class="gallery">

    <h2>📸 Beautiful Memories</h2>

    <div class="gallery-grid">

    <img src="./images/photo1.jpeg" class="photo">
<img src="./images/photo2.jpeg" class="photo">
<img src="./images/photo3.jpeg" class="photo">
<img src="./images/photo4.jpeg" class="photo">

const music = new Audio("./music/birthday.mp3");

</div>

</section>

<div id="lightbox" class="lightbox">

    <button id="prevBtn">◀</button>

    <img id="lightboxImg">

    <button id="nextBtn">▶</button>

</div>
<div class="particles"></div>

`;
const music = new Audio("/music/birthday.mp3");

music.loop = true;

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Music";

    }

});
gsap.from(".glass", {

    y: 80,

    opacity: 0,

    duration: 1.3,

    ease: "power3.out"

});

gsap.from(".title", {

    scale: 0.5,

    opacity: 0,

    duration: 1,

    delay: 0.3

});

gsap.from(".subtitle", {

    opacity: 0,

    y: 30,

    duration: 1,

    delay: 0.6

});
const particles = document.querySelector(".particles");

for (let i = 0; i < 120; i++) {

    const dot = document.createElement("div");

    dot.className = "dot";

    dot.style.left = Math.random() * 100 + "vw";

    dot.style.top = Math.random() * 100 + "vh";

    dot.style.animationDuration = (4 + Math.random() * 6) + "s";

    dot.style.animationDelay = Math.random() * 5 + "s";

    particles.appendChild(dot);

}
const text = `Happy Birthday, Shidra! 🎉❤️

On your special day, I just want you to know how grateful I am to have you as my best friend.

You are one of the kindest, strongest, and most genuine people I know.

Thank you for always being there through every laugh, every challenge, and every unforgettable memory.

Your friendship means more to me than words can ever express.

I hope this new year of your life brings you endless happiness, good health, success, and all the love you truly deserve.

Keep smiling, keep chasing your dreams, and never stop being the amazing person you are.

May every day ahead be filled with beautiful moments and countless reasons to smile.

Wishing you the happiest birthday ever, my best friend.

Have an incredible year ahead! 🎂🎁✨`;

const message = document.getElementById("message");

let i = 0;

function typeWriter() {

    if (i < text.length) {

        message.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 28);

    }

}

typeWriter();
const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", () => {

    giftBox.innerHTML = "💖";

    gsap.to(giftBox, {
        scale: 2,
        rotation: 360,
        duration: 1
    });
    for (let i = 0; i < 50; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 30);
        for (let i = 0; i < 12; i++) {

            setTimeout(() => {

                createFirework();

            }, i * 250);

        }
    }


});

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.className = "heart-pop";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);

}

function createFirework() {

    const firework = document.createElement("div");

    firework.className = "firework";

    firework.style.left = Math.random() * window.innerWidth + "px";
    firework.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(firework);

    setTimeout(() => {

        firework.remove();

    }, 1000);

}
const photos = document.querySelectorAll(".photo");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

let currentIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        currentIndex = index;

        lightbox.style.display = "flex";

        lightboxImg.src = photos[currentIndex].src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});
nextBtn.addEventListener("click", () => {

    currentIndex = (currentIndex + 1) % photos.length;

    lightboxImg.src = photos[currentIndex].src;

});

prevBtn.addEventListener("click", () => {

    currentIndex = (currentIndex - 1 + photos.length) % photos.length;

    lightboxImg.src = photos[currentIndex].src;

});
const unlockBtn = document.getElementById("unlockBtn");
const password = document.getElementById("password");
const secretText = document.getElementById("secretText");

unlockBtn.addEventListener("click", () => {

    if (password.value === "shidra") {

        secretText.innerHTML = `
❤️ Secret Message ❤️<br><br>

I love you more than as a friend,<br>
but less than as a boyfriend.<br><br>

No matter what life brings,<br>
you will always have a special place in my heart. 💖
`;

    } else {

        secretText.innerHTML = "❌ Wrong Password";

    }

});