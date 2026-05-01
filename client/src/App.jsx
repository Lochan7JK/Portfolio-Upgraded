// src/App.jsx

import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "@fontsource/poppins";
import "@fontsource/inter";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  const [loaderText, setLoaderText] = useState("");
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      // FIRST VISIT
      sessionStorage.setItem("visited", "true");

      setFirstVisit(true);

      // show welcome message for 2 sec
      setTimeout(() => {
        setFirstVisit(false);
      }, 2000);

    } else {
      // REVISIT
      setLoading(true);

      const messages = [
        "Connecting...",
        "Welcome back 👀",
        "Take a deeeeep breath",
        "Booting again...",
        "Summoning Lochan...",
      ];

      setLoaderText(messages[Math.floor(Math.random() * messages.length)]);

      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  }, []);


  return (
    <>
      <AnimatePresence mode="wait">
        {firstVisit ? (

          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#191919] flex items-center justify-center"
          >
            <h1 className="text-white text-xl md:text-4xl tracking-widest text-center">
              <span className="text-[#00ADB5]">Welcome creature</span>, <br />
              mucho gusto 👀
            </h1>
          </motion.div>


        ) : loading ? (
          <Loader key="loader" text={loaderText} />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Your App */}
            <Home />
          </motion.div>
        )}
      </AnimatePresence>


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
