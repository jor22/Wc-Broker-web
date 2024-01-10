import React from "react";
import "./BurgerButton.css";

const BurgerButton = ({ handleClick, isActive }) => {
  return (
    <>
      <div
        class={`hamburger ${isActive ? "is-active" : ""}`.trim()}
        onClick={handleClick}
      >
        <div class="_layer -top"></div>
        <div class="_layer -mid"></div>
        <div class="_layer -bottom"></div>
      </div>
    </>
  );
};

export default BurgerButton;
