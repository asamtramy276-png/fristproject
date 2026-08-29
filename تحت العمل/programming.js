const cards = document.querySelectorAll('.card');
const panel = document.getElementById('panel');
const panelTitle = document.getElementById('panel-title-text');
const panelDesc = document.getElementById('panel-desc-text');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const isAlreadyActive = card.classList.contains('active');

    // remove active state from all cards first
    cards.forEach(c => c.classList.remove('active'));

    if (isAlreadyActive) {
      // clicking the same active card again closes the panel
      panel.classList.remove('show');
      return;
    }

    card.classList.add('active');
    panelTitle.textContent = card.dataset.title;
    panelDesc.textContent = card.dataset.desc;
    panel.classList.add('show');
  });
});