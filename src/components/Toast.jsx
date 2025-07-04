import { useState, useEffect } from 'react';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Toast = ({ message, type = 'info', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Allow fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyles = () => {
    const baseStyles = "flex items-center p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 transform";
    
    if (!isVisible) {
      return `${baseStyles} opacity-0 translate-x-full`;
    }

    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-50 text-green-800 border border-green-200`;
      case 'error':
        return `${baseStyles} bg-red-50 text-red-800 border border-red-200`;
      case 'warning':
        return `${baseStyles} bg-yellow-50 text-yellow-800 border border-yellow-200`;
      default:
        return `${baseStyles} bg-blue-50 text-blue-800 border border-blue-200`;
    }
  };

  const getIcon = () => {
    const iconClass = "h-5 w-5 mr-3 flex-shrink-0";
    
    switch (type) {
      case 'success':
        return <CheckCircleIcon className={`${iconClass} text-green-500`} />;
      case 'error':
        return <XCircleIcon className={`${iconClass} text-red-500`} />;
      case 'warning':
        return <ExclamationTriangleIcon className={`${iconClass} text-yellow-500`} />;
      default:
        return <InformationCircleIcon className={`${iconClass} text-blue-500`} />;
    }
  };

  return (
    <div className={getToastStyles()}>
      {getIcon()}
      <span className="text-sm font-medium flex-1">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 text-gray-400 hover:text-gray-600"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

const ToastContainer = ({ toasts = [], removeToast }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export { Toast, ToastContainer };