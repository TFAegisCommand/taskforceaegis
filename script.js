// App State & Routing
const Views = {
    dashboard: `
        <div class="grid">
            <div class="card"><h2>SYSTEM STATUS</h2><p>All nodes nominal.</p></div>
            <div class="card"><h2>ACTIVE CASES</h2><button onclick="renderView('cases')">View Dossiers</button></div>
            <div class="card"><h2>EVIDENCE VAULT</h2><button onclick="renderView('vault')">Open Vault</button></div>
        </div>`,
    vault: `<div class="card"><h2>EVIDENCE VAULT</h2><ul id="evidence-list"><li>Evidence Item 001 - [Encrypted]</li><li>Evidence Item 002 - [Encrypted]</li></ul></div>`,
    cases: `<div class="card"><h2>ACTIVE DOSSIERS</h2><p>Project Vindex: Initialized</p></div>`
};

function renderView(viewName) {
    const container = document.getElementById('view-container');
    container.innerHTML = Views[viewName] || Views.dashboard;
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Splash Logic (Existing)
    document.getElementById("initiate-btn").addEventListener("click", () => {
        document.getElementById("splash-screen").classList.add("hidden-screen");
        document.getElementById("app-container").classList.remove("hidden-screen");
        renderView('dashboard');
    });

    // 2. Chat Logic
    const aiInput = document.getElementById('ai-input');
    const chatOutput = document.getElementById('chat-output');

    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && aiInput.value) {
            // Append User Message
            const msg = document.createElement('div');
            msg.innerText = `> ${aiInput.value}`;
            chatOutput.appendChild(msg);
            
            // Auto-reply simulation
            setTimeout(() => {
                const reply = document.createElement('div');
                reply.style.color = 'var(--ui-electric)';
                reply.innerText = `AI: Processing "${aiInput.value}"... [DATA LOGGED]`;
                chatOutput.appendChild(reply);
                chatOutput.scrollTop = chatOutput.scrollHeight;
            }, 600);
            
            aiInput.value = '';
        }
    });
});
