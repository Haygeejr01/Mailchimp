document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.classList.add('is-pinned');
    } else {
      header.classList.remove('is-pinned');
    }
  };

  
  handleScroll();
  
  window.addEventListener('scroll', handleScroll, { passive: true });
});

