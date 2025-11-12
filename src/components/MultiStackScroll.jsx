import "../style/MultiStackScroll.css";
import Fram1 from "../assets/stack/Frame1.png";
import Fram2 from "../assets/stack/Frame2.png";
import Fram3 from "../assets/stack/Frame3.png";
import Fram4 from "../assets/stack/Frame4.png";
import Fram5 from "../assets/stack/Frame5.png";

const pages = [
  {
    id: 1,
    title: "Smart Attendance",
    subtitle: "Empower your team to clock in and out easily within approved geolocation zones. Each entry is securely recorded and automatically adjusted based on company-defined rounding rules — ensuring consistent and accurate time records every day.",
    bulletTitle: "Smart Attendance",
    bullets: [
      "Allow employees to clock in/out from designated locations with GPS 	validation.",
      "Customize rounding rules to standardize time entries to preset intervals.",
      "Streamline attendance tracking while maintaining flexibility for your team.",
      "Improve payroll accuracy with consistent, location-verified data.",
    ],
    image: Fram1,
  },
  {
    id: 2,
    title: "Timesheets and Leave Requests",
    subtitle: "Easily manage time, attendance, and absences all in one place. Employees can submit timesheets and leave requests for manager approval, while the system automatically applies company rules for hours, breaks, and allowances — ensuring every record stays accurate and up to date.",
    bulletTitle: "Timesheets and Leave Requests",
    bullets: [
      "Employees submit timesheets and leave requests directly to their managers for approval or decline.",
      "Timesheets auto-fill using standard working hour rules, with overtime 	calculated automatically.",
      "Company-set rules handle lunch deductions and overtime rounding.",
      "Holiday and sick day allowances update automatically when requests are approved.",
      "Live balances visible to both employees and managers for complete transparency.",
    ],
    image: Fram2,
  },
  {
    id: 3,
    title: "Onboarding Employees",
    subtitle: "Streamline the entire onboarding process with digital forms, contracts, and checklists — all in one secure system. Collect essential employee details, assign roles, and send digital contracts for signature, ensuring every new hire is fully set up before their first day.",
    bulletTitle: "Onboarding Employees",
    bullets: [
      "Send and store digital employment contracts securely with built-in e-signatures.",
      "Gather all required employee details and documents through guided forms.",
      "Assign roles, permissions, and department access automatically.",
      "Provide clear onboarding checklists for both new hires and managers.",
      "Ensure a smooth, paperless onboarding experience from offer to first day.",
    ],
    image: Fram3,
  },
  {
    id: 4,
    title: "Training Matrix",
    subtitle: "Stay on top of employee training and compliance with an automated system that tracks certifications, sends expiry reminders, and keeps your workforce qualified. Easily filter by employee or course to view training progress and upcoming renewals.",
    bulletTitle: "Training Matrix",
    bullets: [
      "Monitor all staff training records and certificate expiry dates in one place.",
      "Receive automated reminders at 60, 30, and 15 days before expiry.",
      "Upload, view, and download certificates directly from the dashboard.",
      "Filter by employee or course for quick access to training status.",
      "Ensure compliance with project-specific and company-wide training requirements.",
    ],
    image: Fram4,
  },
  {
    id: 5,
    title: "Allowances",
    subtitle: "Manage employee holiday, sick, and parental leave with ease. Set entitlements during onboarding, and let the system automatically update balances as requests are approved — keeping everything accurate and transparent for both staff and management.",
    bulletTitle: "Allowances",
    bullets: [
      "Configure individual holiday, sick, and maternity/paternity allowances on account creation.",
      "Automatically deduct balances when leave requests are approved.",
      "Provide real-time visibility of remaining allowances for employees and managers.",
      "Maintain accurate records for reporting, payroll, and compliance.",
      "Streamline leave management while ensuring fairness and transparency.",
    ],
    image: Fram5,
  },
];

const MultiStackScroll = () => {
  return (
    <div className="stack-container" id="features">
      {pages.map((page) => (
        <section key={page.id} className="stack-section">
          <div className="stack-content">
            {/* Image on top */}
            <img
              src={page.image}
              alt={page.title || `Page ${page.id}`}
              className="stack-image"
            />

            {/* Two column layout */}
            <div className="stack-layout">
              <div className="stack-left">
                {page.title && <h2 className="stack-title">{page.title}</h2>}
                {page.subtitle && <p className="stack-subtitle">{page.subtitle}</p>}
              </div>

              <div className="stack-right">
                {/* <h3 className="stack-title">{page.bulletTitle}</h3> */}
                <ul className="bullet-list">
                  {page.bullets.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MultiStackScroll;
