import React from "react";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <>
      <div className={style.feed__header}>
        <h2>Home</h2>
        <div className={style.innercontainer}>
        <div><h3>For you</h3></div>
       
        <div><h3>Following</h3></div>
      </div>
      </div>
    </>
  );
}
export default Navbar;
