import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll
    });
  }, [pathname]); // Trigger effect whenever route changes
};

export default useScrollToTop;
