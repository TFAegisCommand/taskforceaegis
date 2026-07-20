// --- DYNAMIC VIEWS ---
const Views = {
    dashboard: `
        <div class="view-grid">
            <div class="module-card">
                <h2>SYSTEM DIAGNOSTICS</h2>
                <p>> Network Encryption: <span style="color: #00FF66;">Nominal</span></p>
                <p>> Database Integrity: <span style="color: #00FF66;">100%</span></p>
                <p>> AI Core Capacity: <span style="color: #00FF66;">Stable</span></p>
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
                <li style="padding: 12px; background: rgba(0,0,0,0.5); border-left: 2px solid #0F52BA; font-family: monospace; cursor: pointer;" onmouseover="this.style.background='rgba(0, 229, 255, 0.1)'" onmouseout="this.style.background='rgba(0,0,0,0.5)'">Asset #042 - Financial Logs [ENCRYPTED]</li>
                <li style="padding: 12px; background: rgba(0,0,0,0.5); border-left: 2px solid #0F52BA; font-family: monospace; cursor: pointer;" onmouseover="this.style.background='rgba(0, 229, 255, 0.1)'" onmouseout="this.style.background='rgba(0,0,0,0.5)'">Asset #043 - Surveillance Audio [PROCESSING]</li>
                <li style="padding: 12px; background: rgba(0,0,0,0.5); border-left: 2px solid #0F52BA; font-family: monospace; cursor: pointer;" onmouseover="this.style.background='rgba(0, 229, 255, 0.1)'" onmouseout="this.style.background='rgba(0,0,0,0.5)'">Asset #044 - Witness Transcript [CLEARED]</li>
            </ul>
            <button class="action-btn" style="margin-top: 25px;" onclick="simulateAction(this, 'UPLOADING...')">Upload New Asset</button>
        </div>
    `,
    cases: `
        <div class="module-card" style="max-width: 800px; margin: 0 auto; width: 100%;">
            <h2>ACTIVE DOSSIERS</h2>
            <div style="padding: 20px; background: rgba(0,0,0,0.4); border: 1px solid rgba(0, 229, 255, 0.2); margin-top: 15px; border-left: 4px solid #00E5FF;">
                <h3 style="color: #00E5FF; margin-bottom: 8px; font-family: 'Orbitron'; letter-spacing: 2px;">PROJECT VINDEX</h3>
                <p style="margin-bottom: 15px; color: #8892B0;">Status: <span style="color: #00FF66;">ACTIVE</span> | Jurisdiction: State</p>
                <button class="action-btn" onclick="simulateAction(this, 'LOADING DOSSIER...')">Open Case File</button>
            </div>
            <button class="action-btn" style="margin-top: 30px; border-color: #00FF66; color: #00FF66;" onclick="simulateAction(this, 'INITIALIZING...')">Create New Dossier</button>
        </div>
    `
};

// --- NAVIGATION LOGIC ---
function renderView(viewName) {
    const container = document.getElementById('view-container');
    
    container.style.opacity = '0';
    setTimeout(() => {
        container.innerHTML = Views[viewName] || Views.dashboard;
        container.style.transition = 'opacity 0.4s ease';
        container.style.opacity = '1';
    }, 200);
}

// Button Simulation Effect
function simulateAction(buttonElement, loadingText) {
    const originalText = buttonElement.innerText;
    buttonElement.innerText = loadingText;
    buttonElement.style.color = "#00FF66";
    buttonElement.style.borderColor = "#00FF66";
    buttonElement.style.boxShadow = "0 0 15px rgba(0, 255, 102, 0.3)";
    
    setTimeout(() => {
        buttonElement.innerText = originalText;
        buttonElement.style.color = "";
        buttonElement.style.borderColor = "";
        buttonElement.style.boxShadow = "";
    }, 1500);
}

// --- TYPEWRITER EFFECT FOR AI ---
function typeWriter(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    element.classList.add('typing-cursor');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.classList.remove('typing-cursor');
            }, 1500);
        }
    }
    type();
}

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    
    const initiateBtn = document.getElementById("initiate-btn");
    const splashScreen = document.getElementById("splash-screen");
    const appContainer = document.getElementById("app-container");
    const aiInput = document.getElementById('ai-input');
    const chatOutput = document.getElementById('chat-output');

    // 1. Splash Screen Transition
    initiateBtn.addEventListener("click", () => {
        splashScreen.classList.add("fade-out");
        
        setTimeout(() => {
            splashScreen.classList.remove("active-screen");
            splashScreen.classList.add("hidden-screen");
            
            appContainer.classList.remove("hidden-screen");
            appContainer.classList.add("active-screen", "fade-in");
            
            renderView('dashboard');
            
            // Trigger AI typing effect after terminal boots
            setTimeout(() => {
                typeWriter('ai-greeting', 'Analyst online. Legal libraries initialized. Awaiting investigative parameters...', 30);
            }, 800);

        }, 500); 
    });

    // 2. AI Chat Logic
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && aiInput.value.trim() !== '') {
            const userText = aiInput.value.trim();
            
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-message user-message';
            userMsg.innerText = userText;
            chatOutput.appendChild(userMsg);
            
            aiInput.value = '';
            chatOutput.scrollTop = chatOutput.scrollHeight;
            
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'chat-message ai-message';
                aiMsg.innerHTML = `<span style="color: #00E5FF;">> System:</span> Processing query: "${userText}"... parameters logged into active memory.`;
                chatOutput.appendChild(aiMsg);
                chatOutput.scrollTop = chatOutput.scrollHeight;
            }, 800);
        }
    });
});
