import { useState } from 'react';
import { ToggleNavbar } from '../utils/ToggleNavbar';

export function useHeaderState() {
  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = ToggleNavbar({ setIsActive, isActive });
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  return {
    isActive,
    setIsActive,
    toggleNavbar,
    isVisible,
    setIsVisible,
    prevScrollPos,
    setPrevScrollPos,
  };
}
