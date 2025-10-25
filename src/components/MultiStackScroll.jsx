import "../style/MultiStackScroll.css";
import { FaCheckCircle } from "react-icons/fa";
import Fram1 from "../assets/stack/Frame1.png";
import Fram2 from "../assets/stack/Frame2.png";
import Fram3 from "../assets/stack/Frame3.png";
import Fram4 from "../assets/stack/Frame4.png";
import Fram5 from "../assets/stack/Frame5.png";

const pages = [
  {
    id: 1,
    color: "rgba(249, 247, 251, 1)",
    title: "See the Dashboard in Action",
    subtitle: "From insights to actions — the entire employee lifecycle in one view.",
    bulletTitle: "Smart Attendance",
    bullets: [
      "Track employee attendance with precision and ease.",
      "Use automated check-in and check-out systems powered by smart technology.",
      "Monitor real-time attendance data, reduce manual errors, and boost efficiency.",
      "Ensure accuracy and accountability across all teams — effortlessly.",
    ],
    image: Fram1,
  },
  {
    id: 2,
    color: "rgba(249, 247, 251, 1)",
    bulletTitle: "Approvals (Timesheets & Leaves)",
    bullets: [
      "Automatic expense categorization AI sorts every transaction into IRS-approved categories",
      "Review employee timesheets and leave requests in just a few clicks.",
      "Track pending actions, approve or reject instantly, and ensure payroll accuracy.",
      "Save time while maintaining full transparency across teams.",
    ],
    image: Fram2,
  },
  {
    id: 3,
    color: "rgba(249, 247, 251, 1)",
    bulletTitle: "Onboarding Employees",
    bullets: [
      "Make every new hire feel welcome from day one.",
      "Easily manage documentation, role assignments, and introductions.",
      "Automate the onboarding journey with step-by-step guidance.",
      "Help employees settle in faster and feel part of the team from the start."
    ],
    image: Fram3,
  },
  {
    id: 4,
    color: "rgba(249, 247, 251, 1)",
    bulletTitle: "Smart Attendance",
    bullets: [
      "Empower your workforce with structured training programs.",
      "Assign courses, monitor progress, and track performance effortlessly.",
      "Provide resources for skill development and career growth.",
      "Keep your team engaged and always up to date with the latest practices.",
    ],
    image: Fram4,
  },
  {
    id: 5,
    color: "rgba(249, 247, 251, 1)",
    bulletTitle: "Smart Attendance",
    bullets: [
      "Simplify the way you handle employee benefits and allowances.",
      "Set clear rules, manage approvals, and ensure timely disbursements.",
      "Maintain accurate records for audits and payroll integration.",
      "Build trust by offering transparent and fair allowance management.",
    ],
    image: Fram5,
  },
];

const MultiStackScroll = () => {
  return (
    <div className="stack-container" id="demo">
      {pages.map((page) => (
        <section
          key={page.id}
          className="stack-section"
          style={{ backgroundColor: page.color }}
        >
          <div className="stack-content container">
            {/* Background Number */}
            <div className="page-number-bg">{page.id}</div>

            {page.title && <h2 className="stack-title">{page.title}</h2>}
            {page.subtitle && <p className="stack-subtitle">{page.subtitle}</p>}

            <div className="stack-layout">
              <div className="stack-left">
                <div className="pre-bullet-title">
                  {page.bulletTitle}
                </div>
                <ul className="bullet-list">
                  {page.bullets.map((text, i) => (
                    <li key={i}>
                      <FaCheckCircle className="tick-icon" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="stack-right">
                <img
                  src={page.image}
                  alt={page.title || `Page ${page.id}`}
                  className="stack-image"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MultiStackScroll;
