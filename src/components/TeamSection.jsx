import "../style/TeamSection.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="team-section" id="why-us" ref={ref}>
      <div className="team-container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="team-title">Why Teams Choose Us</h2>
          <p className="team-subtitle">Experience measurable results and ROI from day one.</p>
        </motion.div>

        <div className="team-cards">
          {teamCards.map((card, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 * index, ease: "easeOut" }}
            >
              <img src={card.image} alt={card.title} className="team-card-img" />
              <div className="team-card-body">
                <h3 className="team-card-title">{card.title}</h3>
                <p className="team-card-desc">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
