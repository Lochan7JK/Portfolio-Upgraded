
// import { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FloatingSocials() {
  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 text-gray-400">

      <a href="https://www.linkedin.com/in/lochan-singoria-503347243/" target="_blank">
        <FaLinkedinIn className="text-2xl hover:text-white hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_10px_#00ADB5]" />
      </a>

      <a href="https://x.com/LochanSing13646" target="_blank">
        <FaTwitter className="text-2xl hover:text-white hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_10px_#00ADB5]" />
      </a>

      <a href="#" target="_blank">
        <FaInstagram className="text-2xl hover:text-white hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_10px_#00ADB5]" />
      </a>

      <a href="mailto:lochansingoria@gmail.com?subject=Let's%20Work%20Together" target="_blank">
        <MdEmail className="text-2xl hover:text-white hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_10px_#00ADB5]" />
      </a>
     <a href="https://github.com/Lochan7JK" target="_blank">
        <FaGithub className="text-2xl hover:text-white hover:scale-125 transition duration-300 hover:drop-shadow-[0_0_10px_#00ADB5]" />
      </a>

    </div>
  );
}

export default FloatingSocials;

