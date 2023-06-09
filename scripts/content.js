function handleEvent (event) {
  if (document.querySelector('[aria-label^="Lower hand"]')) return;

  if (!confirm("Are you sure you want to raise your hand?")){
    event.stopPropagation();
  }
}

const ob = new MutationObserver(() => {
  const raiseHandButton = document.querySelector('[aria-label^="Raise hand"]');

  if (raiseHandButton) {
    raiseHandButton.addEventListener('click', handleEvent);
  }
})

ob.observe(document.body, {
  childList: true,
  subtree: true
})



