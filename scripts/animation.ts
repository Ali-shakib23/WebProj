window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll<HTMLElement>('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.remove('opacity-0', 'translate-y-6');
      card.classList.add('opacity-100', 'translate-y-0');
    }, index * 200); // stagger by 200ms
  });
});
