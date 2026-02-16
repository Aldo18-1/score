const STORAGE_KEY = "scoreboardData";

// Estado inicial
let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
team1: 0,
team2: 0,
name1: "Equipo A",
name2: "Equipo B"
};

// Elementos (pueden no existir en control.html)
const team1ScoreEl = document.getElementById("team1Score");
const team2ScoreEl = document.getElementById("team2Score");
const team1NameEl = document.getElementById("team1Name");
const team2NameEl = document.getElementById("team2Name");

function animate(el) {
if (!el) return;
el.classList.add("animate");
setTimeout(() => el.classList.remove("animate"), 200);
}

function save() {
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
render();
}

function render() {
if (team1ScoreEl) {
team1ScoreEl.textContent = state.team1;
team2ScoreEl.textContent = state.team2;
animate(team1ScoreEl);
animate(team2ScoreEl);
}

```
if (team1NameEl) team1NameEl.textContent = state.name1;
if (team2NameEl) team2NameEl.textContent = state.name2;
```

}

// API global
window.scoreControl = {
addPoint(team) {
if (team === 1) state.team1++;
if (team === 2) state.team2++;
save();
},

```
removePoint(team) {
    if (team === 1 && state.team1 > 0) state.team1--;
    if (team === 2 && state.team2 > 0) state.team2--;
    save();
},

setTeamNames(name1, name2) {
    if (name1) state.name1 = name1;
    if (name2) state.name2 = name2;
    save();
},

reset() {
    state.team1 = 0;
    state.team2 = 0;
    save();
}
```

};

// Sincronización entre pestañas
window.addEventListener("storage", (e) => {
if (e.key === STORAGE_KEY) {
state = JSON.parse(e.newValue);
render();
}
});

// Inicializar
render();

