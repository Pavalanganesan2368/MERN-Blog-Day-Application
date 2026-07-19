import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        theme="dark"
        hideProgressBar={true}
      />
    </BrowserRouter>
  </>,
);
