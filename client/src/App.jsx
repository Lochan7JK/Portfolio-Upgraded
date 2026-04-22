// src/App.jsx

import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "@fontsource/poppins";
import "@fontsource/inter";

function App() {
  return(
    <>
      {/* Your App */}
      <Home />

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"

        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;