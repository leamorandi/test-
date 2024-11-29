// Gestion des réglages
const settings = document.getElementById("settings");
const currentValue = document.getElementById("current-value");
const idealValue = document.getElementById("ideal-value");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");

const data = {
  water: {
    current: 96,
    ideal: 80,
    unit: "%",
  },
  light: {
    current: 96,
    ideal: 70,
    unit: "%",
  },
  temperature: {
    current: 25,
    ideal: 20,
    unit: "°C",
  },
};

let activeSetting = null;

// Afficher les réglages
function showSettings(type) {
  activeSetting = type;
  const { current, ideal, unit } = data[type];
  currentValue.textContent = `Actuel : ${current}${unit}`;
  idealValue.textContent = `Conseil : ${ideal}${unit}`;
  settings.style.display = "block";
}

// Modifier la valeur actuelle
function modifyValue(change) {
  if (activeSetting) {
    data[activeSetting].current += change;
    const { current, unit } = data[activeSetting];
    currentValue.textContent = `Actuel : ${current}${unit}`;
  }
}

// Ajouter les événements
document.getElementById("water").addEventListener("click", () => showSettings("water"));
document.getElementById("light").addEventListener("click", () => showSettings("light"));
document.getElementById("temperature").addEventListener("click", () => showSettings("temperature"));

decreaseBtn.addEventListener("click", () => modifyValue(-1));
increaseBtn.addEventListener("click", () => modifyValue(1));
