
// UI Booster - Amélioration de l'interface utilisateur
console.log("UI Booster activé !");

// Fonction pour aligner automatiquement les éléments
function autoAlign(elements) {
    elements.forEach((element) => {
        element.style.margin = "0 auto";
        element.style.alignItems = "center";
        element.style.border = "2px dashed #007bff";
        console.log(`Élément aligné : ${element.textContent}`);
    });
}

// Fonction pour suggérer des améliorations
function suggestImprovements(elements) {
    elements.forEach((element) => {
        // Exemple de suggestion : vérifier la taille des marges
        if (parseInt(window.getComputedStyle(element).margin) < 10) {
            console.log(`Suggestion : Augmentez les marges de l'élément ${element.textContent}.`);
        }
    });
}

// Initialisation du plugin
function initUIBooster() {
    const elements = document.querySelectorAll('.design-element');
    autoAlign(elements);
    suggestImprovements(elements);
}

// Bouton interactif pour tester
const testButton = document.createElement("button");
testButton.textContent = "Optimiser avec UI Booster";
testButton.style.padding = "10px";
testButton.style.margin = "20px";
testButton.style.backgroundColor = "#007bff";
testButton.style.color = "#fff";
testButton.style.border = "none";
testButton.style.cursor = "pointer";
testButton.addEventListener("click", () => initUIBooster());
document.body.appendChild(testButton);
