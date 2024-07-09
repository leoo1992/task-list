import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message, options = {}) => {
    if (isToastVisible) {
      toast.dismiss();
    }
    setIsToastVisible(true);
    toast(message, {
      ...options,
      onClose: () => setIsToastVisible(false),
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
