'use client';

import { useEffect, useRef, useState } from 'react';

export default function FuriganasSwitch() {
  const ref = useRef(null);
  const [showFuriganas, setShowFuriganas] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('show-furiganas') !== 'false') {
      setShowFuriganas(true);
    }
  }, []);

  useEffect(() => {
    if (showFuriganas) {
      document.body.classList.add('show-furiganas');
      localStorage.removeItem('show-furiganas');
    } else {
      document.body.classList.remove('show-furiganas');
      localStorage.setItem('show-furiganas', 'false');
    }
    ref.current?.blur();
  }, [showFuriganas]);

  return (
    <div className="form-check form-switch">
      <input
        ref={ref}
        id="furiganas-switch"
        className="form-check-input"
        type="checkbox"
        role="switch"
        checked={showFuriganas}
        onChange={() => setShowFuriganas(!showFuriganas)}
      />
      <label
        className="form-check-label"
        htmlFor="furiganas-switch"
      >Furiganas</label>
    </div>
  );
}
