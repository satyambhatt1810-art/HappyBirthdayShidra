import "./style.css";
import * as THREE from "three";
import { gsap } from "gsap";

document.querySelector("#app").innerHTML = `
<div class="scene">

<div class="background"></div>

<div class="hearts"></div>

<div class="card">

<h1>🎂 Happy Birthday</h1>

<h2>Shidra 💖</h2>

<p>Wishing you endless happiness, success, love and beautiful memories. ✨</p>

<button id="surpriseBtn">💝 Open Surprise</button>

<div id="popup" class="popup">
    <div class="popup-box">
        <h2>💖 Happy Birthday Shidra 💖</h2>

        <p>
            May every dream of yours come true,
            may your smile never fade,
            and may this birthday be the beginning
            of the most beautiful year of your life. ✨🎂💕
        </p>

        <button id="continueBtn">Continue ❤️</button>
    </div>
</div>

</div>

</div>
`;

const hearts = document.querySelector(".hearts");

// Hearts
for (let i = 0; i < 120; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (8 + Math.random() * 8) + "s";

    heart.style.animationDelay = Math.random() * 8 + "s";

    heart.style.transform = `scale(${0.5 + Math.random()}) rotate(45deg)`;

    hearts.appendChild(heart);
}

// Sparkles
for (let i = 0; i < 300; i++) {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.animationDuration = (1 + Math.random() * 3) + "s";

    sparkle.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(sparkle);

}
/* ============================
   LUXURY CLOUDS
============================ */

for (let i = 0; i < 8; i++) {

    const cloud = document.createElement("div");

    cloud.className = "cloud";

    cloud.style.width = (180 + Math.random() * 180) + "px";

    cloud.style.height = (70 + Math.random() * 30) + "px";

    cloud.style.left = (-300 * Math.random()) + "px";

    cloud.style.top = (Math.random() * 30) + "vh";

    cloud.style.animationDuration = (40 + Math.random() * 25) + "s";

    document.querySelector(".scene").appendChild(cloud);

}

/* ============================
   CHERRY BLOSSOM
============================ */

for (let i = 0; i < 250; i++) {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = (8 + Math.random() * 10) + "s";

    petal.style.animationDelay = Math.random() * 8 + "s";

    petal.style.opacity = .5 + Math.random() * .5;

    document.querySelector(".scene").appendChild(petal);

}

/* ============================
   FAIRY LIGHTS
============================ */

for (let i = 0; i < 150; i++) {

    const light = document.createElement("div");

    light.className = "fairy";

    light.style.left = Math.random() * 100 + "vw";

    light.style.top = Math.random() * 100 + "vh";

    light.style.animationDelay = Math.random() * 4 + "s";

    document.body.appendChild(light);

}
/* ============================
      LUXURY BALLOONS
============================ */

for (let i = 0; i < 35; i++) {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.animationDuration = (10 + Math.random() * 10) + "s";

    balloon.style.animationDelay = Math.random() * 5 + "s";

    balloon.style.transform = `scale(${0.7 + Math.random() * 0.8})`;

    document.querySelector(".scene").appendChild(balloon);

}
/* ============================
      LUXURY BUTTERFLIES
============================ */

for (let i = 0; i < 18; i++) {

    const butterfly = document.createElement("div");

    butterfly.className = "butterfly";

    butterfly.style.left = Math.random() * 100 + "vw";

    butterfly.style.top = Math.random() * 100 + "vh";

    butterfly.style.animationDuration = (12 + Math.random() * 8) + "s";

    butterfly.style.animationDelay = Math.random() * 5 + "s";

    document.querySelector(".scene").appendChild(butterfly);

}
/* ====================================
        THREE JS SCENE
==================================== */

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);

renderer.domElement.id = "threeCanvas";

document.body.appendChild(renderer.domElement);

camera.position.set(0, 0, 10);

/* Ambient Light */

const ambient = new THREE.AmbientLight(
    0xffffff,
    5
);

scene.add(ambient);

/* Point Light */

const light = new THREE.PointLight(
    0xffffff,
    20
);

light.position.set(
    0,
    5,
    8
);

scene.add(light);
/* ==========================
        3D STARS
========================== */

const starGeometry = new THREE.BufferGeometry();

const starCount = 1000;

const positions = [];

for (let i = 0; i < starCount; i++) {

    positions.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
    );

}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.15
});

const stars = new THREE.Points(
    starGeometry,
    starMaterial
);

scene.add(stars);
/* ===================================
          3D BIRTHDAY CAKE
=================================== */

// Cake Base
const cake = new THREE.Mesh(

    new THREE.CylinderGeometry(2, 2, 1, 64),

    new THREE.MeshStandardMaterial({

        color: 0xffc8dd,

        roughness: 0.3,

        metalness: 0.2

    })

);

cake.position.set(0, -3.8, 0);

scene.add(cake);


// Cream Layer

const cream = new THREE.Mesh(

    new THREE.CylinderGeometry(2.05, 2.05, 0.25, 64),

    new THREE.MeshStandardMaterial({

        color: 0xffffff

    })

);

cream.position.set(0, -3.35, 0);

scene.add(cream);


// Candle

const candle = new THREE.Mesh(

    new THREE.CylinderGeometry(0.08, 0.08, 0.9, 32),

    new THREE.MeshStandardMaterial({

        color: 0x87cefa

    })

);

candle.position.set(0, -2.65, 0);

scene.add(candle);


// Flame

const flame = new THREE.Mesh(

    new THREE.SphereGeometry(0.12, 32, 32),

    new THREE.MeshBasicMaterial({

        color: 0xffd700

    })

);

flame.position.set(0, -2.1, 0);

scene.add(flame);

function animate() {

    requestAnimationFrame(animate);

    stars.rotation.y += 0.0008;
    stars.rotation.x += 0.0003;
    flame.scale.y = 0.8 + Math.sin(Date.now() * 0.01) * 0.2;

    cake.rotation.y += 0.002;

    cream.rotation.y += 0.002;

    renderer.render(
        scene,
        camera
    );

}

animate();

/* ============================
      WINDOW RESIZE
============================ */

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});


/* ============================
      SURPRISE POPUP
============================ */

const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const continueBtn = document.getElementById("continueBtn");

surpriseBtn.addEventListener("click", () => {

    popup.classList.add("show");

    gsap.from(".popup-box", {
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

});

continueBtn.addEventListener("click", () => {

    window.location.href = "/surprise.html";

});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("show");

    }

});