import { useEffect } from 'react';

export default function ResizeDropDownEffect({ setOpenDropdownId }) {
  useEffect(() => {
    const handleResize = () => {
      setOpenDropdownId(null);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setOpenDropdownId]);

  return null;
}
