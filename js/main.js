// // HBR leadspace parallax
// function handleIntersect(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('parallax-active');
//       } else {
//         entry.target.classList.remove('parallax-active');
//       }
//     });
//   }
  
//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0
//   };

//   const options1 = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0
//   };

// const observer = new IntersectionObserver(handleIntersect, options);
// const parallaxSection = document.querySelector('.hbr-leadspace');
// const imageSection = document.querySelector('.hbr-leadspace-bg-image');
// observer.observe(parallaxSection);
// const initialPosition = '-100px';
// imageSection.style.backgroundPositionY = initialPosition;
// window.addEventListener('scroll', function() {
//     const parallaxImages = document.querySelectorAll('.parallax-active .hbr-leadspace-bg-image');
//     const scrolled = window.scrollY;
  
//     parallaxImages.forEach(image => { 
//       console.log('image found')
//         let positionY = - scrolled;
//         if(positionY < -99 && positionY > -300) {
//           image.style.backgroundPositionY = - scrolled * 1.2 + 'px';
//         }
//     });
//   });

  // add opacty on intersecting

  function handleIntersectOpacity(entries, observerOpacity) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-active');
      } 
    });
  }

  const optionsOpacity = {
    root: null,
    rootMargin: '0px 0px -18% 0px',
    threshold: 0
  };

  const observerOpacity = new IntersectionObserver(handleIntersectOpacity, optionsOpacity);

  const opacitySection = document.querySelectorAll('.intersection-opacity');

  opacitySection.forEach(obs => {
    observerOpacity.observe(obs);
  })

// sub nav and scroll section active
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.hbr-sub-navigation ul li a');

const optionsSection = {
    root: null,
    rootMargin: '-80% 0px -10% 0px',
    threshold: 0, // Adjust this threshold as needed
};

function handleIntersectionSection(entries, observerSection) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Find the corresponding link and add the "active" class
            const sectionId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                if (link.getAttribute('href') == `#${sectionId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}

const observerSection = new IntersectionObserver(handleIntersectionSection, optionsSection);

sections.forEach((section) => {
  observerSection.observe(section);
});

// Add a click event listener to the links
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const sectionId = link.getAttribute('href').substring(1); // Remove the "#" symbol
        const section = document.getElementById(sectionId);      
        
        section.scrollIntoView({ behavior: 'smooth' });
      
        // Add the "active" class to the clicked link and remove it from others
        navLinks.forEach((navLink) => {
            if (navLink === link) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });
});

// HBR title reveal on scroll

let optionsSpan = {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0,
};

// for staggering
// let callback = (entries, observer) => {
//   entries.forEach((entry, index) => {
//     if(entry.isIntersecting) {
//       setTimeout(() => {
//         entry.target.classList.add('animate'); 
//       }, index * 100)
//     }
//   });
// };

//no stagger effect
let handleIntersectionSpan = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {      
      let span = entry.target.querySelector('span');
      span.classList.add('animate');

      observerSpan.unobserve(entry.target);
    }
  });
};


let targets = document.querySelectorAll(".word");
let observerSpan = new IntersectionObserver(handleIntersectionSpan, optionsSpan);

targets.forEach(target => {
  observerSpan.observe(target);
})

let length = document.querySelectorAll(".hbr-leadspace-bg-image figure path");

if(length) {
  for(let i = 0; i<length.length; i++){
  console.log(`Letter ${i} is ${length[i].getTotalLength()}`)
}
}

window.addEventListener('scroll', function () {
  const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const bodyBG = document.querySelector('.hbr-leadspace-bg-image');

  // Calculate the new background position as a percentage
  const newBackgroundPosition = (scrolled / totalScrollHeight) * 100;

  // Set the background position
  if(bodyBG) {
    bodyBG.style.backgroundPositionY = ` ${newBackgroundPosition}%`;
  }
});