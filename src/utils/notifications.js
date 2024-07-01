import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showSuccess = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

const showError = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

const showInfo = (message) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export { showSuccess, showError, showInfo };
