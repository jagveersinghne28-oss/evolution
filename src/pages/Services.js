import React from "react";
import Footer from "../components/Footer";
import { ICONS } from "../utils/constants";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "userGroup",
    title: "Recruitment & Staffing",
    description:
      "Comprehensive talent acquisition services across all levels and industries.",
    details: [
      "Executive Search & Headhunting",
      "Permanent Staffing Solutions",
      "Contract & Temporary Staffing",
      "Campus Recruitment Programs",
      "Multilingual Candidate Placement",
    ],
  },
  {
    icon: "building",
    title: "HR Consulting",
    description:
      "Strategic HR solutions tailored to optimize your workforce management.",
    details: [
      "HR Policy Development",
      "Organizational Restructuring",
      "Compensation & Benefits Advisory",
      "Performance Management Systems",
      "Training & Development Programs",
    ],
  },
  {
    icon: "security",
    title: "Security Services",
    description:
      "Professional security personnel and management solutions for businesses.",
    details: [
      "Security Guard Deployment",
      "Corporate Security Solutions",
      "Event Security Management",
      "Security Audits & Consulting",
      "24/7 Security Monitoring",
    ],
  },
];

const industries = [
  {
    icon: (
      <img
        src={ICONS.it}
        alt="IT & Technology"
        style={{ width: "15%", height: "auto", borderRadius: 6 }}
      />
    ),
    title: "IT & Technology",
    roles: [
      "Software Engineers",
      "Data Scientists",
      "Project Managers",
      "DevOps Specialists",
    ],
  },
  {
    icon: (
      <img
        src={ICONS.banking}
        alt="Banking & Finance"
        style={{ width: "15%", height: "auto", borderRadius: 6 }}
      />
    ),
    title: "Banking & Finance",
    roles: [
      "Relationship Managers",
      "Credit Analysts",
      "Compliance Officers",
      "Branch Managers",
    ],
  },
  {
    icon: (
      <img
        src={ICONS.retail}
        alt="Retail"
        style={{ width: "15%", height: "auto", borderRadius: 6 }}
      />
    ),
    title: "Retail",
    roles: [
      "Store Managers",
      "Visual Merchandisers",
      "Category Managers",
      "Sales Associates",
    ],
  },
  {
    icon: (
      <img
        src={ICONS.hospitality}
        alt="Hospitality"
        style={{ width: "15%", height: "auto", borderRadius: 6 }}
      />
    ),
    title: "Hospitality",
    roles: [
      "Hotel Managers",
      "F&B Supervisors",
      "Front Desk Staff",
      "Housekeeping Leads",
    ],
  },
];

function ProcessStep({ num, title, children }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 200 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#ffc107" }}>
        {num}
      </div>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ color: "#6b7280", fontSize: 14 }}>{children}</div>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <section
        style={{
          background: "linear-gradient(90deg,#fff8f0,#fff)",
          padding: "56px 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 42, margin: 0, lineHeight: 1.05 }}>
            Our Services
          </h1>
          <p style={{ color: "#6b7280", maxWidth: 720, margin: "8px auto" }}>
            Comprehensive HR and staffing solutions designed to meet the unique
            needs of your organization
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0" }}>
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  padding: 24,
                  background: "#FFF6E3",
                  height: "100%",
                  flexDirection: "column",
                  borderRadius: "12px 0 0 12px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    borderRadius: 12,
                    padding: 16,
                    height: "fit-content",
                    fontSize: "2rem",
                  }}
                >
                  <img
                    src={ICONS[service.icon]}
                    alt={service.icon}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <h3
                    style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{ color: "#6b7280", margin: 0, fontSize: "0.95rem" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 24,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    style={{
                      color: "#6b7280",
                      fontSize: "0.95rem",
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#e9a616", fontWeight: 700 }}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fbf6ee", padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, margin: "0 0 8px" }}>
            Industries We Serve
          </h2>
          <p style={{ color: "#6b7280", margin: "0 0 24px" }}>
            Specialized expertise across key sectors of the Indian economy
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 16,
            }}
          >
            {industries.map((industry) => (
              <div
                key={industry.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 20,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>
                  {industry.icon}
                </div>
                <h4
                  style={{
                    margin: "0 0 12px",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {industry.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {industry.roles.map((role) => (
                    <li
                      key={role}
                      style={{
                        color: "#6b7280",
                        fontSize: "0.9rem",
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#e9a616",
                        }}
                      />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 32, margin: "0 0 8px" }}>Our Process</h2>
          <p style={{ color: "#6b7280", margin: "0 0 24px" }}>
            A systematic approach to finding the perfect match
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 24,
            }}
          >
            <ProcessStep num="01" title="Requirement">
              Understanding your specific needs and role requirements
            </ProcessStep>
            <ProcessStep num="02" title="Search">
              Leveraging our extensive network to find the best matches
            </ProcessStep>
            <ProcessStep num="03" title="Evaluate">
              Rigorous evaluation of skills and cultural fit
            </ProcessStep>
            <ProcessStep num="04" title="Onboard">
              Seamless onboarding and post-placement follow‑up
            </ProcessStep>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#082b51",
          color: "#fff",
          padding: "36px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: 32, margin: "0 0 8px" }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", margin: "0 0 16px" }}>
            Let's discuss how we can help you find the right talent or the
            perfect opportunity.
          </p>
          <button
            style={{
              background: "#ffffff",
              borderRadius: "8px",
              color: "#00000",
              fontSize: "1rem",
              padding: "8px 16px",
            }}
          >
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Our Team
            </Link>
          </button>
        </div>
      </section>

      <Footer dark />
    </div>
  );
}
