import "../style/DescriptionSection.css";

const DescriptionSection = () => {
  return (
    <section className="description-section">
      <div className="blur-top"></div>
      <div className="blur-bottom"></div>

      <div className="description-content">
        <h4 className="description-title">
          Empower your organization with a smarter way to manage employees.
        </h4>
        <p className="description-text">
          Our all-in-one Employee Management Dashboard simplifies every aspect of workforce operations — from attendance tracking and onboarding to approvals, training, and payroll allowances. Designed for HRs, managers, and admins alike, the platform adapts to every role, ensuring efficiency, accuracy, and collaboration across teams. With real-time insights, automated workflows, and secure data handling, you can finally stop juggling multiple tools and manage your entire workforce from one intuitive, powerful dashboard.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
