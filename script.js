const surprise = document.getElementById('surprise');
const message = document.getElementById('surprise-message');
const symbols = ['💗','🌸','✿','✨','💕','🌷'];
if (surprise && message) {
  surprise.addEventListener('click', () => {
    message.hidden = false;
    surprise.textContent = '¡Te quiero, mamá! 💖';
    for (let i = 0; i < 28; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti';
      piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.animationDuration = (2.5 + Math.random() * 2.5) + 's';
      piece.style.animationDelay = (Math.random() * .8) + 's';
      document.body.appendChild(piece);
      window.setTimeout(() => piece.remove(), 6000);
    }
  });
}
