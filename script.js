document.addEventListener("DOMContentLoaded", () => {
    const initiateBtn = document.getElementById("initiate-btn");
    const splashScreen = document.getElementById("splash-screen");
    const homepage = document.getElementById("homepage");

    initiateBtn.addEventListener("click", () => {
        
        // 1. Fade out the splash screen
        splashScreen.classList.add("fade-out");

        // 2. Wait for fade out to complete, then swap displays
        setTimeout(() => {
            splashScreen.classList.remove("active-screen");
            splashScreen.classList.add("hidden-screen");
            
            // Show homepage and trigger fade-in animation
            homepage.classList.remove("hidden-screen");
            homepage.classList.add("active-screen", "fade-in");
            
        }, 1000); // 1-second delay matches CSS transition time
    });
});
