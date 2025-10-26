import React from "react";
import "../style/GetStartedSection.css";

const GetStartedSection = () => {

  const handleGetStarted = () => {
    window.open("https://mprar.vercel.app", "_blank");
  };
  
  return (
    <section className="container">
      <div className="getstarted-section my-5">
        
        <div className="getstarted-content">
          {/* Blurred circle */}
          <div className="blur-circle"></div>

          <h2 className="getstarted-title">Start Managing Smarter</h2>
          <p className="getstarted-desc">
            Join hundreds of companies using our platform to save time, reduce
            manual errors, and improve employee satisfaction. Manage your people
            with confidence and clarity.
          </p>

          <button className="trusted-btn">
            Trusted by 500+ growing teams worldwide.
          </button>
          <button className="getstarted-btn-bottom" onClick={handleGetStarted}>Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default GetStartedSection;
