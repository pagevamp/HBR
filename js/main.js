function handleIntersect(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('parallax-active');
      } else {
        entry.target.classList.remove('parallax-active');
      }
    });
  }
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  const options1 = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

const observer = new IntersectionObserver(handleIntersect, options);
const parallaxSection = document.querySelector('.hbr-leadspace');
observer.observe(parallaxSection);
const initialPosition = '-100px';
parallaxSection.style.backgroundPositionY = initialPosition;
window.addEventListener('scroll', function() {
    const parallaxImages = document.querySelectorAll('.parallax-active.hbr-leadspace');
    const scrolled = window.scrollY;
  
    parallaxImages.forEach(image => { 
        let positionY = - scrolled;
        if(positionY < -99 && positionY > -300) {
            parallaxSection.style.backgroundPositionY = - scrolled * 1.2 + 'px';
        }
    });
  });

  function handleIntersectOpacity(entries, observerOpacity) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-active');
      } else {
        entry.target.classList.remove('opacity-active');
      }
    });
  }

  const optionsOpacity = {
    root: null,
    rootMargin: '500px',
    threshold: 0
  };

  const observerOpacity = new IntersectionObserver(handleIntersectOpacity, optionsOpacity);

  const opacitySection = document.querySelectorAll('.intersection-opacity');

  opacitySection.forEach(obs => {
    observerOpacity.observe(obs);
  })
