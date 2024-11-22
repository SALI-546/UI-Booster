export function suggestContrast(elements) {
    elements.forEach((element) => {
        const color = window.getComputedStyle(element).backgroundColor;
        const contrast = getContrastRatio(color, "#FFFFFF");
        if (contrast < 4.5) {
            console.log(`Suggestion : Augmentez le contraste de l'élément ${element.textContent}.`);
        }
    });
}

// Exemple de fonction pour calculer le contraste
function getContrastRatio(color1, color2) {
    // Simplifié pour démonstration
    return 5; // Placeholder, calcul précis à ajouter
}
