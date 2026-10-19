const loginOverlay = document.getElementById('login-overlay');
const pilotNameInput = document.getElementById('pilotNameInput');
const launchBtn = document.getElementById('launchBtn');
const switchUserBtn = document.getElementById('switchUserBtn');
const pilotTag = document.getElementById('pilotTag');
const navSecret = document.getElementById('nav-secret');
const secretSlide = document.getElementById('secret-slide');
const secretRing = document.getElementById('secret-ring');

function startSpaceMission() {
    const rawName = pilotNameInput.value.trim();
    if (!rawName) {
        alert("please enter your name to launch!");
        return;
    }

    const cleanName = rawName.toLowerCase();


    if (cleanName == "kanishka") {
        pilotTag.innerText = "VIP STAR: KANISHKA 🌸";
        navSecret.style.display = "flex";

        secretSlide.style.setProperty('--accent', '#f472b6');
        secretSlide.style.setProperty('--atmo-glow', 'rgba(244, 114, 182, 0.65)');
        secretSlide.style.setProperty('--planet-surface', 'radial-gradient(circle at 30% 30%, #fbcfe8, #ec4899 55%, #500724)');
        secretRing.style.borderColor = "rgba(244, 114, 182, 0.5)";
        secretRing.style.borderTopColor ="transparent";

        document.getElementById('secret-nav-label').innerText = "09 Kanishka";
        document.getElementById('secret-tag').innerText = "Beyond Orbit 08 // Rare Star Unlocked 🌸";
        document.getElementById('secret-title').innerText = "Kanishka";
        document.getElementById('secret-desc').innerHTML = 
            "You unlocked a secret planet outside the Solar System! Out of billions of stars in the galaxy, thank you for bringing so much positivity, kindness, and fun times into my life. Lucky to have a friend lik you! 💖✨";
        document.getElementById('label-1').innerText = "Positivity";
        document.getElementById('stat-1').innerText = "100% Pure";
        document.getElementById('label-2').innerText = "Status";
        document.getElementById('stat-2').innerText = "Irreplaceable";

        document.getElementById('p-secret').checked = true;
        createMagicParticles(['💖', '🌸', '✨', '💕', '🌷']);
    }

    else if (cleanName === "parv") {
        pilotTag.innerText = "VIP COMMANDER: PARV 🔥";
        navSecret.style.display = "flex";

        secretSlide.style.setProperty('--accent', '#38bdf8');
        secretSlide.style.setProperty('--atmo-glow', 'rgba(56, 189, 248, 0.65)');
        secretSlide.style.setProperty('--planet-surface', 'radial-gradient(circle at 30% 30%, #7dd3fc, #0284c7 55%, #082f49)');
        secretRing.style.borderColor = "rgba(56, 189, 248, 0.5)";
        secretRing.style.borderTopColor = "transparent";

        document.getElementById('secret-nav-label').innerText = "09 Parv-X";
        document.getElementById('secret-tag').innerText = "Beyond Orbit 08 // Supernova Sector 🔥";
        document.getElementById('secret-title').innerText = "Planet Parv";
        document.getElementById('secret-desc').innerHTML =
            "Yo Parv! Since you logged in with your name, you unlocked the secret 9th planet outside the Solar System. Coded this whole space engine from scratch-let's hang out soon bro! 🚀😎";
        document.getElementById('label-1').innerText = "Vibe Level";
        document.getElementById('stat-1').innerText = "Max Energy";
        document.getElementById('label-2').innerText = "Rank";
        document.getElementById('stat-2').innerText = "Legend Tier";
        
        document.getElementById('p-secret').checked = true;
        createMagicParticles(['🔥', '🚀', '😎', '🎉', '🍕']);
    }

    else if(cleanName== "aditya" || cleanName === "aditya j" || cleanName === "aditya j.") {
        pilotTag.innerText = "CREATOR: ADITYA J . ⚡";
        navSecret.style.display = "flex";

        secretSlide.style.setProperty('--accent', '#a855f7');
        secretSlide.style.setProperty('--atmo-glow', 'rgba(168, 85, 247, 0.7)');
        secretSlide.style.setProperty('--planet-surface', 'radial-gradient(circle at 30% 30%, #e9d5ff, #7e22ce 55%, #2e1065)');
        secretRing.style.borderColor = "rgba(192, 132, 252, 0.55)";
        secretRing.style.borderTopColor = "transparent";

        document.getElementById('secret-nav-label').innerText = "09 Creator Core";
        document.getElementById('secret-tag').innerText = "Beyond Orbit 08 // Architect Command Center ⚡";
        document.getElementById('secret-title').innerText = "Planet Aditya";
        document.getElementById('secret-desc').innerHTML = 
            "Welcom back, Architect! You are viewing the Command Core of the COSMOS Universe-built and engineered from scratch by Aditya J. All 8 Solar System orbits and VIP sectors are online. ⚡👑";
        document.getElementById('label-1').innerText = "Role";
        document.getElementById('stat-1').innerText = "System Creator";
        document.getElementById('label-2').innerText = "Access";
        document.getElementById('stat-2').innerText = "100% Admin";

        document.getElementById('p-secret').checked = true;
        createMagicParticles(['⚡', '👑', '🚀', '🌌', '✨']);
    }

    else {
        pilotTag.innerText = "EXPLORER: " + rawName.toUpperCase();
        navSecret.style.display = "none";
        document.getElementById('p-sun').checked = true;
    }

    loginOverlay.classList.add('hidden');
}

function createMagicParticles(emojis) {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDuration = (Math.random() * 2 + 3) + 's';

            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 5000);
        }, i * 100);
    }
}

launchBtn.addEventListener('click', startSpaceMission);
pilotNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') startSpaceMission();
});

switchUserBtn.addEventListener('click', function() {
    pilotNameInput.value = "";
    loginOverlay.classList.remove('hidden');
    pilotNameInput.focus();
});