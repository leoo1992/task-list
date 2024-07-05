import { useState, useEffect } from 'react';
import Loader from '../Components/Loader';

export default function Suspense({
  children,
  fallback = Loader(),
  delay = 500,
}) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showLoader ? fallback : children;
}
