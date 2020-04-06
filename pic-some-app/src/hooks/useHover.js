import { useState, useEffect, useRef } from 'react';

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const onHoverOver = () => setHovered(true);

  const onHoverOut = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener('mouseenter', onHoverOver);
    ref.current.addEventListener('mouseleave', onHoverOut);
    return () => {
      ref.current.removeEventListener('mouseenter', onHoverOver);
      ref.current.removeEventListener('mouseleave', onHoverOut);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
