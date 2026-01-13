document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.classList.add('is-pinned');
    } else {
      header.classList.remove('is-pinned');
    }
  };

  // Initial check
  handleScroll();
  
  window.addEventListener('scroll', handleScroll, { passive: true });
});
