const Views = {
    dashboard: `<div><h2>DASHBOARD</h2><p>System Nominal.</p></div>`,
    vault: `<div><h2>EVIDENCE VAULT</h2><p>Accessing encrypted assets...</p></div>`,
    cases: `<div><h2>ACTIVE DOSSIERS</h2><p>Project Vindex: Loaded.</p></div>`
};

function renderView(viewName) {
    document.getElementById('view-container').innerHTML = Views[viewName] || Views.dashboard;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("initiate-btn").addEventListener("click", () => {
        document.getElementById("splash-screen").classList.add("hidden-screen");
        document.getElementById("app-container").classList.remove("hidden-screen");
        renderView('dashboard');
    });

    document.getElementById('ai-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.value) {
            const chat = document.getElementById('chat-output');
            chat.innerHTML += `<div>> ${e.target.value}</div>`;
            e.target.value = '';
        }
    });
});
