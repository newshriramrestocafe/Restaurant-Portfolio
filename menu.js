const pages = [...document.querySelectorAll('.menu-page')];
const previous = document.querySelector('#prevPage');
const next = document.querySelector('#nextPage');
const counter = document.querySelector('#pageCounter');
const totalCounter = document.querySelector('#pageTotal');
let currentPage = 0;

function updateBook() {
  pages.forEach((page, index) => {
    page.classList.toggle('flipped', index < currentPage);
    page.style.zIndex = index === currentPage ? String(pages.length + 1) : index < currentPage ? String(index + 1) : String(pages.length - index);
  });

  const totalPages = pages.length;
  counter.textContent = String(Math.min(currentPage + 1, totalPages));
  if (totalCounter) totalCounter.textContent = String(totalPages);
  previous.disabled = currentPage === 0;
  next.disabled = currentPage === totalPages - 1;
}

next.addEventListener('click', () => {
  if (currentPage < pages.length - 1) { currentPage += 1; updateBook(); }
});

previous.addEventListener('click', () => {
  if (currentPage > 0) { currentPage -= 1; updateBook(); }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') next.click();
  if (event.key === 'ArrowLeft') previous.click();
});

updateBook();