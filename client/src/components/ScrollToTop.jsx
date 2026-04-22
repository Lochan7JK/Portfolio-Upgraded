// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// function ScrollToTop() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (!show) return null;

//   return (
//     <button
//       onClick={scrollTop}
//       className="fixed bottom-6 right-6 z-50 group"
//     >
//       <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#00ADB5] text-[#00ADB5] backdrop-blur-md bg-white/5 hover:bg-[#00ADB5] hover:text-white transition duration-300">
//         <FaArrowUp />
//       </div>
//     </button>
//   );
// }

// export default ScrollToTop;