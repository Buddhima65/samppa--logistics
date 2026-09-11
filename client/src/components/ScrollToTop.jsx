
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;