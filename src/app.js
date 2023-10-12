// Importa tu archivo CSS si es necesario (según tu configuración)
import "./style.css";

const suitsSymbols = {
  spade: "♠",
  club: "♣",
  heart: "♥",
  diamond: "♦"
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCard() {
  const suits = ["spade", "club", "heart", "diamond"];
  const randomSuitIndex = getRandomNumber(0, 3);
  const randomCardNumber = getRandomNumber(0, 12);
  const randomSuit = suits[randomSuitIndex];

  // Obtén el contenedor de la carta
  const cardContainer = document.getElementById("card");

  // Crea los elementos para los símbolos en las esquinas
  const topSymbol = document.createElement("div");
  topSymbol.className = `corner-symbol top-left`;
  topSymbol.textContent = suitsSymbols[randomSuit];
  const bottomSymbol = document.createElement("div");
  bottomSymbol.className = `corner-symbol bottom-right`;
  bottomSymbol.textContent = suitsSymbols[randomSuit];

  // Crea el elemento para el número o letra centrado
  const centeredText = document.createElement("div");
  centeredText.className = "centered-text";
  const cardNumber =
    randomCardNumber < 9
      ? randomCardNumber + 2
      : ["J", "Q", "K", "A"][randomCardNumber - 9];
  centeredText.textContent = cardNumber;

  // Verifica si la carta es roja y cambia el color del símbolo de corazones a rojo
  if (randomSuit === "heart" || randomSuit === "diamond") {
    topSymbol.style.color = "red";
    bottomSymbol.style.color = "red";
  }

  // Limpia el contenedor antes de agregar nuevos elementos
  cardContainer.innerHTML = "";

  // Agrega los elementos al contenedor de la carta
  cardContainer.appendChild(topSymbol);
  cardContainer.appendChild(centeredText);
  cardContainer.appendChild(bottomSymbol);
}

// Llama a la función para generar la carta al cargar la página
generateRandomCard();
