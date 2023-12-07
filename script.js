// Récupération des différents éléments
const spinBtn = document.querySelector(".spin__btn");
const wheel = document.querySelector(".wheel");

// Création de la variable value
// La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.
let value = Math.ceil(Math.random() * 3600);

// Ecoute de l'événement click sur le bouton spin
spinBtn.addEventListener("click", () => {
  wheel.style.transform = "rotate(" + value + "deg )";
  value += Math.ceil(Math.random() * 3600);
});
