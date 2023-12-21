import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="profile">
        <img
          style={{
            borderRadius: "50%",
            height: "120px",
            width: "110px",
            marginTop: "10px",
            marginLeft: "35px",
          }}
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h3 className="profile-h3">
          Ram Mohan{" "}
          <i
            style={{ color: "blue", fontSize: "20px" }}
            className="fa-solid fa-angle-right"
          ></i>
        </h3>
        <h5 className="profile-h5">rammohan@gmail.com</h5>
     

      <div className="profile-content">
        <div className="menu-item">
          <i style={{ color: "blue" }} className="fa-solid fa-table-columns"></i>{" "}
          <span style={{ marginLeft: "10px" }}>Dashboard</span>
        </div>
        <div className="menu-item">
          <i
            style={{ color: "blue" }}
            className="fa-solid fa-person-dress-burst"
          ></i>
          <span style={{ marginLeft: "10px" }}>Perks</span>
        </div>
        <div className="menu-item">
          <i style={{ color: "blue" }} className="fa-solid fa-puzzle-piece"></i>{" "}
          <span style={{ marginLeft: "10px" }}> Addons</span>
        </div>
        <div className="menu-item">
          {" "}
          <i
            style={{ color: "blue" }}
            className="fa-solid fa-clipboard-question"
          ></i>
          <span style={{ marginLeft: "15px" }}>FAQ</span>
        </div>
        <div className="menu-item">
          <i style={{ color: "blue" }} className="fa-solid fa-life-ring"></i>
          <span style={{ marginLeft: "10px" }}>Support</span>
        </div>
      </div>

      <div className="footer">
        <div className="logout">
          Logout{" "}
          <i
            style={{ fontSize: "20px" }}
            className="fa-solid fa-arrow-right-from-bracket"
          ></i>
        </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
