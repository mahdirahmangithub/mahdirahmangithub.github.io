const parallaxElements = document.querySelectorAll('[data-parallax-factor]');

const parallax = elements => {
  if (elements.length > 0) {
    elements.forEach(element => {
      const parallaxFactor = parseFloat(element.getAttribute('data-parallax-factor'));
      const y = window.innerHeight - element.getBoundingClientRect().top;
      if (y > 0) {
        element.style.transform = `translate3d(0, -${parallaxFactor * y}px, 0)`;
      }
    });
  }
};

parallax(parallaxElements);

window.onscroll = () => {
  parallax(parallaxElements);
};
