"use client";

import styles from "./Tenspick.module.css";

const TASKS = [
  "Managing client communication and requirements",
  "Understanding client needs and converting them into project requirements",
  "Coordinating website and digital projects",
  "Working with development and design workflows",
  "Overseeing project progress and delivery",
  "Maintaining client relationships",
  "Contributing to business and technology decisions",
  "Working on website and digital product development",
  "Supporting technology solutions and automation initiatives",
];

export default function Tenspick() {
  return (
    <section className={styles.tenspick} id="tenspick">
      <div className={styles.glowBg} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>BEYOND THE PROJECTS</span>
          <h2 className={styles.title}>BUILDING BEYOND CODE</h2>
          <p className={styles.quote}>
            &ldquo;Working at the intersection of technology, clients and execution.&rdquo;
          </p>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.roleInfo}>
            <div className={styles.brandBadge}>
              <span className={styles.brandName}>TENSPICK</span>
            </div>
            <span className={styles.roleTitle}>CLIENT MANAGER & DIRECTOR</span>
            <p className={styles.roleDesc}>
              TENSPICK is a technology and digital solutions initiative focused on websites, digital products, automation and technology solutions for businesses.
              Communicating value beyond writing code — understanding clients, managing projects, coordinating execution, and contributing to strategic business decisions.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>PROJECTS</span>
              <span className={styles.statSub}>Websites & digital projects delivered</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statLabel}>CLIENT MANAGEMENT</span>
              <span className={styles.statSub}>Understanding requirements & coordinating delivery</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statLabel}>TECHNOLOGY</span>
              <span className={styles.statSub}>Web development · Digital products · Automation</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statLabel}>BUSINESS</span>
              <span className={styles.statSub}>Client relationships · Project coordination · Digital solutions</span>
            </div>
          </div>
        </div>

        <div className={styles.responsibilitiesSection}>
          <h3 className={styles.sectionHeading}>KEY INVOLVEMENT & RESPONSIBILITIES</h3>
          <div className={styles.tasksGrid}>
            {TASKS.map((task, idx) => (
              <div key={idx} className={styles.taskCard}>
                <div className={styles.taskDot} />
                <span className={styles.taskText}>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
