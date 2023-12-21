import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-section">
        <div className="left-portion">
          {/* Left side */}
          <img
            width={"110px"}
            src="/Assets/brand-logo.png"
            alt="Logo"
            className="brand-logo"
          />
        </div>

        <div className="right-portion">
          <div className="right-1">
            <img
              style={{ height: "2rem", width: "30px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <span>rammohan@gmail.com</span>
          </div>

          <div className="icon">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
