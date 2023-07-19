const blocks = document.querySelectorAll('.reveal');

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (top <= windowHeight && bottom >= 0) {
    return true;
  } else {
    return false;
  }
}

function handleScroll() {
  blocks.forEach((block) => {
    if (isVisible(block)) {
      block.classList.add('reveal_active');
    } else {
      block.classList.remove('reveal_active');
    }
  })
}


document.addEventListener('scroll', handleScroll);