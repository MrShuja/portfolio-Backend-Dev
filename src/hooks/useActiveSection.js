import { useEffect, useState } from 'react';

export function useActiveSection(sections) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return active;
}

