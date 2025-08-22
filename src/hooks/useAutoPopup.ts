import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

interface UseAutoPopupProps {
  delay?: number; // Delay in milliseconds
  showOnlyOnce?: boolean; // Show only once per session
}

export const useAutoPopup = ({ delay = 5000, showOnlyOnce = true }: UseAutoPopupProps = {}) => {
  const [showModal, setShowModal] = useState(false);
  const { userRole } = useAuth();

  useEffect(() => {
    // Don't show if user is already logged in
    if (userRole) {
      return;
    }

    // Check if popup was already shown in this session
    if (showOnlyOnce && sessionStorage.getItem('autoPopupShown')) {
      return;
    }

    // Check if user has dismissed popup permanently
    if (localStorage.getItem('autoPopupDismissed')) {
      return;
    }

    // Set timer to show modal after delay
    const timer = setTimeout(() => {
      setShowModal(true);
      if (showOnlyOnce) {
        sessionStorage.setItem('autoPopupShown', 'true');
      }
    }, delay);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [delay, showOnlyOnce, userRole]);

  const closeModal = () => {
    setShowModal(false);
  };

  const dismissPermanently = () => {
    setShowModal(false);
    localStorage.setItem('autoPopupDismissed', 'true');
  };

  const resetDismissal = () => {
    localStorage.removeItem('autoPopupDismissed');
    sessionStorage.removeItem('autoPopupShown');
  };

  return {
    showModal,
    closeModal,
    dismissPermanently,
    resetDismissal
  };
};
