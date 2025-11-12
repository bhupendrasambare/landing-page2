import React from "react";
import "../style/TestimonySection.css";
import user1 from "../assets/testimony/user1.png";
import user2 from "../assets/testimony/user2.png";
import user3 from "../assets/testimony/user3.png";

const testimonialsGroup = [
  [
    {
      text: "Onboarding new employees used to take days — now it's done in minutes. The automation is a game changer.",
      name: "Sarah Mitchell",
      title: "HR Director, FinEdge",
      img: user1,
    },
    {
      text: "This tool has streamlined our communication and boosted employee engagement like never before.",
      name: "Aisha Thompson",
      title: "CEO, WorkWave",
      img: user2,
    },
    {
      text: "We've reduced our manual HR workload by over 50%. It's been a total productivity booster.",
      name: "Daniel Carter",
      title: "People Ops Lead, FlowTech",
      img: user3,
    },
  ],
  [
    {
      text: "The insights and reporting features have saved us hours each week. Incredible experience!",
      name: "David Kim",
      title: "Operations Lead, BrightTech",
      img: user3,
    },
    {
      text: "We finally have a single source of truth for employee data — and it's so easy to use.",
      name: "Maria Lopez",
      title: "HR Manager, CloudSync",
      img: user2,
    },
    {
      text: "Integration with our payroll system was seamless. Great support from the team too!",
      name: "Michael Green",
      title: "Finance Director, DeskPro",
      img: user1,
    },
  ],
  [
    {
      text: "Our payroll process is now faster and error-free. Couldn't be happier with the results!",
      name: "James Rodriguez",
      title: "Finance Head, NovaCore",
      img: user2,
    },
    {
      text: "It has transformed how we handle onboarding and compliance tracking. Love it!",
      name: "Priya Desai",
      title: "HR Partner, TeamEdge",
      img: user1,
    },
    {
      text: "The automation and accuracy have truly set this platform apart from competitors.",
      name: "Leo Grant",
      title: "COO, InnovateX",
      img: user3,
    },
  ],
];

const TestimonySection = () => {
  const directions = ["up", "down", "up"];

  return (
    <section className="testimony-section" id="testimonials">
      <div className="container">
        <h2 className="testimony-title">Trusted by Industry Leaders</h2>
        <p className="testimony-subtitle">See what our customers have to say</p>

        {/* Desktop */}
        <div className="testimony-scroll-container desktop">
          {testimonialsGroup.map((group, i) => (
            <div
              key={i}
              className={`scroll-column ${
                directions[i] === "down" ? "scroll-down" : "scroll-up"
              }`}
            >
              <div className="scroll-inner">
                {[...group, ...group].map((t, idx) => (
                  <div key={idx} className="testimonial-card">
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-user">
                      <img src={t.img} alt={t.name} className="testimonial-img" />
                      <div>
                        <p className="testimonial-name">{t.name}</p>
                        <p className="testimonial-title">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="testimony-scroll-container mobile">
          <div className="scroll-column scroll-down">
            <div className="scroll-inner">
              {[...testimonialsGroup.flat(), ...testimonialsGroup.flat()].map(
                (t, idx) => (
                  <div key={idx} className="testimonial-card">
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-user">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="testimonial-img"
                      />
                      <div>
                        <p className="testimonial-name">{t.name}</p>
                        <p className="testimonial-title">{t.title}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
