// document.addEventListener('DOMContentLoaded', () => {
//     const keys = document.querySelectorAll('.piano-keys');

//     // Play sound on mouse click
//     keys.forEach((key) => {
//         key.addEventListener('click', (e) => {
//             const clickedKey = e.target.dataset.key;
//             playSound(clickedKey);
//         });
//     });

//     // Play sound on keyboard press
//     const keyMap = {
//         a: "01", s: "02", d: "03", f: "04", g: "05", h: "06",
//         j: "07", k: "08", l: "09", ";": "10", "'": "11", z: "12",
//         x: "13", c: "14", v: "15", b: "16", n: "17", m: "18",
//         q: "19", w: "20", e: "21", r: "22", t: "23", y: "24"
//     };

//     document.addEventListener('keydown', (e) => {
//         const pressedKey = e.key.toLowerCase();
//         const soundKey = keyMap[pressedKey];
//         if (soundKey) {
//             playSound(soundKey);
//             highlightKey(soundKey);
//         }
//     });

//     function playSound(keyNumber) {
//         const pianoSound = new Audio(`./KeySounds/key${keyNumber}.mp3`);
//         pianoSound.play();
//     }

//     function highlightKey(keyNumber) {
//         const keyElement = document.querySelector(`.piano-keys[data-key="${keyNumber}"]`);
//         if (keyElement) {
//             keyElement.classList.add('active');
//             setTimeout(() => keyElement.classList.remove('active'), 150);
//         }
//     }
// });




document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.piano-keys');

    // Play sound on mouse click
    keys.forEach((key) => {
        key.addEventListener('click', (e) => {
            const clickedKey = e.target.dataset.key;
            playSound(clickedKey);
            highlightKey(clickedKey);
        });
    });

    // Map keyboard keys to piano keys
    const keyMap = {
        a: "01", s: "02", d: "03", f: "04", g: "05", h: "06",
        j: "07", k: "08", l: "09", ";": "10", "'": "11", z: "12",
        x: "13", c: "14", v: "15", b: "16", n: "17", m: "18",
        q: "19", w: "20", e: "21", r: "22", t: "23", y: "24"
    };

    document.addEventListener('keydown', (e) => {
        const pressedKey = e.key.toLowerCase();
        const soundKey = keyMap[pressedKey];
        if (soundKey) {
            playSound(soundKey);
            highlightKey(soundKey);
        }
    });

    function playSound(keyNumber) {
        const pianoSound = new Audio(`key${keyNumber}.mp3`);
        pianoSound.currentTime = 0; // Prevent delay if sound is still playing
        pianoSound.play().catch(err => console.warn(`Error playing key${keyNumber}:`, err));
    }

    function highlightKey(keyNumber) {
        const keyElement = document.querySelector(`.piano-keys[data-key="${keyNumber}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            setTimeout(() => keyElement.classList.remove('active'), 150);
        }
    }
});
