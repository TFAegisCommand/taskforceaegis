// --- DYNAMIC VIEWS ---
const Views = {
    dashboard: `
        <div class="view-grid">
            <div class="module-card">
                <h2>SYSTEM DIAGNOSTICS</h2>
                <p>> Network Encryption: Nominal</p>
                <p>> Database Integrity: 100%</p>
                <p>> AI Core Capacity: Stable</p>
                <button class="action-btn" onclick="simulateAction(this, 'RUNNING DIAGNOSTICS...')">Run Full Sweep</button>
            </div>
            <div class="module-card">
                <h2>RECENT ALERTS</h2>
                <p style="color: #FFB300;">[WARN] Encrypted payload received from HQ.</p>
                <p style="color: #00E5FF;">[INFO] Federal statute database updated.</p>
                <p style="color: #00FF66;">[SEC] Node 4 connection verified.</p>
            </div>
        </div>
    `,
    vault: `
        <div class="module-card" style="max-width: 800px; margin: 0 auto; width: 100%;">
            <h2>EVIDENCE VAULT</h2>
            <p>Select an asset to begin decryption sequence.</p>
            <ul style="list-style: none; margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                <li style="padding: 10px; background: rgba(0,0,0,0.5); border-left: 2px solid #0F52BA;">Asset #042 - Financial Logs (Encrypted)</li>
                <li style="padding: 10px; background: rgba(0,0,0,0.5); border-left: 2px solid #0F52BA;">Asset #043 - Surveillance Audio (Processing)</li>
                <li style="padding: 10px; background: rgba(0,0,0,0.5); border-left: 2px solid #0F52BA;">Asset #044 - Witness Transcript (Cleared)</li>
            </ul>
            <button class="action-btn" onclick="simulateAction(this, 'UPLOADING...')">Upload New Asset</button>
        </div>
    `,
    cases: `
        <div class="module-card" style="max-width: 800px; margin: 0 auto; width: 100%;">
            <h2>ACTIVE DOSSIERS</h2>
            <div style="padding: 15px; border: 1px solid rgba(0, 229, 255, 0.2); margin-top: 15px;">
                <h3 style="color: #00E5FF; margin-bottom: 5px;">PROJECT VINDEX</h3>
                <p>Status: ACTIVE | Lead Investigator: Assigned</p>
                <button class="action-btn" onclick="simulateAction(this, 'LOADING DOSSIER...')">Open Case File</button>
            </div>
            <button class="action-btn" style="margin-top: 30px;" onclick="simulateAction(this, 'INITIALIZING...')">Create New Dossier</button>
        </div>
    `
};

// --- NAVIGATION LOGIC ---
function renderView(viewName) {
    const container = document.getElementById('view-container');
    
    // Add brief fade effect when swapping pages
    container.style.opacity = '0';
    setTimeout(() => {
        container.innerHTML = Views[viewName] || Views.dashboard;
        container.style.transition = 'opacity 0.3s ease';
        container.style.opacity = '1';
    }, 150);
}

// Button Simulation Effect
function simulateAction(buttonElement, loadingText) {
    const originalText = buttonElement.innerText;
    buttonElement.innerText = loadingText;
    buttonElement.style.color = "#00FF66";
    buttonElement.style.borderColor = "#00FF66";
    
    setTimeout(() => {
        buttonElement.innerText = originalText;
        buttonElement.style.color = "";
        buttonElement.style.borderColor = "";
    }, 1500);
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Splash Screen Transition
    const initiateBtn = document.getElementById("initiate-btn");
    const splashScreen = document.getElementById("splash-screen");
    const appContainer = document.getElementById("app-container");

    initiateBtn.addEventListener("click", () => {
        splashScreen.classList.add("fade-out");
        
        setTimeout(() => {
            splashScreen.classList.remove("active-screen");
            splashScreen.classList.add("hidden-screen");
            
            appContainer.classList.remove("hidden-screen");
            appContainer.classList.add("active-screen", "fade-in");
            
            // Load the default dashboard view
            renderView('dashboard');
        }, 500); 
    });

    // 2. AI Chat Logic
    const aiInput = document.getElementById('ai-input');
    const chatOutput = document.getElementById('chat-output');

    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && aiInput.value.trim() !== '') {
            const userText = aiInput.value.trim();
            
            // Add user message to UI
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-message user-message';
            userMsg.innerText = userText;
            chatOutput.appendChild(userMsg);
            
            // Clear input
            aiInput.value = '';
            
            // Scroll to bottom
            chatOutput.scrollTop = chatOutput.scrollHeight;
            
            // Simulate AI Response
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'chat-message ai-message';
                aiMsg.innerHTML = `<span style="color: #00E5FF;">> System:</span> Processing query regarding "${userText}"... parameters logged.`;
                chatOutput.appendChild(aiMsg);
                chatOutput.scrollTop = chatOutput.scrollHeight;
            }, 800);
        }
    });
});
