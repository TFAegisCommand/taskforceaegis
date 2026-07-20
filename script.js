document.addEventListener("DOMContentLoaded", () => {
    
    // --- SPLASH SCREEN LOGIC ---
    const initiateBtn = document.getElementById("initiate-btn");
    const splashScreen = document.getElementById("splash-screen");
    const homepage = document.getElementById("homepage");

    initiateBtn.addEventListener("click", () => {
        // Fade out the splash screen
        splashScreen.classList.add("fade-out");
        
        // Wait for fade out to complete, then swap displays
        setTimeout(() => {
            splashScreen.classList.remove("active-screen");
            splashScreen.classList.add("hidden-screen");
            
            // Show homepage and trigger fade-in animation
            homepage.classList.remove("hidden-screen");
            homepage.classList.add("active-screen", "fade-in");
        }, 1000); // 1-second delay matches CSS transition time
    });

    // --- DASHBOARD INTERACTIVITY LOGIC ---
    
    // 1. Button click effects (Action feedback)
    const interactBtns = document.querySelectorAll(".interact-btn");
    
    interactBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const targetAction = e.target.getAttribute("data-target");
            const originalText = e.target.innerText;
            
            // Visual feedback: Change text to loading state
            e.target.innerText = `INITIALIZING: ${targetAction}...`;
            e.target.style.color = "#00FF66"; // Status Green
            e.target.style.borderColor = "#00FF66";
            
            // Revert back after 1.5 seconds (Simulated action)
            setTimeout(() => {
                e.target.innerText = originalText;
                e.target.style.color = ""; // Reset to CSS default
                e.target.style.borderColor = "";
            }, 1500);
        });
    });

    // 2. Quick Command Terminal Logic
    const cmdInput = document.getElementById("quick-cmd");
    
    cmdInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const command = cmdInput.value.trim().toUpperCase();
            if (command) {
                // Clear the input
                cmdInput.value = "";
                // Briefly flash the input to show it was accepted
                cmdInput.placeholder = `EXECUTING: ${command}...`;
                
                // Revert placeholder
                setTimeout(() => {
                    cmdInput.placeholder = "Enter query or command...";
                }, 1500);
            }
        }
    });
});
