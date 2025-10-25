import { useState } from "react";
import { FaUserClock, FaChartBar, FaClipboardList, FaCalendarAlt, FaUsersCog, FaMoneyCheckAlt, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../style/FeatureSection.css";

const features = [
  { icon: <FaUserClock />, title: "Smart Attendance", desc: "Automated clock-in/out tracking with real-time monitoring and location verification." },
  { icon: <FaChartBar />, title: "Analytics Dashboard", desc: "Get actionable insights on performance, productivity, and attendance trends." },
  { icon: <FaClipboardList />, title: "Task Management", desc: "Assign, track, and manage tasks efficiently across teams and departments." },
  { icon: <FaCalendarAlt />, title: "Leave Management", desc: "Simplify leave requests, approvals, and tracking with an intuitive calendar view." },
  { icon: <FaUsersCog />, title: "Employee Directory", desc: "Centralized employee information with easy access and role-based controls." },
  { icon: <FaMoneyCheckAlt />, title: "Payroll Automation", desc: "Seamless salary calculations and automated payslip generation every month." },
  { icon: <FaHeadset />, title: "Support & Helpdesk", desc: "Integrated support system for queries, issues, and internal communication." },
  { icon: <FaShieldAlt />, title: "Secure Access", desc: "Advanced role-based authentication and data encryption for full protection." },
];

const FeatureSection = () => {
  const [hovered, setHovered] = useState(null);
  const [permanentReversed, setPermanentReversed] = useState(0);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = (index) => {
    setHovered(null);
    setPermanentReversed(index); 
  };

  return (
    <section className="feature-section d-flex flex-column justify-content-center" id="features">
      <div className="container">
        <motion.h2
          className="feature-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Everything You Need in One Dashboard
        </motion.h2>

        <motion.p
          className="feature-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stop juggling spreadsheets — manage everything in one intuitive dashboard.
        </motion.p>
      </div>

      <div>
        <div className="feature-slider">
          {features.map((f, i) => {
            const isReversed = i === permanentReversed || i === hovered;
            return (
              <motion.div
                key={i}
                className={`feature-card shadow my-3 ${isReversed ? "reversed" : ""}`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-card-content">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
