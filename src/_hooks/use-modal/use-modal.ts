import { useEffect, useState } from "react";

export default function useGlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal--open');
    } else {
      document.body.classList.remove('modal--open');
    }
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen
  }
}
