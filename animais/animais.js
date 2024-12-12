const dogs = [
  {
    img: "../img/1.jpeg",
    nome: "Buddy",
    raca: "Golden Retriever"
  },
  {
    img: "../img/2.jpeg",
    nome: "Max",
    raca: "Labrador Retriever"
  },
  {
    img: "../img/3.webp",
    nome: "Bella",
    raca: "Bulldog Inglês"
  },
  {
    img: "../img/4.jpeg",
    nome: "Luna",
    raca: "Poodle"
  },
  {
    img: "../img/5.jpeg",
    nome: "Charlie",
    raca: "Beagle"
  },
  {
    img: "../img/6.jpeg",
    nome: "Duke",
    raca: "Husky Siberiano"
  },
  {
    img: "../img/7.jpeg",
    nome: "Daisy",
    raca: "Shih Tzu"
  },
  {
    img: "../img/8.webp",
    nome: "Cooper",
    raca: "Dachshund"
  },
  {
    img: "../img/9.webp",
    nome: "Milo",
    raca: "Boxer"
  },
  {
    img: "../img/10.jpeg",
    nome: "Zoe",
    raca: "Border Collie"
  },
  
];

const container = document.querySelector(".container--card");
const modal = document.getElementById("animalModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalBreed = document.getElementById("modalBreed");

// Adiciona os cards na página
dogs.forEach((dog) => {
  const card = document.createElement("div");
  card.className = "animal-card";
  card.innerHTML = `
    <div>
      <div class="image-container">
        <img src="${dog.img}" alt="Imagem de ${dog.nome}">
      </div>
      <div class="animal-card-info">
        <p><strong>Nome:</strong> ${dog.nome}</p>
        <p><strong>Raça:</strong> ${dog.raca}</p>
      </div>
      <hr class="animal-card-separator">
    </div>
    <button class="animal-details-button">MAIS DETALHES</button>
  `;
  container.appendChild(card);

  // Adiciona evento ao botão "MAIS DETALHES"
  const detailsButton = card.querySelector(".animal-details-button");
  detailsButton.addEventListener("click", () => {
    // Preenche o modal com os detalhes do animal
    modalImage.src = dog.img;
    modalName.innerHTML = `<strong>Nome:</strong> ${dog.nome}`;
    modalBreed.innerHTML = `<strong>Raça:</strong> ${dog.raca}`;
    modal.style.display = "flex";
  });
});

// Fecha o modal ao clicar no "x"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});