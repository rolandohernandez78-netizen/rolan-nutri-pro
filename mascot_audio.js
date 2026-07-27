/**
 * RolanNutriPro - Mascot Animation & Audio Engine
 * Author: Rolando Hernández Mora, MV MSc Nutrición Animal
 */

let epidemicCowAudio = null;

function playRealisticCowMoo() {
    try {
        if (!epidemicCowAudio) {
            epidemicCowAudio = new Audio("audio/epidemic_cow_moo.mp3");
        }
        if (epidemicCowAudio) {
            epidemicCowAudio.currentTime = 0;
            epidemicCowAudio.play().catch(() => {
                playSynthesizedCowMoo();
            });
        } else {
            playSynthesizedCowMoo();
        }
    } catch (e) {
        playSynthesizedCowMoo();
    }
}

function playSynthesizedCowMoo() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const startTime = ctx.currentTime;
        const duration = 1.4;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.01, startTime);
        masterGain.gain.linearRampToValueAtTime(0.45, startTime + 0.15);
        masterGain.gain.setValueAtTime(0.45, startTime + 0.9);
        masterGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        const osc1 = ctx.createOscillator();
        osc1.type = "sawtooth";
        osc1.frequency.setValueAtTime(125, startTime);
        osc1.frequency.exponentialRampToValueAtTime(95, startTime + duration);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, startTime);
        filter.frequency.linearRampToValueAtTime(320, startTime + duration);

        osc1.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(ctx.destination);

        osc1.start(startTime);
        osc1.stop(startTime + duration);
    } catch (err) {
        console.warn("Audio Context initialization skipped:", err);
    }
}

function triggerMooAudio() {
    avatar = avatar || document.getElementById("holstein-cow-avatar");
    speechBubble = speechBubble || document.getElementById("mascot-speech-bubble");

    if (avatar) {
        avatar.style.transform = "scale(1.18) rotate(-4deg)";
        setTimeout(() => { avatar.style.transform = "scale(1)"; }, 450);
    }

    if (speechBubble) {
        const moos = ["¡Muuuu! 🐮", "¡Muuu Rumiando! 🌾", "¡Muuuu NASEM 2021! 📊", "¡Muuuu Balanceado! 🧪"];
        const randomMoo = moos[Math.floor(Math.random() * moos.length)];
        speechBubble.innerText = randomMoo;
        speechBubble.style.opacity = "1";
        speechBubble.style.transform = "translateY(0)";
        setTimeout(() => {
            speechBubble.style.opacity = "0";
            speechBubble.style.transform = "translateY(6px)";
        }, 2200);
    }

    playRealisticCowMoo();
}
