import { useState, useEffect } from 'react';

export const useResize = () => {
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(window.innerHeight);

    function resizeEvent() {
      setContainerHeight(window.innerHeight ?? 0);
    }
    const onResize = () => {
      window.requestAnimationFrame(resizeEvent);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return containerHeight;
};
