import React from "react";
import logo from "./images/Km5.jpg";
import "./KollmorgenImage.css";

export default function KollmorgenImage() {
  return (
    <div>
      <img src={logo} alt="" className="hero--photo" />
    </div>
  );
}
