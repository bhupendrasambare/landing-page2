import "../style/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <section className="description-section" id="goal">
      <div className="blur-top"></div>
      <div className="blur-bottom"></div>

      <div className="description-content">
        <h4 className="description-title">
          All-in-One Real-World Workforce Management Dashboard
        </h4>
        <p className="description-text">
          MPRAR brings every aspect of employee management together in one powerful, easy-to-use platform. From digital onboarding and attendance tracking to leave management, training, and allowances — every tool works seamlessly to simplify your day-to-day operations. Designed for HR teams, managers, and admins, MPRAR automates manual processes, ensures compliance, and keeps your workforce connected.
With real-time insights, digital contracts, automated workflows, and secure data storage, you can manage your entire workforce confidently — all from one central dashboard.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
