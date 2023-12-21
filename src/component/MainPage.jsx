import React from "react";
import "./MainPage.css";

const plans = [
  {
    title: "Basic",
    cash: "89/mo",
    Ncash: "9.99",
    user: "Upto 25 User",
    storage: "Upto 25gb storage",
    email: "email support",
  },
  {
    title: "Standard",
    cash: "189/mo",
    Ncash: "99.99",
    user: "Upto 50 User",
    storage: "Upto 60gb storage",
    email: "email+ chat support",
  },
  {
    title: "Premium",
    cash: "389/mo",
    Ncash: "119.99",
    user: "Upto 75 User",
    storage: "Upto 100gb storage",
    email: "email+chat+what support",
  },
];

function MainPage() {
  return (
    <>
      <div className="plans text-and button">
        <di className="text">
          <h1>Choose a Plan that's just right for you!!</h1>
        </di>

        <div className="plan-btn">
          <button className="btn-one">Monthly</button>
          <button className="btn-two">
            Annually
            <sup style={{ color: "green", fontSize: "10px" }}>-10</sup>
          </button>
        </div>
      </div>
      <div className="main-Cards">
        {plans.map((plan, index) => (
          <div style={{ padding: "5px" }} key={index} className="card">
            <h2 style={{ marginTop: "px", marginLeft: "5px" }}>{plan.title}</h2>

            <p
              style={{
                textDecoration: "line-through",
                color: "red",
                marginTop: "7px",
              }}
            >
              <span style={{ color: "black", marginLeft: "5px" }}>
                ${plan.cash}
              </span>
            </p>

            <p style={{ marginTop: "10px", marginLeft: "5px" }}>
              ${plan.Ncash}
            </p>

            <button
              className="get-start-btn"
              style={{
                backgroundColor: index === 0 ? '#fa98d8' : index === 1 ? '#74ff4e' : "#99d1ff",
              }}
            >
              Get start{" "}
              <i
                style={{ marginLeft: "10px" }}
                class="fa-solid fa-arrow-right"
              ></i>
            </button>

            <hr style={{ margin: "5px", marginTop: "20px" }} />

            <p style={{ marginTop: "13px", fontSize: "10px" }}>
              what you`ll get:
            </p>

            <p style={{ marginTop: "13px", marginLeft: "5px" }}>{plan.user}</p>

            <p style={{ marginTop: "13px", marginLeft: "5px" }}>
              {plan.storage}
            </p>

            <p style={{ marginTop: "13px", marginLeft: "5px" }}>{plan.email}</p>

            <p
              style={{
                marginTop: "18px",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              EXPLORE FEATURES
            </p>
          </div>
        ))}
      </div>
      <div className="row">
          <div className="bottom-card">
            <div className="left">
              <div style={{ backgroundColor: '#74ff4e' }} className='free-forever'>
                <p>Free Forever</p>
              </div>
              <h2>Free Starter</h2>
              <p>The quickest and easiest way to try protocols with basic functionalities</p>
              <button style={{ backgroundColor: '#74ff4e' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="right">
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 25 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                <i class="fa-regular fa-envelope"></i>
                </span>
                <span>Up to 25gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email</span>
              </div>
              <div style={{ display: 'flex' }}>
                <i class="fa-solid fa-check-double"></i>
                <span style={{ marginLeft: '10px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia facilis in consequuntur dicta.</span>
              </div>
            </div>
          </div>
          <div className="bottom-card">
            <div className="left">
              <div style={{ backgroundColor: '#99d1ff' }} className='free-forever'>
                <p>Let's Connect</p>
              </div>
              <h1>Enterprise Plan</h1>
              <p>The quickest and easiest way to try protocols with basic functionalities</p>
              <button style={{ backgroundColor: '#99d1ff' }}>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="right">
              <h5>What you'll get :</h5>
              <div className='features'>
                <i class="fa-regular fa-user"></i>
                <span>Up to 25 User</span>
              </div>
              <div className='features'>
                <span style={{ margin: '0px', fontSize: '1.2rem' }} className="material-symbols-outlined">
                <i class="fa-regular fa-envelope"></i>
                </span>
                <span>Up to 25gb storage User</span>
              </div>
              <div className='features'>
                <i class="fa-regular fa-envelope"></i>
                <span>Email</span>
              </div>
              <div style={{ display: 'flex' }}>
                <i class="fa-solid fa-check-double"></i>
                <span style={{ marginLeft: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default MainPage;



