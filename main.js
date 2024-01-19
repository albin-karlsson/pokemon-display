const pokemonData = [
  {
    name: "Pikachu",
    type: "Electric",
    hp: 35,
    attack: 55,
    defense: 40,
    abilities: ["Static", "Lightning Rod"],
    moves: ["Thunderbolt", "Quick Attack", "Thunder Wave"],
  },
  {
    name: "Charizard",
    type: ["Fire", "Flying"],
    hp: 78,
    attack: 84,
    defense: 78,
    abilities: ["Blaze", "Solar Power"],
    moves: ["Flamethrower", "Dragon Claw", "Roost"],
  },
  {
    name: "Squirtle",
    type: "Water",
    hp: 44,
    attack: 48,
    defense: 65,
    abilities: ["Torrent", "Rain Dish"],
    moves: ["Water Gun", "Bubble", "Withdraw"],
  },
  {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    abilities: ["Overgrow", "Chlorophyll"],
    moves: ["Vine Whip", "Razor Leaf", "Sleep Powder"],
  },
  {
    name: "Sandslash",
    type: "Ground",
    hp: 75,
    attack: 100,
    defense: 110,
    abilities: ["Sand Veil", "Sand Rush"],
    moves: ["Earthquake", "Rock Slide", "Swords Dance"],
  },
  {
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    hp: 115,
    attack: 45,
    defense: 20,
    abilities: ["Cute Charm", "Competitive"],
    moves: ["Sing", "Body Slam", "Rest"],
  },
  {
    name: "Gyarados",
    type: ["Water", "Flying"],
    hp: 95,
    attack: 125,
    defense: 79,
    abilities: ["Intimidate", "Moxie"],
    moves: ["Hydro Pump", "Dragon Dance", "Crunch"],
  },
  {
    name: "Machop",
    type: "Fighting",
    hp: 70,
    attack: 80,
    defense: 50,
    abilities: ["Guts", "No Guard"],
    moves: ["Karate Chop", "Low Kick", "Bulk Up"],
  },
  {
    name: "Haunter",
    type: ["Ghost", "Poison"],
    hp: 45,
    attack: 50,
    defense: 45,
    abilities: ["Levitate"],
    moves: ["Shadow Ball", "Sludge Bomb", "Hypnosis"],
  },
  {
    name: "Dragonite",
    type: ["Dragon", "Flying"],
    hp: 91,
    attack: 134,
    defense: 95,
    abilities: ["Inner Focus", "Multiscale"],
    moves: ["Dragon Claw", "Outrage", "Roost"],
  },
];

let pokemonContainer = document.querySelector(".pokemon-container");

pokemonData.forEach((pokemon) => {
  console.log(pokemon.moves);

  let movesHtml = pokemon.moves
    .map(
      (m) => `<div class="move"> 
        <p>${m}</p>
    </div>`
    )
    .join("");

  console.log(movesHtml);

  let html = `
    <div class="col-4 pokemon-item">
    <h2 class="text-center">${pokemon.name}</h2>
    <p class="d-flex justify-content-between"><span>Type:</span><span class="fst-italic">${pokemon.type}</span></p>
    <p class="d-flex justify-content-between"><span>HP:</span><span class="fst-italic">${pokemon.hp}</span></p>
    <p class="d-flex justify-content-between"><span>Attack:</span><span class="fst-italic">${pokemon.attack}</span></p>
    <p class="d-flex justify-content-between"><span>Defense:</span><span class="fst-italic">${pokemon.defense}</span></p>
    <h5>Moves:</h5>
    ${movesHtml}
  </div>
  `;

  pokemonContainer.innerHTML += html;
});
