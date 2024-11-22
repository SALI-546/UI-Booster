
// UI Booster - Optimise l'alignement des éléments
console.log("UI Booster activé !");

// Fonction d'alignement automatique
function autoAlign(elements) {
  elements.forEach((element) => {
    element.style.margin = "0 auto";
    element.style.alignItems = "center";
  });
  console.log("Éléments alignés automatiquement !");
}

// Simulation - Exemple d'utilisation
const exampleElements = document.querySelectorAll('.design-element');
autoAlign(exampleElements);
