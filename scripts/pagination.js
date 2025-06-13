const cards = document.querySelectorAll('.card');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.getElementById('nextBtn');

  let currentPage = 1;
  const totalPages = dots.length;

  function showPage(page) {
    cards.forEach(card => {
      card.style.display = card.dataset.page == page ? 'flex' : 'none';
    });

    dots.forEach(dot => {
      dot.classList.toggle('bg-teal-700', dot.dataset.page == page);
      dot.classList.toggle('bg-gray-400', dot.dataset.page != page);
    });

    nextBtn.disabled = page >= totalPages;
    nextBtn.classList.toggle('opacity-50', page >= totalPages);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentPage = Number(dot.dataset.page);
      showPage(currentPage);
    });
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);