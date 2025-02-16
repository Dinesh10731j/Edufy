"use client"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import Toast from "./toast";
import { removeToast } from "@/redux/slices/toastSlice";

const ToastContainer = () => {
  const toasts = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => dispatch(removeToast(toast.id))}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
