import { startTransition } from 'react';

export const ToggleNavbar = ({ setIsActive, isActive }) => {
  return () => {
    startTransition(() => {
      setIsActive(!isActive);
    });
  };
};
