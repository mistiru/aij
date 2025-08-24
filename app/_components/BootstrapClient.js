'use client';

import { useEffect, useRef } from 'react';

export default function BootstrapClient() {
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    done.current = true;
  }, []);

  return null;
}
