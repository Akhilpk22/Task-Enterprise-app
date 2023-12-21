import React from "react";
import "./Home.css";
import Dashboard from "../component/Dashboard";
import MainPage from "../component/MainPage";
import Rightpage from "../component/Rightpage";

function Home() {
  return (
    <>
      <div class="main-container">
        <div class="sub-portion1">
        {/* this dashboard page  */}
          <Dashboard/>
        </div>
        <div class="sub-portion2">
          {/* this Main page */}
          <MainPage/>
        </div>
        <div class="sub-portion3">
          {/* Right page */}
          <Rightpage/>
        </div>
      </div>
    </>
  );
}

export default Home;
