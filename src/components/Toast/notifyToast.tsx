import { toast } from "react-toastify";

export const notifyToast = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_LEFT,
    autoClose: 8000,
  });
};
