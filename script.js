const numEstrelas = 500; 
const body = document.querySelector("body");

for (let i = 0; i < numEstrelas; i++) {
  const estrela = document.createElement("div");
  estrela.className = "estrela";

  const tamanho = Math.random() * 2 + 0.9;
  estrela.style.width = tamanho + "px";
  estrela.style.height = tamanho + "px";

  const top = Math.random() * 100 + 1 + "%";
  const left = Math.random() * 100 + 1 + "%";
  estrela.style.top = top;
  estrela.style.left = left;

  const atraso = Math.random() * 0.5; 
  estrela.style.animationDelay = atraso + "s";

  body.appendChild(estrela);
}

document.addEventListener("DOMContentLoaded", function () {
  const retroShotsContainer = document.querySelector('.retro-shots-container');

  const numShots = 20;

  for (let i = 0; i < numShots; i++) {
    const shot = document.createElement('div');
    shot.className = 'retro-shots';

    const leftPosition = Math.random() * 100 + "%";
    const animationDelay = Math.random() * 3 + "s";

    shot.style.left = leftPosition;
    shot.style.animationDelay = animationDelay;

    retroShotsContainer.appendChild(shot);
  }
});
