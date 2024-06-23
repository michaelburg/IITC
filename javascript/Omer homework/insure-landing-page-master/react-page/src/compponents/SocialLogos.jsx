import React from "react";
import facebook from "../img/icon-facebook.svg";
import instagram from "../img/icon-instagram.svg";
import pinterest from "../img/icon-pinterest.svg";
import twitter from "../img/icon-twitter.svg";

function SocialLogos() {
  return (
    <>
      <div className="flex">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={pinterest} alt="" />
        <img src={twitter} alt="" />
      </div>
    </>
  );
}

export default SocialLogos;
