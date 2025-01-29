
"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store/store"
import ToastContainer from "@/components/toastcontainer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <ToastContainer>{children}</ToastContainer>
         
        </body>
      </html>
    </Provider>
  );
}
