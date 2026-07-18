document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const progressBar = document.getElementById("progress-bar-inner");
    const splashScreen = document.getElementById("splash-screen");
    const opsConsole = document.getElementById("ops-console");

    // Task Force Aegis Boot Sequence Array
    const messages = [
        "INITIALIZING SECURE SESSION...",
        "VERIFYING SYSTEM INTEGRITY [OK]",
        "LOADING SECURE MODULES...",
        "INITIALIZING LEGAL LIBRARIES [CACHED]",
        "PREPARING EVIDENCE VAULT...",
        "ACTIVATING AI ANALYST [ONLINE]",
        "ESTABLISHING ENCRYPTED CONNECTION... DONE."
    ];

    let step = 0;
    
    // Simulate system boot process
    const bootInterval = setInterval(() => {
        if (step < messages.length) {
            loadingText.innerText = `> ${messages[step]}`;
            // Calculate width percentage
            const progress = ((step + 1) / messages.length) * 100;
            progressBar.style.width = `${progress}%`;
            step++;
        } else {
            clearInterval(bootInterval);
            
            // Initialization complete, transition to Operations Console
            setTimeout(() => {
                splashScreen.style.opacity = '0'; // Trigger CSS fade out
                
                setTimeout(() => {
                    splashScreen.classList.add("hidden");
                    opsConsole.classList.remove("hidden");
                    opsConsole.classList.add("fade-in");
                }, 800); // Wait for fade out to complete
                
            }, 600); // Short pause at 100% before fading
        }
    }, 650); // 650ms delay per sequence step for readability
});
