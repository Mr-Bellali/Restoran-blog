import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize react-toastify
toast.configure();

const showSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const showError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const showInfo = (message) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export { showSuccess, showError, showInfo };
