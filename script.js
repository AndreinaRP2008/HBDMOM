const surprise = document.getElementById('surprise');
const overlay = document.getElementById('surprise-overlay');
const closeSurprise = document.getElementById('close-surprise');
const wishButton = document.getElementById('wish-button');
const wishReply = document.getElementById('wish-reply');
const symbols = ['💗','🌸','✿','✨','💕','🌷','💐'];

function showerOfLove() {
  for (let i = 0; i < 42; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.animationDuration = (2.8 + Math.random() * 2.5) + 's';
    piece.style.animationDelay = (Math.random() * .5) + 's';
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6000);
  }
}

if (surprise && overlay) {
  surprise.addEventListener('click', () => {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    showerOfLove();
  });
}
function closeModal() {
  if (!overlay) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}
if (closeSurprise) closeSurprise.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', event => {
  if (event.target === overlay) closeModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});
if (wishButton && wishReply) {
  wishButton.addEventListener('click', () => {
    wishReply.hidden = false;
    wishButton.textContent = '¡Abrazo enviado! 💗';
    wishButton.disabled = true;
    showerOfLove();
  });
}
