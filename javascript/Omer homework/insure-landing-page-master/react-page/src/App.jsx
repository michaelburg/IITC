import React from "react";
import NavBar from "./compponents/NavBar";
import LinksSection from "./compponents/LinksSection";
import SocialLogos from "./compponents/SocialLogos";
// import pattern1 from "./img/bg-pattern-intro-right-desktop.svg";
// import pattern2 from "./img/bg-pattern-intro-left-desktop.svg";
// import pattern3 from "./img/bg-pattern-how-we-work-desktop.svg";
// import pattern4 from "./img/bg-pattern-footer-desktop.svg";
import mainPic from "./img/image-intro-mobile.jpg";
import Picture from "./compponents/Picture";
import logo from "./img/logo.svg";
import Cards from "./compponents/Cards";

function App() {
  return (
    <>
      <NavBar />
      <Picture srcPath={mainPic} />

      <div className="bg-[#2C2640] text-white text-center py-16">
        <h1 className="text-6xl">Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <p className="border border-white flex">View plans</p>
      </div>
      <h1>We're fifferent</h1>
      <Cards />
      <div className="bg-[#2C2640] text-white text-center py-16">
        <h1 className="text-6xl">Find out more about how we work</h1>
        <p className="border border-white flex">How we work</p>
      </div>
      <Picture srcPath={logo} />
      <SocialLogos />
      <LinksSection />
    </>
  );
}

export default App;
