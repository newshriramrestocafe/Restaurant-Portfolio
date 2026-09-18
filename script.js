const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.poster-card');
const dialog = document.querySelector('.poster-dialog');
const dialogImage = dialog.querySelector('img');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const category = filter.dataset.filter;
    cards.forEach((card) => card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category));
  });
});

cards.forEach((card) => {
  card.addEventListener('click', () => {
    dialogImage.src = card.dataset.full;
    dialogImage.alt = card.querySelector('img').alt;
    dialog.showModal();
  });
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog || event.target.classList.contains('dialog-close')) dialog.close();
});