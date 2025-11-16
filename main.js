import { pokemons } from "./pokemons.js";
import { Pokemon } from "./pokemon.js";

const pikachuData = pokemons.find(p => p.name === "Pikachu");
const player1 = new Pokemon(pikachuData);

const container = document.getElementById("buttons");

player1.attacks.forEach(attack => {
    let count = attack.maxCount;

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = `${attack.name} (${count})`;

    btn.onclick = () => {
        if (count > 0) {
            count--;
            btn.textContent = `${attack.name} (${count})`;
        }
        if (count === 0) {
            btn.disabled = true;
        }
    };

    container.appendChild(btn);
});
