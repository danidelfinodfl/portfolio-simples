// Fundo animado galáctico com estrelas movendo em canvas

const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 150;
const maxRadius = 2;
let width, height;

// Ajusta o canvas ao tamanho da janela
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

// Cria estrelas com posição e velocidade aleatórias
function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * maxRadius,
      speed: 0.05 + Math.random() * 0.1,
    });
  }
}
createStars();

// Atualiza e desenha as estrelas no canvas
function animate() {
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = '#0ff';
  stars.forEach(star => {
    star.x -= star.speed;
    if (star.x < 0) star.x = width;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

// Navegação dos botões para rolar até as seções suavemente
const buttons = document.querySelectorAll('.nav-btn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
