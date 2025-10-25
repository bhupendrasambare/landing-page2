import React from "react";
import "../style/TeamSection.css";
import TeamFrame1 from "../assets/team/TeamFrame1.png";
import TeamFrame2 from "../assets/team/TeamFrame2.png";
import TeamFrame3 from "../assets/team/TeamFrame3.png";

const teamCards = [
  {
    image: TeamFrame1,
    title: "Save Hours Every Week",
    description:
      "Automate routine HR and admin tasks. Reduce manual work by up to 40% and focus on what matters most.",
  },
  {
    image: TeamFrame2,
    title: "Gain Real-Time Insights",
    description:
      "Get dashboards that guide better decisions. Track metrics, monitor trends, and optimize operations.",
  },
  {
    image: TeamFrame3,
    title: "Keep Data Secure",
    description:
      "Role-based access ensures privacy and compliance. Enterprise-grade security for peace of mind.",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section" id="why-us">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Why Teams Choose Us</h2>
          <p className="team-subtitle">
            Experience measurable results and ROI from day one.
          </p>
        </div>

        <div className="team-cards">
          {teamCards.map((card, index) => (
            <div className="team-card" key={index}>
              <img src={card.image} alt={card.title} className="team-card-img" />
              <div className="team-card-body">
                <h3 className="team-card-title">{card.title}</h3>
                <p className="team-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
