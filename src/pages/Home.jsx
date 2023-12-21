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
          <Dashboard/>
        </div>
        <div class="sub-portion2">
          <MainPage/>
        </div>
        <div class="sub-portion3">
          <Rightpage/>
        </div>
      </div>
    </>
  );
}

export default Home;
