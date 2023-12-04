const petContainer = document.getElementById("all-pets-container");

const API_URL = "localhost:8080/api";

const fetchPets = async () => {
  try {
    const response = await fetch(API_URL);
    const allPets = await response.json();

    return allPets;
  } catch (err) {
    console.error(err);
  }
};

const renderPets = async (pets) => {
  try {
    pets.forEach((element) => {
      const petElement = document.createElement("div");
      petElement.className = "single-card";
      petElement.innerHTML = `
        <h2>${element.name}</h2>
        <p>${element.breed}</p>
        <p>${element.owner}</p>`;
      petContainer.appendChild(petElement);
    });
  } catch (err) {
    console.error(err);
  }
};

const init = async () => {
  const allPets = await fetchPets();
  renderPets(allPets);
};

init();
