import { useState } from "react";
import {
  FaUserClock,
  FaChartBar,
  FaClipboardList,
  FaCalendarAlt,
  FaUsersCog,
  FaMoneyCheckAlt,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";
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
  // Removed hover color logic entirely
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

      <motion.div
        className="feature-slider"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="feature-card my-3"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0,0,0,0.2)" }}
          >
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-card-content">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
