// src/pages/Home.jsx

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MusicToggle from "../components/MusicToggle";
import ParticlesBg from "../components/ParticlesBg";
import CursorGlow from "../components/CursorGlow";
import FloatingSocials from "../components/FloatingSocials";
// import FloatingShapes from "../components/FloatingShapes";
// import ScrollToTop from "../components/ScrollToTop";
// import ExampleProjects from "../components/ExampleProjects";
import ScrollIndicator from "../components/ScrollIndicator";


function Home() {
  
  const globalParticles = {
        background: {
          color: "#1a1a1a",
        },
        fullScreen: {
          enable: true, // stays global
        },
        particles: {
          number: {
            value: 270,
            density: { enable: true },
          },
          color: {
            value: ["#00ADB5", "#AFFFFF"], // 🔥 multi-color 
          },
          links: {
            enable: false, // ❌ disable default connections
            distance: 120, // closer = more connections
            color: "#00ADB5",
            opacity: 0.5, // 🔥 increase visibility
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3, // less = smoother
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 2 }, // 🔥 smaller dots
          },
        },
        // detectRetina: true,
        // interactivity: {
  
        //   events: {
        //     onHover: {
        //       enable: !isMobile,
        //       mode: "connect",
        //     },
        //   },
        // }

        // ❌ IMPORTANT: completely disable interactivity
        interactivity: {
          detectsOn: "canvas", // 👈 IMPORTANT (not window)
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
};

  return (
    <div className="relative">
      {/* <FloatingShapes /> */}
      <FloatingSocials />
      <CursorGlow />

       {/* GLOBAL FLOATING PARTICLES */}
      <ParticlesBg options={globalParticles} fullScreen={true} />

      <ScrollIndicator />

      {/* <Example /> */}
      <Hero />
      <Navbar />
      <About />
      <Projects />
      {/* <ExampleProjects /> */}
      <Contact />

      <MusicToggle /> {/* 👈 floating button */}

      <Footer /> 
      {/* <ScrollToTop /> */}

    </div>
  );
}

export default Home;