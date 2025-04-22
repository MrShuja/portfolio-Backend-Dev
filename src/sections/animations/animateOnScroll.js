// 📁 animations/animateOnScroll.js
export function animateOnScroll(elements, animationClass = 'animate-fadeInUp') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(el => observer.observe(el));
  }
  