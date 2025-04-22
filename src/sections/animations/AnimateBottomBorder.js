export function animateBottomBorder(element) {
    if (!element) return;
  
    element.style.position = 'relative';
    element.style.display = 'inline-block';
    element.style.paddingBottom = '5px';
  
    const existing = element.querySelector('.bottom-border-anim');
    if (existing) return;
  
    const border = document.createElement('span');
    border.className = 'bottom-border-anim';
    border.style.position = 'absolute';
    border.style.bottom = '0';
    border.style.left = '0';
    border.style.height = '3px';
    border.style.width = '0';
    border.style.backgroundColor = '#007bff';
    border.style.transition = 'width 1s ease-out';
  
    element.appendChild(border);
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          border.style.width = '100%';
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );
  
    observer.observe(element);
  }
  